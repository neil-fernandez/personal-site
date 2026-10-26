export interface FaqEntry {
  q: string;
  a: string;
}

export const faq: FaqEntry[] = [
  { q: "How do I reset my password?", a: "Go to Settings → Security → Reset password. You'll receive an email link valid for 15 minutes." },
  { q: "What is the refund policy?", a: "Refunds are available within 30 days of purchase for unused credits." },
  { q: "How much does Acme Cloud cost?", a: "Plans start at $10 per month, with a free tier for small projects." },
  { q: "How do I deploy an app?", a: "Connect your Git repository and Acme builds and serves your app on a global CDN." },
  { q: "Is there a free tier?", a: "Yes — the free tier includes 100k requests per month and 1GB of storage." },
  { q: "How do I contact support?", a: "Email support@acme.example or use the in-app chat, available 24/7." },
  { q: "How is my data kept private?", a: "Data is encrypted in transit and at rest, and we never sell customer data." },
  { q: "What is the uptime guarantee?", a: "Acme Cloud offers a 99.9% uptime SLA on paid plans." },
];

export const samples: string[] = [
  "How do I reset my password?",
  "What is the refund policy?",
  "How much does Acme Cloud cost?",
  "How do I deploy an app?",
  "Is there a free tier?",
  "How is my data kept private?",
];
