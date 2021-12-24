import { defineNuxtConfig } from "nuxt3";
import metaConfig from "./src/plugins/vue-meta";

export default defineNuxtConfig({
  srcDir: "src",
  meta: metaConfig,
  css: ["~/assets/styles/import.scss", "~/assets/fonts/import.scss", "@fortawesome/fontawesome-free/css/all.css"],
  buildModules: ["@pinia/nuxt"],
  publicRuntimeConfig: {
    mail: process.env.NUXT_ENV_MAIL,
    libertarianVisionAPI: process.env.NUXT_ENV_LIBERTARIAN_VISION_API,
  },
});
