<script>
import buildClass from 'build-css-class'

import Loading from '~/components/Loading'
import AppBar from '~/components/AppBar'
import FooterBar from '~/components/FooterBar'

export default {
  name: 'DefaultLayout',
  components: {
    'c-loading': Loading,
    'c-app-bar': AppBar,
    'c-footer-bar': FooterBar
  },
  computed: {
    showApp() {
      return this.$store.state.showApp
    },
    theme() {
      return this.$store.state.theme
    },
    appClass() {
      return buildClass(this.theme, { show: this.showApp })
    }
  },
  mounted() {
    this.$store.commit('updateWindowSize')

    window.addEventListener('resize', () => {
      this.$store.commit('updateWindowSize')
    })

    const theme = localStorage.getItem('theme')
    if (theme) this.$store.commit('updateTheme', { theme })

    this.$store.commit('updateShowAppStatus', { show: true })
  },
  destroyed() {
    window.removeEventListener('resize', () => {
      this.$store.commit('updateWindowSize')
    })
  }
}
</script>

<template lang="html">
  <div id="app" :class="appClass">
    <c-loading v-if="!showApp"></c-loading>

    <c-app-bar></c-app-bar>
    <nuxt></nuxt>
    <c-footer-bar></c-footer-bar>
  </div>
</template>

<style lang="css" scoped>
#app {
  color: var(--text-primary);
  font-size: 16px;
  word-spacing: 1px;
  font-family: Merriweather Sans, Arial, sans-serif;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  transition: color 0.2s linear, background-color 0.2s linear;
  background-color: var(--bg-primary);
}

#app > *:not(.c-loading) {
  opacity: 0;
  transition: opacity 1.4s;
}

#app.show > * {
  opacity: 1;
}
</style>
