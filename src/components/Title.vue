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

    <h3 class="text">
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

@media only screen and (max-width: 640px) {
  .c-title {
    font-size: 22px;
  }
}

@media only screen and (max-width: 480px) {
  .c-title {
    font-size: 20px;
    text-align: center;
  }
}

@media only screen and (max-width: 360px) {
  .c-title {
    font-size: 18px;
  }
}
</style>
