<script>
import Divider from "@/components/Divider";

export default {
  name: "HomeTitle",
  components: {
    "c-divider": Divider
  }
};
</script>

<template lang="html">
  <div class="home-title">
    <c-divider></c-divider>

    <h3>
      <slot name="default"></slot>
    </h3>
  </div>
</template>

<style lang="css" scoped>
.home-title {
  margin-bottom: 20px;
  font: bold 24px caption;
}
</style>
