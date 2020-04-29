<script>
import Button from "@/components/Button";

export default {
  name: "AppBarHamburger",
  components: {
    "gc-button": Button
  },
  methods: {
    handleHamburgerClick() {
      const { visible } = this.$store.state.appBar.sideNav;
      this.$store.commit("updateAppBarSideNavStatus", { visible: !visible });
    }
  }
};
</script>

<template lang="html">
  <div class="sc-hamburger">
    <gc-button icon title="Menu de Navegação" @click="handleHamburgerClick">
      <img alt="Menu" src="@/assets/icons/hamburger.svg" />
    </gc-button>
  </div>
</template>

<style lang="css" scoped>
.sc-hamburger {
  display: inline-block;

  width: 100%;
  text-align: right;
}

img {
  width: 28px;
  height: 28px;

  padding: 2px;

  filter: invert(100%);
}
</style>
