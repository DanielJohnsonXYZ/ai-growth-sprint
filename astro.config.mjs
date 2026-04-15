import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aigrowthsprint.co.uk",
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
