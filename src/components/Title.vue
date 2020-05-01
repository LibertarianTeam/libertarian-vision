<script>
import { buildClass } from "@/utils";
import Divider from "@/components/Divider";

export default {
  name: "Title",
  components: {
    "gc-divider": Divider
  },
  props: {
    double: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classTitle() {
      return buildClass("gc-title", ["double"], this.$props);
    }
  }
};
</script>

<template lang="html">
  <div :class="classTitle">
    <gc-divider></gc-divider>

    <h3>
      <slot name="default"></slot>
    </h3>

    <gc-divider v-if="double"></gc-divider>
  </div>
</template>

<style lang="css" scoped>
.gc-title {
  margin-bottom: 20px;
  font: bold 24px caption;
}

.double .gc-divider {
  margin: 8px 0;
}
</style>
