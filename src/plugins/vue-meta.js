export const defaultMetaInfo = {
  title: 'AncapSU',
  description:
    'Plataforma do canal Ancap.SU cuje o objetivo é divulgar o libertarianismo através de vídeos teóricos, cômicos e o jornal diário Visão Libertária.',
  figure: {
    url: `${process.env.BASE_URL}/home.jpg`,
    alt: 'AncapSU'
  },
  card: 'summary_large_imag',
  date: 'Apr 15, 2020',
  url: process.env.BASE_URL,
  author: {
    site: 'Paulo Ricardo, https://github.com/paulloclara',
    twitter: '@ancapsu',
    facebook: '@pageancapsu'
  },
  themeColor: '#fc0'
}

export function generateInitialMetaInfo() {
  return {
    htmlAttrs: { lang: 'pt-BR', dir: 'ltr' },
    titleTemplate: `%s - ${defaultMetaInfo.title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: defaultMetaInfo.title },
      { name: 'apple-mobile-web-app-title', content: defaultMetaInfo.title },
      { name: 'author', content: defaultMetaInfo.author.site },
      { name: 'generator', content: 'Nuxt2' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'imagemode', content: 'force' },
      { name: 'full-screen', content: 'yes' },
      { name: 'wap-font-scale', content: 'no' },
      { name: 'layoutmode', content: 'fitscreen' },
      { name: 'browsermode', content: 'application' },
      { name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { name: 'screen-orientation', content: 'landscape/portrait' },
      { name: 'x5-page-mode', content: 'app' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'x5-orientation', content: 'landscape/portrait' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    noscript: [
      {
        innerHTML:
          'Para o correto funcionamento deste site é necessario que a permisão de usode scripts esteja ativada!'
      }
    ]
  }
}

export function generateFacebookMetaInfo(metaInfo) {
  return {
    meta: [
      {
        property: 'og:url',
        metaid: 'og:url',
        content: metaInfo.url || defaultMetaInfo.url
      },
      {
        property: 'og:title',
        metaid: 'og:title',
        content: metaInfo.title || defaultMetaInfo.title
      },
      {
        property: 'og:image',
        metaid: 'og:image',
        content: metaInfo.figure
          ? metaInfo.figure.src
          : defaultMetaInfo.figure.url
      },
      {
        property: 'og:image:alt',
        metaid: 'og:image:alt',
        content: metaInfo.figure
          ? metaInfo.figure.alt
          : defaultMetaInfo.figure.alt
      },
      {
        property: 'og:description',
        metaid: 'og:description',
        content: metaInfo.description || defaultMetaInfo.description
      },
      { property: 'og:type', metaid: 'og:type', content: 'website' },
      { property: 'og:locale', metaid: 'og:locale', content: 'pt_BR' },
      {
        property: 'og:site_name',
        metaid: 'og:site_name',
        content: defaultMetaInfo.author.facebook
      },
      {
        property: 'article:author',
        metaid: 'article:author',
        content: metaInfo.author
          ? metaInfo.athor.facebook
          : defaultMetaInfo.author.facebook
      }
    ]
  }
}

export function generateTwitterMetaInfo(metaInfo) {
  return {
    meta: [
      {
        name: 'twitter:url',
        metaid: 'twitter:url',
        content: metaInfo.url || defaultMetaInfo.url
      },
      {
        name: 'twitter:card',
        metaid: 'twitter:card',
        content: metaInfo.card || defaultMetaInfo.card
      },
      {
        name: 'twitter:title',
        metaid: 'twitter:title',
        content: metaInfo.title || defaultMetaInfo.title
      },
      {
        name: 'twitter:image',
        metaid: 'twitter:image',
        content: metaInfo.figure
          ? metaInfo.figure.src
          : defaultMetaInfo.figure.url
      },
      {
        name: 'twitter:image:alt',
        metaid: 'twitter:image:alt',
        content: metaInfo.figure
          ? metaInfo.figure.alt
          : defaultMetaInfo.figure.alt
      },
      {
        name: 'twitter:description',
        metaid: 'twitter:description',
        content: metaInfo.description || defaultMetaInfo.description
      },
      {
        name: 'twitter:site',
        metaid: 'twitter:site',
        content: defaultMetaInfo.author.twitter
      },
      {
        name: 'twitter:creator',
        metaid: 'twitter:creator',
        content: metaInfo.author
          ? metaInfo.author.twitter
          : defaultMetaInfo.author.twitter
      }
    ]
  }
}

export function generateSchemaAndWebchatMetaInfo(metaInfo) {
  return {
    meta: [
      { itemprop: 'name', content: metaInfo.title || defaultMetaInfo.title },
      {
        itemprop: 'image',
        content: metaInfo.figure
          ? metaInfo.figure.src
          : defaultMetaInfo.figure.url
      },
      {
        itemprop: 'description',
        content: metaInfo.description || defaultMetaInfo.description
      }
    ]
  }
}

export function generatePageMetaInfo(metaInfo) {
  return {
    title: metaInfo.title,
    link: [{ rel: 'canonical', href: metaInfo.url || defaultMetaInfo.url }],
    meta: [
      {
        name: 'date',
        metaid: 'date',
        content: metaInfo.date || defaultMetaInfo.date
      },
      {
        name: 'revised',
        metaid: 'revised',
        content: metaInfo.revised || metaInfo.date || defaultMetaInfo.date
      },
      {
        name: 'description',
        metaid: 'description',
        content: metaInfo.description || defaultMetaInfo.description
      }
    ]
  }
}

export default ({ page = {}, social = {} }) => {
  const pageMetaInfo = generatePageMetaInfo(page)
  const twitterMetaInfo = generateTwitterMetaInfo(social)
  const facebookMetaInfo = generateFacebookMetaInfo(social)
  const schemaAndWebChatMetaInfo = generateSchemaAndWebchatMetaInfo(social)

  return {
    title: pageMetaInfo.title,
    meta: [
      ...pageMetaInfo.meta,
      ...twitterMetaInfo.meta,
      ...facebookMetaInfo.meta,
      ...schemaAndWebChatMetaInfo.meta
    ]
  }
}
