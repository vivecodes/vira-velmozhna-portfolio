import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://viravelmozhna.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
