<script>
import { mapMutations } from "vuex";
import AppBar from "@/components/AppBar";

export default {
  name: "App",
  components: {
    "c-app-bar": AppBar
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
    <c-app-bar></c-app-bar>
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
}

.light-theme {
  --primary: #fc0;
  --secondary: #03a9f4;

  --error: #f44336;
  --warning: #ffeb3b;
  --success: #4caf50;

  --info: #ffc107;
  --accent: #607d8b;

  --text-primary: #000;
  --text-secondary: #fff;
  --text-tertiary: #fc0;
}

#app {
  color: var(--text-primary);
  font-family: Roboto, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

main {
  min-width: 340px;
  max-width: 1920px;

  margin: 0 auto;
  padding: 12px 4%;
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

@media only screen and (max-width: 600px) {
  #home {
    padding: 12px;
  }
}

@media only screen and (max-width: 480px) {
  #home {
    padding: 6px;
  }
}
</style>
