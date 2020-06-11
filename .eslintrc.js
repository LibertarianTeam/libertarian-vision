const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': isDevelopment ? 'off' : 'warn',
    'no-unused-vars': isDevelopment ? 'off' : 'error',
    'vue/no-v-html': 'off',
    'vue/return-in-computed-property': 'off'
  }
}
