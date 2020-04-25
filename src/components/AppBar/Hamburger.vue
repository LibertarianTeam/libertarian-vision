<script>
import Button from "@/components/Button";

export default {
  name: "AppBarHamburger",
  components: {
    "c-button": Button
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
  <div class="app-bar-hamburger">
    <c-button type="button" icon>
      <img
        alt="Menu"
        title="Menu de Navegação"
        src="@/assets/icons/hamburger.svg"
        @click="handleHamburgerClick"
      />
    </c-button>
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

  filter: invert(100%);
}
</style>
