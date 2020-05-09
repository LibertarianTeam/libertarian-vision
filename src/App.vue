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

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Merriweather+Sans:300,300i,400,400i,700,700i,800,800i&display=swap");

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

:root {
  /*       breakpoints        */
  /*   360 xsm extreme  small */
  /*   480 dsm default  small */
  /*   640 lsm   large  small */
  /*   800 smd   small medium */
  /*  1024 dmd default medium */
  /*  1366 lmd   large medium */
  /*  1620 slg   small  large */
  /*  1920 dlg default  large */
  /* >1920 xlg extreme  large */

  /*   prefixes   */
  /* p-      page */
  /* v-      view */
  /* s-   section */
  /* c- component */
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

#app {
  min-width: 240px;

  color: var(--text-primary);
  font-family: Merriweather Sans, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

html {
  scrollbar-width: thin;
  scrollbar-color: #fc0 #9999;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: #9999;
}

::-webkit-scrollbar-thumb {
  background-color: #fc0;
}

main {
  min-width: 240px;
  max-width: 1920px;
  min-height: 100vh;

  margin: 0 auto;
  padding: 12px 24px;
}

button::-moz-focus-inner {
  border: none !important;
}

button:focus {
  outline: none !important;
}

a:focus,
a:active,
button:focus {
  outline: none !important;
}

@media only screen and (max-width: 640px) {
  main {
    padding: 12px;
  }
}

@media only screen and (max-width: 480px) {
  main {
    padding: 6px;
  }
}

@media only screen and (max-width: 360px) {
  main {
    padding: 2px;
  }
}
</style>
