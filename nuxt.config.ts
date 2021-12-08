import { defineNuxtConfig } from "nuxt3";
import metaConfig from "./src/plugins/vue-meta";

export default defineNuxtConfig({
  srcDir: "src",
  meta: metaConfig,
  css: ["~/assets/styles/import.scss", "~/assets/fonts/import.scss", "@fortawesome/fontawesome-free/css/all.css"],
});
