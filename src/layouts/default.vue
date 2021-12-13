<script lang="ts" setup>
const sidebarState = reactive({ active: false });
</script>

<template>
  <div id="default-layout">
    <appbar @toggle:sidebar="sidebarState.active = !sidebarState.active" />
    <sidebar :is-active="sidebarState.active" @toggle="sidebarState.active = false" />
    <slot name="default" />
  </div>
</template>

<style lang="scss">
#default-layout {
  display: grid;
  grid-template-areas: "appbar appbar" "sidebar route";
  grid-template-rows: min-content 1fr;
  grid-template-columns: min-content 1fr;
  min-height: 100vh;

  .appbar {
    grid-area: appbar;
  }

  .sidebar {
    grid-area: sidebar;
    display: none;
  }

  .page {
    grid-area: route;
    padding: 0.75rem 1.5rem;
  }

  @media only screen and (max-width: 1023px) {
    .sidebar {
      display: block;
    }
  }
}
</style>
