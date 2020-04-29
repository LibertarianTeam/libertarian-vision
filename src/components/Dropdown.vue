<script>
import { buildClass } from "@/utils";
import Button from "@/components/Button";

export default {
  name: "Dropdown",
  components: {
    "gc-button": Button
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
  computed: {
    classDropdown() {
      return buildClass("gc-dropdown", ["contained"], this.$props);
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
    <gc-button class="root-button" :to="to" @click="emitEvent('click', $event)">
      <slot name="default"></slot>
    </gc-button>

    <div class="items">
      <gc-button
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
        @click="emitEvent('clickOnItem', $event)"
      >
        {{ item.text }}
      </gc-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.gc-dropdown {
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

.gc-dropdown:hover .root-button {
  filter: brightness(96%);
}

.items {
  display: none;
  position: absolute;

  z-index: 1;
  min-width: 160px;
}

.gc-dropdown:hover .items {
  display: block;
}

.contained .items {
  position: relative;
}

.items > .gc-button {
  display: block;

  margin: 0;
  padding: 10px 14px;
}

.items > .gc-button + .gc-button {
  border-top: none;
}
</style>
