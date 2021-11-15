import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  srcDir: "src",
  meta: {
    htmlAttrs: { lang: "pt-BR", dir: "ltr" },
    titleTemplate: `%s | Visão libertária`,
  },
  css: [
    "bulma",
    "@fortawesome/fontawesome-free/css/all.css",
    "~/assets/styles/import.scss",
    "~/assets/fonts/import.scss",
  ],
});
