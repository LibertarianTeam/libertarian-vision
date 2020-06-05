<script>
import Button from '@/components/Button'
import Figure from '@/components/Figure'

export default {
  name: 'AppBarHamburger',
  components: {
    'c-button': Button,
    'c-figure': Figure
  },
  methods: {
    handleHamburgerClick() {
      const { visible } = this.$store.state.appBar.sideNav
      this.$store.commit('updateAppBarSideNavStatus', { visible: !visible })
    }
  }
}
</script>

<template lang="html">
  <c-button
    class="v-hamburger"
    title="Menu de Navegação"
    img
    @click="handleHamburgerClick"
  >
    <c-figure src="icons/hamburger.svg"></c-figure>
  </c-button>
</template>

<style lang="css" scoped>
.v-hamburger {
  padding: 2px;
}

.c-figure {
  width: 26px;
  height: 26px;

  fill: #fff;
}
</style>
