import './src/plugins/dotenv'

import pwaConfigs from './src/plugins/vue-pwa'
import axiosConfigs from './src/plugins/axios'
import routerConfigs from './src/plugins/vue-router'
import { generateInitialMetaInfo } from './src/plugins/vue-meta'

export default {
  mode: 'universal',
  srcDir: 'src/',
  pwa: pwaConfigs,
  head: generateInitialMetaInfo(),
  axios: axiosConfigs,
  router: routerConfigs,
  css: ['~/assets/styles/main.css', '~/assets/styles/theme.css'],
  generate: { dir: 'production/dist' },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  buildModules: ['@nuxtjs/dotenv', '@nuxtjs/svg', '@nuxtjs/eslint-module']
}
