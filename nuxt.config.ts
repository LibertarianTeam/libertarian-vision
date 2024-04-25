// https://nuxt.com/docs/api/configuration/nuxt-config
import nuxtAppConfig from "./src/configs/nuxt-app";

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  css: ["~/assets/styles/import.scss", "~/assets/fonts/import.scss", "@fortawesome/fontawesome-free/css/all.css"],
  modules: ["@pinia/nuxt"],
  app: nuxtAppConfig,
});
