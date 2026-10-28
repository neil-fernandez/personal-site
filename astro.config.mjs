// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { visit } from "unist-util-visit";
import { fromHtml } from "hast-util-from-html";

// onnxruntime-web loads its wasm loader via a runtime `import()` in the browser.
// In dev, Vite injects a `?import` query into that request, which fails because
// the loader lives in /public. This dev-only middleware serves /ort/* directly.
function ortWasmDevServer() {
  return {
    name: "ort-wasm-dev-server",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || "").split("?")[0];
        if (!url.startsWith("/ort/")) return next();
        const file = join(process.cwd(), "public", url);
        if (!existsSync(file) || !statSync(file).isFile()) return next();
        const type = extname(file) === ".wasm" ? "application/wasm" : "text/javascript";
        res.setHeader("Content-Type", type);
        res.end(readFileSync(file));
      });
    },
  };
}

// The project "how it works" diagrams are static SVG files referenced from
// markdown as <img>. As images they can't inherit the page's `.dark` class, so
// they render washed-out in dark mode. This plugin inlines any `/diagrams/*.svg`
// reference at build time so the SVG can be themed with CSS variables (see
// global.css). It also tags the node with a `diagram` class for layout styling.
function rehypeInlineDiagrams() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "img" || !parent || typeof index !== "number") return;
      const src = node.properties && typeof node.properties.src === "string" ? node.properties.src : null;
      if (!src || !src.startsWith("/diagrams/")) return;

      let svgText;
      try {
        svgText = readFileSync(join(process.cwd(), "public", src), "utf8");
      } catch {
        return;
      }

      const fragment = fromHtml(svgText, { fragment: true });
      const svg = fragment.children.find(
        (child) => child.type === "element" && child.tagName === "svg",
      );
      if (!svg) return;

      svg.properties = {
        ...(svg.properties || {}),
        className: ["diagram"],
      };
      parent.children[index] = svg;
    });
  };
}

export default defineConfig({
  site: "https://neilf.org",
  trailingSlash: "never",
  integrations: [tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeInlineDiagrams],
  },
  vite: {
    plugins: [ortWasmDevServer()],
    optimizeDeps: {
      exclude: ["onnxruntime-web"],
    },
    resolve: {
      conditions: ["onnxruntime-web-use-extern-wasm", "module", "browser", "development|production"],
    },
  },
});
