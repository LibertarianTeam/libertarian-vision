<script>
import { mapMutations } from "vuex";

export default {
  name: "App",
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
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap");

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

:root {
  --primary: #fc0;
  --text-primary: #000;
}

#app {
  color: var(--text-primary);
  font-family: Roboto, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
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
</style>
