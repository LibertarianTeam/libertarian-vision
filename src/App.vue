<script>
import AppBar from "@/components/AppBar";

export default {
  name: "App",
  components: {
    "c-app-bar": AppBar
  }
};
</script>

<template lang="html">
  <div id="app">
    <c-app-bar></c-app-bar>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap");

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

#app {
  color: #000;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

:root {
  --primary: #fc0;
  --text-primary: #000;
}
</style>
