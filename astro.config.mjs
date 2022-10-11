import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kairoverse.com',
  integrations: [tailwind(), mdx(), preact(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap({
    customPages: [
      'https://kairoverse.com',
      'https://kairoverse.com/about'
    ]
  })],
  output: "server",
  adapter: vercel()
});