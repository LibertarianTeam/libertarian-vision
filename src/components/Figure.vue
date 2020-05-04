<script>
import { getAsset } from "@/utils";
import SVGInject from "@iconfu/svg-inject";

export default {
  name: "Figure",
  props: {
    src: {
      type: String,
      required: true
    },
    description: {
      type: Boolean,
      default: false
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
  <figure class="gc-figure">
    <img :src="getAsset(src)" @load="handleOnLoad($event)" />

    <figcaption v-if="description">
      <slot name="default"></slot>
    </figcaption>
  </figure>
</template>

<style lang="css" scoped></style>
