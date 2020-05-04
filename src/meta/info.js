import { getAsset } from "@/utils";

const defaultMetaInfo = {
  title: "AncapSU",
  description:
    "Plataforma do canal Ancap.SU cuje o objetivo é divulgar o libertarianismo através de vídeos teóricos, cômicos e o jornal diário Visão Libertária.",
  figure: {
    url: getAsset("imgs/home.jpg", { fullURL: true }),
    alt: "AncapSU"
  },
  card: "summary_large_imag",
  date: "Apr 15, 2020",
  url: process.env.VUE_APP_PRODUCTION_URL,
  author: {
    site: "Paulo Ricardo, https://github.com/paulloclara",
    twitter: "@ancapsu",
    facebook: "@pageancapsu"
  }
};

export function GenerateInitialMetaInfo() {
  return {
    titleTemplate: `%s | ${defaultMetaInfo.title}`,
    meta: [
      { name: "application-name", content: defaultMetaInfo.title },
      { name: "author", content: defaultMetaInfo.author.site },
      { name: "generator", content: "VueCLI4" },
      { name: "robots", content: "index, nofollow" },
      { name: "googlebot", content: "index, nofollow" },
      { name: "imagemode", content: "force" },
      { name: "full-screen", content: "yes" },
      { name: "wap-font-scale", content: "no" },
      { name: "layoutmode", content: "fitscreen" },
      { name: "browsermode", content: "application" },
      { name: "renderer", content: "webkit|ie-comp|ie-stand" },
      { name: "screen-orientation", content: "landscape/portrait" },
      { name: "x5-page-mode", content: "app" },
      { name: "x5-fullscreen", content: "true" },
      { name: "x5-orientation", content: "landscape/portrait" }
    ]
  };
}

export function GenerateFacebookMetaInfo(metaInfo) {
  return {
    meta: [
      {
        property: "og:url",
        metaid: "og:url",
        content: metaInfo.url || defaultMetaInfo.url
      },
      {
        property: "og:title",
        metaid: "og:title",
        content: metaInfo.title || defaultMetaInfo.title
      },
      {
        property: "og:image",
        metaid: "og:image",
        content: metaInfo.figure
          ? getAsset(metaInfo.figure.src, { fullURL: true })
          : defaultMetaInfo.figure.url
      },
      {
        property: "og:image:alt",
        metaid: "og:image:alt",
        content: metaInfo.figure
          ? metaInfo.figure.alt
          : defaultMetaInfo.figure.alt
      },
      {
        property: "og:description",
        metaid: "og:description",
        content: metaInfo.description || defaultMetaInfo.description
      },
      { property: "og:type", metaid: "og:type", content: "website" },
      { property: "og:locale", metaid: "og:locale", content: "pt_BR" },
      {
        property: "og:site_name",
        metaid: "og:site_name",
        content: defaultMetaInfo.author.facebook
      },
      {
        property: "article:author",
        metaid: "article:author",
        content: metaInfo.author
          ? metaInfo.athor.facebook
          : defaultMetaInfo.author.facebook
      }
    ]
  };
}

export function GenerateTwitterMetaInfo(metaInfo) {
  return {
    meta: [
      {
        name: "twitter:url",
        metaid: "twitter:url",
        content: metaInfo.url || defaultMetaInfo.url
      },
      {
        name: "twitter:card",
        metaid: "twitter:card",
        content: metaInfo.card || defaultMetaInfo.card
      },
      {
        name: "twitter:title",
        metaid: "twitter:title",
        content: metaInfo.title || defaultMetaInfo.title
      },
      {
        name: "twitter:image",
        metaid: "twitter:image",
        content: metaInfo.figure
          ? getAsset(metaInfo.figure.src, { fullURL: true })
          : defaultMetaInfo.figure.url
      },
      {
        name: "twitter:image:alt",
        metaid: "twitter:image:alt",
        content: metaInfo.figure
          ? metaInfo.figure.alt
          : defaultMetaInfo.figure.alt
      },
      {
        name: "twitter:description",
        metaid: "twitter:description",
        content: metaInfo.description || defaultMetaInfo.description
      },
      {
        name: "twitter:site",
        metaid: "twitter:site",
        content: defaultMetaInfo.author.twitter
      },
      {
        name: "twitter:creator",
        metaid: "twitter:creator",
        content: metaInfo.author
          ? metaInfo.author.twitter
          : defaultMetaInfo.author.twitter
      }
    ]
  };
}

export function GenerateSchemaAndWebchatMetaInfo(metaInfo) {
  return {
    meta: [
      { itemprop: "name", content: metaInfo.title || defaultMetaInfo.title },
      {
        itemprop: "image",
        content: metaInfo.figure
          ? getAsset(metaInfo.figure.src, { fullURL: true })
          : defaultMetaInfo.figure.url
      },
      {
        itemprop: "description",
        content: metaInfo.description || defaultMetaInfo.description
      }
    ]
  };
}

export function GeneratePageMetaInfo(metaInfo) {
  return {
    title: metaInfo.title,
    link: [{ rel: "canonical", href: metaInfo.url || defaultMetaInfo.url }],
    meta: [
      {
        name: "date",
        metaid: "date",
        content: metaInfo.date || defaultMetaInfo.date
      },
      {
        name: "revised",
        metaid: "revised",
        content: metaInfo.revised || metaInfo.date || defaultMetaInfo.date
      },
      {
        name: "description",
        metaid: "description",
        content: metaInfo.description || defaultMetaInfo.description
      }
    ]
  };
}

export default function GenerateMetaInfo({ page = {}, social = {} }) {
  const pageMetaInfo = GeneratePageMetaInfo(page);
  const twitterMetaInfo = GenerateTwitterMetaInfo(social);
  const facebookMetaInfo = GenerateFacebookMetaInfo(social);
  const schemaAndWebChatMetaInfo = GenerateSchemaAndWebchatMetaInfo(social);

  return {
    title: pageMetaInfo.title,
    meta: [
      ...pageMetaInfo.meta,
      ...twitterMetaInfo.meta,
      ...facebookMetaInfo.meta,
      ...schemaAndWebChatMetaInfo.meta
    ]
  };
}
