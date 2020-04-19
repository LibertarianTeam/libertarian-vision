<script>
export default {
  name: "AppBarHamburger",
  methods: {
    handleHamburgerClick() {
      const { visible } = this.$store.state.appBar.sideNav;
      this.$store.commit("updateAppBarSideNavStatus", { visible: !visible });
    }
  }
};
</script>

<template lang="html">
  <div class="app-bar-hamburger">
    <img
      alt="Menu"
      title="Menu de Navegação"
      src="@/assets/icons/hamburger.svg"
      @click="handleHamburgerClick"
    />
  </div>
</template>

<style lang="css" scoped>
.app-bar-hamburger {
  display: inline-block;

  width: 100%;
  text-align: right;
}

img {
  width: 28px;
  height: 28px;

  padding: 2px;
  cursor: pointer;

  filter: invert(100%) opacity(100%);
  transition: filter 0.2s;
}

img:hover {
  filter: invert(100%) opacity(72%);
}
</style>
