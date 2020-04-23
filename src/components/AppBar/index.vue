<script>
import { mapGetters } from "vuex";

import Nav from "@/components/AppBar/Nav";
import Main from "@/components/AppBar/Main";
import SocialNav from "@/components/SocialNav";
import SideNav from "@/components/AppBar/SideNav";
import Hamburger from "@/components/AppBar/Hamburger";

export default {
  name: "AppBar",
  components: {
    "m-app-bar-nav": Nav,
    "m-app-bar-main": Main,
    "m-app-bar-side-nav": SideNav,
    "m-app-bar-hamburger": Hamburger,
    "c-social-nav": SocialNav
  },
  computed: {
    showSideNav() {
      return this.$store.state.appBar.sideNav.visible;
    },

    ...mapGetters(["lsmWindow"])
  }
};
</script>

<template lang="html">
  <header class="app-bar">
    <div>
      <c-social-nav></c-social-nav>
      <m-app-bar-main></m-app-bar-main>

      <m-app-bar-nav v-if="!lsmWindow"></m-app-bar-nav>
      <m-app-bar-hamburger v-else></m-app-bar-hamburger>

      <m-app-bar-side-nav v-if="lsmWindow"></m-app-bar-side-nav>
    </div>
  </header>
</template>

<style lang="css" scoped>
.app-bar {
  background: var(--primary) url(../../assets/imgs/appbarv1.svg) no-repeat right;
}

.app-bar > div {
  max-width: 1366px;

  margin: 0 auto;
  padding: 0 48px;
}

.social-nav {
  padding-top: 2px;
}

.app-bar-main {
  margin-bottom: 18px;
}

@media only screen and (max-width: 800px) {
  .app-bar {
    background-image: url(../../assets/imgs/appbarv2.svg);
  }
}

@media only screen and (max-width: 640px) {
  .app-bar > div {
    padding: 0 6px;
  }

  .app-bar-main {
    margin: 0;
  }
}
</style>
