<script lang="ts" setup>
const isLightTheme = ref(false);

function setThemeInBody() {
  if (!process.client) return;

  if (isLightTheme.value)
    document.querySelector("body")?.classList.add("is-light");
  else document.querySelector("body")?.classList.remove("is-light");
}

watch(isLightTheme, setThemeInBody);

onMounted(() => {
  if (!process.client) return;

  if (localStorage.getItem("THEME") === "light") isLightTheme.value = true;
  setThemeInBody();
});
</script>

<template>
  <div id="app">
    <nuxt-page />
    <switch-theme
      :is-light-theme="isLightTheme"
      @switch-theme="(value) => (isLightTheme = value)"
    />
  </div>
</template>

<style lang="scss"></style>
