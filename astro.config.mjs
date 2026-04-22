import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://humanapprovedai.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
