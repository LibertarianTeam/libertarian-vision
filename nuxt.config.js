import {
  defaultMetaInfo,
  GenerateInitialMetaInfo
} from './src/plugins/vue-meta'

export default {
  mode: 'universal',
  srcDir: 'src/',
  loading: { color: '#fff' },
  head: GenerateInitialMetaInfo(),
  css: ['@/assets/styles/main.css'],
  plugins: [],
  modules: ['@nuxtjs/pwa', '@nuxtjs/dotenv'],
  buildModules: ['@nuxtjs/svg', '@nuxtjs/eslint-module'],
  router: {
    extendRoutes(routes, resolve) {
      routes.forEach((route) => {
        if (route.name === 'index') route.alias = ['/home']
      })
    }
  },
  build: {
    extend(config, ctx) {}
  },
  generate: {
    dir: 'production/dist'
  },
  pwa: {
    meta: {
      lang: 'pt-BR',
      display: 'standalone',
      name: defaultMetaInfo.title,
      author: defaultMetaInfo.author.site,
      theme_color: defaultMetaInfo.themeColor,
      msTileColor: defaultMetaInfo.themeColor,
      appleStatusBarStyle: defaultMetaInfo.themeColor
    },
    manifest: {
      name: 'AncapSU',
      start_url: '.',
      lang: 'pt-BR',
      short_name: 'AncapSU',
      description: 'Imposto é roubo e sonegar é legitima defesa.',
      background_color: '#000'
    }
  }
}
