<script>
import Theme from '@/components/Theme'
import Button from '@/components/Button'
import Figure from '@/components/Figure'
import Dropdown from '@/components/Dropdown'

export default {
  name: 'AppBarMainNav',
  components: {
    'c-theme': Theme,
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
    <div class="content">
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
    </div>

    <c-theme fab></c-theme>
  </nav>
</template>

<style lang="css" scoped>
.v-nav {
  display: flex;

  align-items: flex-end;
  justify-content: space-between;
}

.v-nav .content {
  display: flex;
  align-items: flex-end;
}

.c-theme {
  width: 36px;
  height: 36px;

  margin: 0 0 12px;
}

.v-nav .content > .c-button.icon {
  padding: 6px 22px;
}

.v-nav .content > .c-button.icon .c-figure {
  width: 22px;
  height: 22px;
}

.dark .v-nav .content > .c-button.icon .c-figure {
  fill: #fff;
}

.c-dropdown::after,
.v-nav .content > .c-button.icon::after {
  content: '';
  position: absolute;

  width: 0;
  height: 3px;

  margin: 0 auto;

  left: 0;
  right: 0;
  bottom: 0;

  transition: width 0.2s;
  background-color: var(--bg-secondary);
}

.c-dropdown:hover::after,
.v-nav .content > .c-button.icon:hover::after {
  width: 100%;
}
</style>
