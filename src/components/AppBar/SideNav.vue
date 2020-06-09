<script>
import buildClass from 'build-css-class'

import Theme from '~/components/Theme'
import Button from '~/components/Button'
import Figure from '~/components/Figure'
import Dropdown from '~/components/Dropdown'

export default {
  name: 'AppBarSideNav',
  components: {
    'c-theme': Theme,
    'c-button': Button,
    'c-figure': Figure,
    'c-dropdown': Dropdown
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    navItems() {
      return this.$store.state.static.internalNavItems
    },
    sideNavClass() {
      return buildClass('c-app-bar-side-nav', {
        show: this.$props.show
      })
    }
  }
}
</script>

<template lang="html">
  <div :class="sideNavClass" @click="$emit('hide', $event)">
    <nav class="nav" @click.stop>
      <c-button
        title="Home"
        :to="{ name: 'index' }"
        icon
        @click.stop="$emit('hide', $event)"
      >
        <c-figure src="icons/home.svg"></c-figure>
      </c-button>

      <c-dropdown
        v-for="(navItem, index) in navItems"
        :key="index"
        :items="navItem.items"
        :to="navItem.to"
        contained
        @click:main.stop="$emit('hide', $event)"
        @click:item.stop="$emit('hide', $event)"
      >
        {{ navItem.text }}
      </c-dropdown>

      <c-theme outlined></c-theme>
    </nav>
  </div>
</template>

<style lang="css" scoped>
.c-app-bar-side-nav {
  position: fixed;

  width: 0;
  height: 100%;

  opacity: 0;
  overflow-x: hidden;

  top: 0;
  left: 0;

  z-index: 4;
  transition: 0.4s 0.1s ease-in;

  background-color: var(--bg-tertiary);
}

.c-app-bar-side-nav.show {
  width: 100%;
  opacity: 1;
}

.nav {
  display: flex;
  flex-direction: column;

  width: 74%;
  height: 100%;
  min-width: 180px;
  max-width: 240px;

  overflow: hidden;
  transition: width 1s;

  background-color: var(--bg-tertiary);
}

.nav > .c-button.icon {
  padding: 12px 0;
}

.nav > .c-button.icon:hover {
  filter: opacity(60%);
}

.nav > .c-button.icon .c-figure {
  width: 22px;
  height: 22px;

  fill: #fff;
}

.c-theme {
  width: 100%;
  height: 48px;

  margin: auto 0 1px;
  padding: 6px 0;
}
</style>
