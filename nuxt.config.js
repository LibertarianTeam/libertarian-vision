import pwaConfigs from './src/plugins/vue-pwa'
import routerConfigs from './src/plugins/vue-router'
import { generateInitialMetaInfo } from './src/plugins/vue-meta'

export default {
  mode: 'universal',
  srcDir: 'src/',
  pwa: pwaConfigs,
  head: generateInitialMetaInfo(),
  router: routerConfigs,
  css: ['~/assets/styles/main.css', '~/assets/styles/theme.css'],
  generate: { dir: 'production/dist' },
  modules: ['@nuxtjs/pwa', '@nuxtjs/dotenv'],
  buildModules: ['@nuxtjs/svg', '@nuxtjs/eslint-module']
}
