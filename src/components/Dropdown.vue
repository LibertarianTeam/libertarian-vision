<script>
import buildClass from 'build-css-class'

import Button from '~/components/Button'
import Figure from '~/components/Figure'

export default {
  name: 'Dropdown',
  components: {
    'c-button': Button,
    'c-figure': Figure
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    to: {
      type: [Object, String],
      default: () => ''
    },
    contained: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    show: false
  }),
  computed: {
    dropdownClass() {
      return buildClass('c-dropdown', {
        show: this.$data.show,
        contained: this.$props.contained
      })
    }
  }
}
</script>

<template lang="html">
  <div :class="dropdownClass">
    <c-button class="main" :to="to" @click="$emit('click:main', $event)">
      <span class="text">
        <slot name="default"></slot>
      </span>

      <c-button v-if="contained" icon @click.prevent.stop="show = !show">
        <c-figure src="icons/arrow-down.svg"></c-figure>
      </c-button>
    </c-button>

    <div class="items">
      <c-button
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
        @click="$emit('click:item', $event)"
      >
        {{ item.text }}
      </c-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.c-dropdown {
  display: inline-block;
  position: relative;
}

.c-button.main {
  padding: 8px 22px;

  border: none;
  font-size: 1rem;
  font-weight: bold;
}

.c-dropdown.contained .c-button.main {
  width: 100%;

  padding: 14px 22px;
  border-radius: 0;
}

.c-dropdown.contained .c-button.main .text {
  display: inline-block;
  margin-top: 2px;
}

.c-button.main .c-button {
  float: right;
}

.c-button.main .c-figure {
  transform: none;
  transition: transform 0.4s;
}

.items {
  display: block;
  position: absolute;

  z-index: 1;
  min-width: 160px;

  overflow: hidden;
  transition: 0.2s 0.1s linear;

  height: 0;
  filter: opacity(40%);
}

.c-dropdown.contained .items {
  position: relative;
}

.items > .c-button {
  display: block;

  margin: 0;
  padding: 10px 14px;
}

.c-dropdown.contained .items > .c-button {
  border: none;
}

.items > .c-button + .c-button {
  border-top: none;
}

.c-dropdown.show .c-button.main .c-figure,
.c-dropdown:not(.contained):hover .c-button.main .c-figure {
  transform: rotate(180deg);
}

.c-dropdown.show .c-button.main,
.c-dropdown:not(.contained):hover .c-button.main {
  filter: brightness(96%);
}

.c-dropdown.show .items,
.c-dropdown:not(.contained):hover .items {
  height: auto;
  filter: opacity(100%);
}
</style>
