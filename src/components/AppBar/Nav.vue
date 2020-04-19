<script>
import Dropdown from "@/components/Dropdown";

export default {
  name: "AppBarNav",
  components: {
    "c-dropdown": Dropdown
  },
  computed: {
    navItems() {
      return this.$store.state.static.navItems;
    }
  }
};
</script>

<template lang="html">
  <nav class="app-bar-nav">
    <router-link class="home" :to="{ name: 'Home' }" title="Home">
      <img alt="Home" src="@/assets/icons/home.svg" />
    </router-link>

    <c-dropdown
      v-for="(navItem, index) in navItems"
      :key="index"
      :to="navItem.to"
      :items="navItem.items"
    >
      {{ navItem.text }}
    </c-dropdown>
  </nav>
</template>

<style lang="css" scoped>
.app-bar-nav {
  display: inline-flex;
}

.home {
  position: relative;
  padding: 4px 22px;
}

.home > img {
  width: 22px;
  height: 22px;
}

.home::after,
.dropdown::after {
  content: "";

  width: 0;
  height: 3px;

  margin: 0 auto;
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  background-color: #000;

  transform: translateZ(0);
  transition: width 0.2s ease;
}

.home:hover::after,
.dropdown:hover::after {
  width: 100%;
}
</style>
