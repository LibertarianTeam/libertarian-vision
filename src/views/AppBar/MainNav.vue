<script>
import Button from '@/components/Button'
import Figure from '@/components/Figure'
import Dropdown from '@/components/Dropdown'

export default {
  name: 'AppBarMainNav',
  components: {
    'c-button': Button,
    'c-figure': Figure,
    'c-dropdown': Dropdown
  },
  computed: {
    navItems() {
      return this.$store.state.static.navItems
    }
  }
}
</script>

<template lang="html">
  <nav class="v-nav">
    <c-button title="Home" :to="{ name: 'index' }" icon>
      <c-figure src="icons/home.svg"></c-figure>
    </c-button>

    <c-dropdown
      v-for="(navItem, index) in navItems"
      :key="index"
      :to="navItem.to"
      :items="navItem.items"
    >
      {{ navItem.text }}
    </c-dropdown>
  </nav>
</template>

<style lang="css" scoped>
.v-nav {
  display: inline-flex;
}

.v-nav > .c-button.icon {
  padding: 6px 22px;
}

.v-nav > .c-button.icon .c-figure {
  width: 22px;
  height: 22px;
}

.c-dropdown::after,
.v-nav > .c-button.icon::after {
  content: '';
  position: absolute;

  width: 0;
  height: 3px;

  margin: 0 auto;

  left: 0;
  right: 0;
  bottom: 0;

  transition: width 0.2s;
  background-color: var(--bd-primary);
}

.v-nav > .c-button.icon::after {
  height: 4px;
}

.c-dropdown:hover::after,
.v-nav > .c-button.icon:hover::after {
  width: 100%;
}
</style>
