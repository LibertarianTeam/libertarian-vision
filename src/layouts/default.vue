<script>
import AppBar from '@/views/AppBar'
import FooterBar from '@/views/FooterBar'
import Loading from '@/components/Loading'

export default {
  name: 'DefaultLayout',
  components: {
    'v-app-bar': AppBar,
    'c-loading': Loading,
    'v-footer-bar': FooterBar
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    appClass() {
      return `light-theme${this.$data.show ? ' show' : ''}`
    }
  },
  mounted() {
    this.$store.commit('updateWindowSize')

    window.addEventListener('resize', () => {
      this.$store.commit('updateWindowSize')
    })

    this.$data.show = true
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
    <c-loading v-if="!$data.show"></c-loading>

    <v-app-bar></v-app-bar>
    <nuxt></nuxt>
    <v-footer-bar></v-footer-bar>
  </div>
</template>

<style lang="css" scoped>
#app {
  color: var(--text-primary);
  word-spacing: 1px;
  font-family: Merriweather Sans, Arial, sans-serif;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

#app > *:not(.c-loading) {
  opacity: 0;
  transition: opacity 1.4s;
}

#app.show > * {
  opacity: 1;
}

.light-theme {
  --primary: #fc0;
  --secondary: #03a9f4;
  --tertiary: #e1e1e1;

  --error: #f44336;
  --warning: #ffeb3b;
  --success: #4caf50;

  --info: #ffc107;
  --accent: #607d8b;

  --text-primary: #000;
  --text-secondary: #fff;
  --text-tertiary: #fc0;

  --bd-primary: #000c;
  --bd-secondary: #000e;
  --bd-tertiary: #fc06;

  --bx-primary: #0002;
  --bx-secondary: #0004;
  --bx-tertiary: #0008;

  --bg-primary: #fff;
}
</style>
