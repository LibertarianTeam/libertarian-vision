<script>
export default {
  name: 'Figure',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    description: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template lang="html">
  <figure
    v-if="$props.src.includes('.svg')"
    class="c-figure"
    v-html="require(`~/assets/${$props.src}?raw`)"
  ></figure>

  <figure v-else class="c-figure">
    <img :alt="$props.alt" :src="require(`~/assets/${$props.src}`)" />

    <figcaption v-if="$props.description">
      <slot name="default"></slot>
    </figcaption>
  </figure>
</template>

<style lang="css" scoped>
.c-figure {
  display: flex;
}
</style>
