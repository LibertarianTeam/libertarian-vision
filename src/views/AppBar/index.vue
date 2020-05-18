<script>
import { mapGetters } from 'vuex'

import SocialNav from '@/components/SocialNav'
import Main from '@/views/AppBar/Main'
import MainNav from '@/views/AppBar/MainNav'
import SideNav from '@/views/AppBar/SideNav'

export default {
  name: 'AppBar',
  components: {
    'v-main': Main,
    'v-main-nav': MainNav,
    'v-side-nav': SideNav,
    'c-social-nav': SocialNav
  },
  computed: {
    showSideNav() {
      return this.$store.state.appBar.sideNav.visible
    },
    ...mapGetters(['smdWindow'])
  }
}
</script>

<template lang="html">
  <header class="v-app-bar">
    <div class="content">
      <c-social-nav></c-social-nav>

      <v-main></v-main>

      <v-side-nav v-if="smdWindow"></v-side-nav>
      <v-main-nav v-else></v-main-nav>
    </div>
  </header>
</template>

<style lang="css" scoped>
.v-app-bar {
  background: url('~assets/imgs/appbarv1.svg') no-repeat right;
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

.v-main {
  margin-bottom: 18px;
}

@media only screen and (max-width: 800px) {
  .v-app-bar {
    background-image: url('~assets/imgs/appbarv2.svg');
  }

  .content {
    padding: 0 6px;
  }

  .v-main {
    margin: 12px 0 6px;
  }
}

@media only screen and (max-width: 480px) {
  .v-app-bar {
    background-image: url('~assets/imgs/appbarv3.svg');
  }
}

@media only screen and (max-width: 360px) {
  .c-social-nav {
    width: 100%;
  }
}
</style>
