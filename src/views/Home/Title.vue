<script>
export default {
  name: "HomeTitle"
};
</script>

<template lang="html">
  <h3 class="home-title">
    <slot name="default"></slot>
  </h3>
</template>

<style lang="css" scoped>
h3 {
  margin-bottom: 20px;
  font-size: 22px;
}
</style>
