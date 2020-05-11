<script>
import { buildClass } from "@/utils";

import Button from "@/components/Button";
import Figure from "@/components/Figure";
import Dropdown from "@/components/Dropdown";

export default {
  name: "AppBarSideNav",
  components: {
    "c-button": Button,
    "c-figure": Figure,
    "c-dropdown": Dropdown
  },
  computed: {
    classAppBarSideNav() {
      return buildClass("s-side-nav", ["show"], {
        show: this.$store.state.appBar.sideNav.visible
      });
    },
    navItems() {
      return this.$store.state.static.navItems;
    }
  },
  methods: {
    handleSideNavClick(evt) {
      if (evt === "hide")
        this.$store.commit("updateAppBarSideNavStatus", { visible: false });
    }
  }
};
</script>

<template lang="html">
  <div :class="classAppBarSideNav" @click="handleSideNavClick('hide')">
    <nav class="content" @click.stop="handleSideNavClick('continue')">
      <c-button
        title="Home"
        :to="{ name: 'Home' }"
        icon
        @click.native.stop="handleSideNavClick('hide')"
      >
        <c-figure src="icons/home.svg"></c-figure>
      </c-button>

      <c-dropdown
        v-for="(navItem, index) in navItems"
        :key="index"
        :items="navItem.items"
        :to="navItem.to"
        contained
        @click.stop="handleSideNavClick('hide')"
        @clickOnItem.stop="handleSideNavClick('hide')"
      >
        {{ navItem.text }}
      </c-dropdown>
    </nav>
  </div>
</template>

<style lang="css" scoped>
.s-side-nav {
  position: fixed;

  width: 0;
  height: 100%;

  opacity: 0;
  overflow-x: hidden;

  top: 0;
  left: 0;

  z-index: 4;
  transition: 0.4s 0.1s ease-in;

  background-color: var(--bd-primary);
}

.show {
  width: 100%;
  opacity: 100%;
}

.content {
  display: flex;
  flex-direction: column;

  width: 74%;
  height: 100%;
  min-width: 180px;
  max-width: 240px;

  overflow: hidden;
  transition: width 1s;

  background-color: var(--bd-secondary);
}

.content > .c-button.icon {
  padding: 12px 0;
}

.content > .c-button.icon .c-figure {
  width: 22px;
  height: 22px;

  fill: #fff;
}
</style>
