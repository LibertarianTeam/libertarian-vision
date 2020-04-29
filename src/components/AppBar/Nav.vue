<script>
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

export default {
  name: "AppBarNav",
  components: {
    "gc-button": Button,
    "gc-dropdown": Dropdown
  },
  computed: {
    navItems() {
      return this.$store.state.static.navItems;
    }
  }
};
</script>

<template lang="html">
  <nav class="sc-nav">
    <gc-button
      class="home"
      type="link"
      :to="{ name: 'Home' }"
      title="Home"
      icon
    >
      <img alt="Home" src="@/assets/icons/home.svg" />
    </gc-button>

    <gc-dropdown
      v-for="(navItem, index) in navItems"
      :key="index"
      :to="navItem.to"
      :items="navItem.items"
    >
      {{ navItem.text }}
    </gc-dropdown>
  </nav>
</template>

<style lang="css" scoped>
.sc-nav {
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
.gc-dropdown::after {
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
.gc-dropdown:hover::after {
  width: 100%;
}
</style>
