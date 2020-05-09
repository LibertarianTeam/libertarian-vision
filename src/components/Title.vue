<script>
import { buildClass } from "@/utils";
import Divider from "@/components/Divider";

export default {
  name: "Title",
  components: {
    "c-divider": Divider
  },
  props: {
    double: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classTitle() {
      return buildClass("c-title", ["double"], this.$props);
    }
  }
};
</script>

<template lang="html">
  <div :class="classTitle">
    <c-divider></c-divider>

    <h3>
      <slot name="default"></slot>
    </h3>

    <c-divider v-if="double"></c-divider>
  </div>
</template>

<style lang="css" scoped>
.c-title {
  margin-bottom: 20px;
  font: bold 24px caption;
}

.double .c-divider {
  margin: 8px 0;
}
</style>
