<script>
import { buildClass } from '~/utils'

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
  },
  computed: {
    isSvg() {
      return this.$props.src.includes('.svg')
    },
    figureClass() {
      return buildClass('c-figure', ['svg', 'description'], {
        svg: this.isSvg,
        description: this.description
      })
    }
  }
}
</script>

<template lang="html">
  <figure
    v-if="isSvg"
    :class="figureClass"
    @click="$emit('click:figure')"
    v-html="require(`~/assets/${$props.src}?raw`)"
  ></figure>

  <figure v-else :class="figureClass" @click="$emit('click:figure', $event)">
    <img
      :alt="$props.alt"
      :src="require(`~/assets/${$props.src}`)"
      @click="$emit('click:image', $event)"
    />

    <figcaption
      v-if="$props.description"
      @click="$emit('click:description', $event)"
    >
      <slot name="default"></slot>
    </figcaption>
  </figure>
</template>

<style lang="css" scoped>
.c-figure {
  display: flex;

  align-items: center;
  justify-content: center;
}

.c-figure.description {
  flex-direction: column;
}
</style>
