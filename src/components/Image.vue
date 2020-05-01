<script>
import { getAsset } from "@/utils";
import SVGInject from "@iconfu/svg-inject";

export default {
  name: "Img",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  methods: {
    getAsset,
    handleOnLoad({ target: image }) {
      if (this.src.includes(".svg")) SVGInject(image);
    }
  }
};
</script>

<template lang="html">
  <img class="gc-image" :src="getAsset(src)" @load="handleOnLoad($event)" />
</template>

<style lang="css" scoped></style>
