<script>
import Divider from "@/components/Divider";

export default {
  name: "HomeTitle",
  components: {
    "gc-divider": Divider
  }
};
</script>

<template lang="html">
  <div class="sc-title">
    <gc-divider></gc-divider>

    <h3>
      <slot name="default"></slot>
    </h3>
  </div>
</template>

<style lang="css" scoped>
.sc-title {
  margin-bottom: 20px;
  font: bold 24px caption;
}
</style>
