<script>
import { mapGetters } from 'vuex'

import Nav from './Nav'
import Middle from './Middle'
import SideNav from './SideNav'
import SocialNav from '~/components/SocialNav'

export default {
  name: 'AppBar',
  components: {
    'c-social-nav': SocialNav,
    'c-app-bar-nav': Nav,
    'c-app-bar-middle': Middle,
    'c-app-bar-side-nav': SideNav
  },
  data: () => ({
    showSideNav: false
  }),
  computed: {
    ...mapGetters(['smdWindow'])
  }
}
</script>

<template lang="html">
  <header class="c-app-bar">
    <div class="content">
      <c-social-nav></c-social-nav>

      <c-app-bar-middle
        @click:hamburger="$data.showSideNav = true"
      ></c-app-bar-middle>

      <c-app-bar-side-nav
        v-if="smdWindow"
        :show="$data.showSideNav"
        @click:hide="$data.showSideNav = false"
      ></c-app-bar-side-nav>
      <c-app-bar-nav v-else></c-app-bar-nav>
    </div>
  </header>
</template>

<style lang="css" scoped>
.c-app-bar {
  background: var(--primary) url('~assets/imgs/appbarv1.svg') no-repeat right;
}

.c-app-bar .content {
  margin: 0 auto;
  padding: 0 48px;
}

.c-app-bar .content .c-social-nav {
  padding-top: 2px;
}

.c-app-bar .content .c-app-bar-middle {
  margin-bottom: 18px;
}

@media only screen and (max-width: 800px) {
  .c-app-bar {
    background-image: url('~assets/imgs/appbarv2.svg');
  }

  .c-app-bar .content {
    padding: 0 6px;
  }

  .c-app-bar .content .c-app-bar-middle {
    margin: 12px 0 6px;
  }
}

@media only screen and (max-width: 480px) {
  .c-app-bar {
    background-image: url('~assets/imgs/appbarv3.svg');
  }
}

@media only screen and (max-width: 360px) {
  .c-app-bar .content .c-social-nav {
    width: 100%;
  }
}
</style>
