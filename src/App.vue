<script>
export default {
  name: "App"
};
</script>

<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap");

#app {
  color: #000;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
