// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";

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

export default defineConfig({
  site: "https://neilf.org",
  trailingSlash: "never",
  integrations: [tailwind(), sitemap()],
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
