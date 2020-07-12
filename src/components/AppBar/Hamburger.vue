<script>
import Button from '~/components/Button'
import Figure from '~/components/Figure'

export default {
  name: 'AppBarHamburger',
  components: {
    'c-button': Button,
    'c-figure': Figure
  }
}
</script>

<template lang="html">
  <c-button
    class="c-app-bar-hamburger"
    title="Menu de Navegação"
    img
    @click="$emit('click', $event)"
  >
    <c-figure src="icons/hamburger.svg"></c-figure>
  </c-button>
</template>

<style lang="css" scoped>
.c-app-bar-hamburger {
  padding: 2px;
}

.c-app-bar-hamburger .c-figure {
  width: 26px;
  height: 26px;

  fill: #fff;
}
</style>
