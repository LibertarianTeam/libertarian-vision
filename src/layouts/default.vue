<script lang="ts" setup></script>

<template>
  <div id="default-layout">
    <appbar />
    <slot name="default" />
  </div>
</template>

<style lang="scss">
#default-layout {
  min-height: 100%;

  > main {
    padding: 0.75rem 1.5rem;
  }
}
</style>
