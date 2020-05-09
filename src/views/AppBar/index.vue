<script>
import { mapGetters } from "vuex";

import SocialNav from "@/components/SocialNav";
import Main from "@/views/AppBar/section/Main";
import MainNav from "@/views/AppBar/section/MainNav";
import SideNav from "@/views/AppBar/section/SideNav";

export default {
  name: "AppBar",
  components: {
    "s-main": Main,
    "s-main-nav": MainNav,
    "s-side-nav": SideNav,
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
  <header class="v-app-bar">
    <div class="content">
      <c-social-nav></c-social-nav>

      <s-main></s-main>

      <s-side-nav v-if="lsmWindow"></s-side-nav>
      <s-main-nav v-else></s-main-nav>
    </div>
  </header>
</template>

<style lang="css" scoped>
.v-app-bar {
  background: url("../../assets/imgs/appbarv1.svg") no-repeat right;
  background-color: var(--primary);
}

.content {
  max-width: 1366px;

  margin: 0 auto;
  padding: 0 48px;
}

.c-social-nav {
  padding-top: 2px;
}

.s-main {
  margin-bottom: 18px;
}

@media only screen and (max-width: 800px) {
  .v-app-bar {
    background-image: url("../../assets/imgs/appbarv2.svg");
  }
}

@media only screen and (max-width: 640px) {
  .content {
    padding: 0 6px;
  }

  .s-main {
    margin: 12px 0 6px;
  }
}

@media only screen and (max-width: 480px) {
  .c-social-nav {
    width: 80%;
  }
}

@media only screen and (max-width: 360px) {
  .v-app-bar {
    background-image: url("../../assets/imgs/appbarv3.svg");
  }

  .c-social-nav {
    width: 100%;
  }
}
</style>
