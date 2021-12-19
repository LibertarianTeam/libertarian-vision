<script lang="ts" setup>
const sidebarState = reactive({ active: false });
</script>

<template>
  <div id="default-layout">
    <appbar @toggle:sidebar="sidebarState.active = !sidebarState.active" />
    <sidebar :is-active="sidebarState.active" @toggle="sidebarState.active = false" />
    <slot name="default" />
    <footerbar />
  </div>
</template>

<style lang="scss">
#default-layout {
  display: grid;
  grid-template-areas: "appbar appbar" "sidebar route" "footerbar footerbar";
  grid-template-rows: min-content 1fr min-content;
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
    padding: 1.5rem 2rem;
    min-height: 86vh;
  }

  .footerbar {
    grid-area: footerbar;
  }

  @media only screen and (max-width: 1023px) {
    .sidebar {
      display: block;
    }

    .page {
      padding: 1rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .page {
      padding: 0.5rem;
      margin-left: 52px;
    }

    .sidebar {
      position: absolute;
    }
  }
}
</style>
