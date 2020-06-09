import { defaultMetaInfo } from './vue-meta'

export default {
  meta: {
    lang: 'pt-BR',
    name: defaultMetaInfo.title,
    author: defaultMetaInfo.author.site,
    theme_color: defaultMetaInfo.themeColor,
    msTileColor: defaultMetaInfo.themeColor,
    appleStatusBarStyle: defaultMetaInfo.themeColor
  },
  manifest: {
    display: 'standalone',
    name: defaultMetaInfo.title,
    short_name: defaultMetaInfo.title,
    lang: 'pt-BR',
    start_url: '.',
    description: defaultMetaInfo.description,
    background_color: defaultMetaInfo.themeColor
  }
}
