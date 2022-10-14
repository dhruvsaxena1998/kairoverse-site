import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kairoverse.com",
  integrations: [
    tailwind(),
    mdx(),
    preact(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap({
      filter: (page) =>
        page !== "https://www.kairoverse.com/cdn-cgi/l/email-protection",
      customPages: [
        "https://www.kairoverse.com",
        "https://www.kairoverse.com/about",
      ],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
