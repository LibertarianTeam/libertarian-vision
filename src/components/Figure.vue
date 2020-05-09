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
    alt: {
      type: String,
      default: ""
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
  <figure class="c-figure">
    <img
      :alt="$props.alt"
      :src="getAsset($props.src)"
      @load="handleOnLoad($event)"
    />

    <figcaption v-if="$props.description">
      <slot name="default"></slot>
    </figcaption>
  </figure>
</template>

<style lang="css" scoped>
img {
  width: inherit;
  height: inherit;
}
</style>
