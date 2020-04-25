<script>
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

export default {
  name: "AppBarNav",
  components: {
    "c-button": Button,
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
    <c-button class="home" type="link" :to="{ name: 'Home' }" title="Home" icon>
      <img alt="Home" src="@/assets/icons/home.svg" />
    </c-button>

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
  padding: 6px 22px;
}

.home > img {
  width: 22px;
  height: 22px;
}

.home::after,
.dropdown::after {
  content: "";
  position: absolute;

  width: 0;
  height: 3px;

  margin: 0 auto;

  left: 0;
  right: 0;
  bottom: 0;

  transition: width 0.2s;
  background-color: var(--bd-primary);
}

.home::after {
  height: 4px;
}

.home:hover::after,
.dropdown:hover::after {
  width: 100%;
}
</style>
