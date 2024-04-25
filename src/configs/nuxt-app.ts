import type { NuxtConfig } from "nuxt/schema";

const config: NuxtConfig["app"] = {
  head: {
    title: "Visão libertária",
    htmlAttrs: { lang: "pt-BR", dir: "ltr" },
    titleTemplate: "%s | Visão libertária",
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    meta: [
      {
        name: "description",
        content:
          "Jornal colaborativo no qual muitas pessoas participam da criação, edição, escolha dos temas e conseguem receber algumas migalhas que o youtube, de vez em quando, joga na gente.",
      },
    ],
  },
};

export default config;
