<script>
import Button from '~/components/Button'
import Figure from '~/components/Figure'

export default {
  name: 'Theme',
  components: {
    'c-button': Button,
    'c-figure': Figure
  },
  props: {
    fab: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDark() {
      return this.$store.state.theme === 'dark'
    }
  },
  methods: {
    handleClick() {
      this.$store.commit('updateTheme')
    }
  }
}
</script>

<template lang="html">
  <c-button
    class="c-theme"
    :title="`Mudar para tema ${isDark ? 'Light' : 'Dark'}`"
    :fab="$props.fab"
    :outlined="$props.outlined"
    @click="handleClick"
  >
    <c-figure :src="`icons/${isDark ? 'sun' : 'moon'}.svg`"></c-figure>
  </c-button>
</template>

<style lang="css" scoped>
.c-theme {
  border-color: var(--primary);
}

.c-theme .c-figure {
  width: 100%;
  height: 100%;

  fill: #fff;
}
</style>
