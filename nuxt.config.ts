import { defineNuxtConfig } from "nuxt3";
import metaConfig from "./src/plugins/vue-meta";

export default defineNuxtConfig({
  srcDir: "src",
  meta: metaConfig,
  css: [
    "bulma",
    "@fortawesome/fontawesome-free/css/all.css",
    "~/assets/fonts/import.scss",
    "~/assets/styles/import.scss",
  ],
});
