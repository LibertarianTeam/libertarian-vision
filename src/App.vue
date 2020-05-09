<script>
import AppBar from "@/views/AppBar";
import FooterBar from "@/views/FooterBar";

import { mapMutations } from "vuex";
import { GenerateInitialMetaInfo } from "@/meta/info";

export default {
  name: "App",
  meta: GenerateInitialMetaInfo(),
  components: {
    "v-app-bar": AppBar,
    "v-footer-bar": FooterBar
  },
  methods: {
    ...mapMutations(["updateWindowSize"])
  },
  mounted() {
    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.updateWindowSize);
  }
};
</script>

<template lang="html">
  <div id="app" class="light-theme">
    <v-app-bar></v-app-bar>
    <router-view></router-view>
    <v-footer-bar></v-footer-bar>
  </div>
</template>

<style lang="css" scoped>
#app {
  min-width: 240px;

  color: var(--text-primary);
  font-family: Merriweather Sans, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.light-theme {
  --primary: #fc0;
  --secondary: #03a9f4;
  --tertiary: #e1e1e1;

  --error: #f44336;
  --warning: #ffeb3b;
  --success: #4caf50;

  --info: #ffc107;
  --accent: #607d8b;

  --text-primary: #000;
  --text-secondary: #fff;
  --text-tertiary: #fc0;

  --bd-primary: #000c;
  --bd-secondary: #000e;
  --bd-tertiary: #fc06;

  --bx-primary: #0002;
  --bx-secondary: #0004;
  --bx-tertiary: #0008;
}
</style>
