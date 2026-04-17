import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://humanapprovedai.com",
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/contact/thanks/"),
    }),
  ],
});
