<script>
import { mapGetters } from "vuex";
import Dropdown from "@/components/Dropdown";

export default {
  name: "AppBarSideNav",
  components: {
    "c-dropdown": Dropdown
  },
  computed: {
    classAppBarSideNav() {
      const { visible } = this.$store.state.appBar.sideNav;
      return `app-bar-side-nav ${visible ? "show" : ""}`;
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
  <div :class="classAppBarSideNav" @click="handleSideNavClick('hide')">
    <div @click.stop="handleSideNavClick('continue')">
      <router-link
        class="home"
        :to="{ name: 'Home' }"
        title="Home"
        @click.native.stop="handleSideNavClick('hide')"
      >
        <img alt="Home" src="@/assets/icons/home.svg" />
      </router-link>

      <c-dropdown
        v-for="(sideNavItem, index) in sideNavItems"
        :key="index"
        :to="sideNavItem.to"
        :items="sideNavItem.items"
        contained
        @clickOnItem.stop="handleSideNavClick('hide')"
      >
        {{ sideNavItem.text }}
      </c-dropdown>
    </div>
  </div>
</template>

<style lang="css" scoped>
.app-bar-side-nav {
  position: absolute;

  width: 0;
  height: 100%;

  overflow-x: hidden;

  top: 0;
  left: 0;

  z-index: 1;
  transition: width 0.4s ease-in;

  background-color: #000a;
}

.show {
  width: 100%;
}

.app-bar-side-nav > div {
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 100%;
  min-width: 180px;
  max-width: 320px;

  background-color: #000d;
}

.home {
  display: inline-block;

  padding: 12px 0;
  text-align: center;

  cursor: pointer;
}

.home > img {
  width: 22px;
  height: 22px;

  filter: invert(100%) opacity(100%);
}

.home:hover img {
  filter: invert(100%) opacity(72%);
}
</style>
