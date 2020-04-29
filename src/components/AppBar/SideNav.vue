<script>
import { mapGetters } from "vuex";

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

export default {
  name: "AppBarSideNav",
  components: {
    "gc-button": Button,
    "gc-dropdown": Dropdown
  },
  computed: {
    classAppBarSideNav() {
      const { visible } = this.$store.state.appBar.sideNav;

      return `sc-side-nav${visible ? " show" : ""}`;
    },
    ...mapGetters("static", ["sideNavItems"])
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
  <nav :class="classAppBarSideNav" @click="handleSideNavClick('hide')">
    <div class="content" @click.stop="handleSideNavClick('continue')">
      <gc-button
        class="home"
        :to="{ name: 'Home' }"
        title="Home"
        icon
        @click.native.stop="handleSideNavClick('hide')"
      >
        <img alt="Home" src="@/assets/icons/home.svg" />
      </gc-button>

      <gc-dropdown
        v-for="(sideNavItem, index) in sideNavItems"
        :key="index"
        :to="sideNavItem.to"
        :items="sideNavItem.items"
        contained
        @clickOnItem.stop="handleSideNavClick('hide')"
      >
        {{ sideNavItem.text }}
      </gc-dropdown>
    </div>
  </nav>
</template>

<style lang="css" scoped>
.sc-side-nav {
  position: fixed;

  width: 0;
  height: 100%;

  overflow-x: hidden;

  top: 0;
  left: 0;

  z-index: 2;
  transition: width 0.4s ease-in;

  background-color: var(--bd-primary);
}

.show {
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;

  overflow-y: hidden;

  width: 60%;
  height: 100%;
  min-width: 180px;
  max-width: 320px;

  background-color: var(--bd-secondary);
}

.home {
  padding: 12px 0;
}

.home > img {
  width: 22px;
  height: 22px;

  filter: invert(100%);
}
</style>
