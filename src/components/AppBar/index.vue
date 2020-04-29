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
    "sc-nav": Nav,
    "sc-main": Main,
    "sc-side-nav": SideNav,
    "sc-hamburger": Hamburger,
    "gc-social-nav": SocialNav
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
  <header class="gc-app-bar">
    <div class="content">
      <gc-social-nav></gc-social-nav>
      <sc-main></sc-main>

      <sc-nav v-if="!lsmWindow"></sc-nav>
      <sc-hamburger v-else></sc-hamburger>

      <sc-side-nav v-if="lsmWindow"></sc-side-nav>
    </div>
  </header>
</template>

<style lang="css" scoped>
.gc-app-bar {
  background: var(--primary) url("../../assets/imgs/appbarv1.svg") no-repeat
    right;
}

.content {
  max-width: 1366px;

  margin: 0 auto;
  padding: 0 48px;
}

.gc-social-nav {
  padding-top: 2px;
}

.sc-main {
  margin-bottom: 18px;
}

@media only screen and (max-width: 800px) {
  .gc-app-bar {
    background-image: url("../../assets/imgs/appbarv2.svg");
  }
}

@media only screen and (max-width: 640px) {
  .content {
    padding: 0 6px;
  }

  .sc-main {
    margin: 0;
  }
}
</style>
