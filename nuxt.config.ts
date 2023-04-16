// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { head: { title: "Visão Libertária", htmlAttrs: { lang: "pt-br" } } },
  css: ["~/assets/styles/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
