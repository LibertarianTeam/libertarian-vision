<script>
import { buildClass } from "@/utils";
import Button from "@/components/Button";
import Figure from "@/components/Figure";

export default {
  name: "Dropdown",
  components: {
    "c-button": Button,
    "c-figure": Figure
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    to: {
      type: [Object, String],
      default: () => ""
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
    classDropdown() {
      const { show, contained } = this;
      return buildClass("c-dropdown", ["contained", "show"], {
        show,
        contained
      });
    }
  },
  methods: {
    emitEvent(name, evt) {
      this.$emit(name, evt);
    }
  }
};
</script>

<template lang="html">
  <div :class="classDropdown">
    <c-button
      class="root-button"
      :to="to"
      @click.prevent.stop="emitEvent('click', $event)"
    >
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
        @click="emitEvent('clickOnItem', $event)"
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

.root-button {
  padding: 8px 22px;

  border: none;
  font: bold 16px menu;
}

.contained .root-button {
  width: 100%;

  padding: 14px 22px;
  border-radius: 0;
}

.contained .root-button .text {
  display: inline-block;
  margin-top: 2px;
}

.root-button .c-button {
  float: right;
}

.root-button .c-figure {
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
  opacity: 40%;
}

.contained .items {
  position: relative;
}

.items > .c-button {
  display: block;

  margin: 0;
  padding: 10px 14px;
}

.contained .items > .c-button {
  border: none;
}

.items > .c-button + .c-button {
  border-top: none;
}

.c-dropdown.show .root-button .c-figure,
.c-dropdown:not(.contained):hover .root-button .c-figure {
  transform: rotate(180deg);
}

.c-dropdown.show .root-button,
.c-dropdown:not(.contained):hover .root-button {
  filter: brightness(96%);
}

.c-dropdown.show .items,
.c-dropdown:not(.contained):hover .items {
  height: auto;
  opacity: 100%;
}
</style>
