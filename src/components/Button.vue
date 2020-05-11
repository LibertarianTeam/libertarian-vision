<script>
import { buildClass } from "@/utils";

export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button"
    },
    to: {
      type: [Object, String],
      default: () => ""
    },
    icon: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    title() {
      return this.disabled ? "" : this.$attrs.title;
    },
    internalLink() {
      return this.to && this.to.name;
    },
    externalLink() {
      return this.to && !this.to.name;
    },
    classButton() {
      return buildClass(
        "c-button",
        ["icon", "text", "fab", "disabled"],
        this.$props
      );
    }
  },
  methods: {
    emitClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<template lang="html">
  <router-link
    v-if="internalLink"
    :class="classButton"
    :title="title"
    :to="to"
    @click.native="emitClick($event)"
  >
    <slot name="default"></slot>
  </router-link>

  <a
    v-else-if="externalLink"
    :class="classButton"
    :title="title"
    :href="to"
    target="_blank"
    @click="emitClick($event)"
  >
    <slot name="default"></slot>
  </a>

  <button
    v-else
    :class="classButton"
    :type="type"
    :title="title"
    :disabled="disabled"
    @click="emitClick($event)"
  >
    <slot name="default"></slot>
  </button>
</template>

<style lang="css" scoped>
.c-button {
  display: inline-block;

  padding: 4px 8px;

  border: 1px solid var(--bd-primary);
  border-radius: 2px;

  color: var(--text-primary);
  font: normal 14px caption;

  text-align: center;
  text-decoration: none;

  cursor: pointer;
  transition: filter 0.2s linear, border-color 0.2s linear, transform 0.1s;

  background-color: var(--primary);
}

.c-button:hover {
  filter: brightness(96%);
  border-color: transparent;
}

.c-button:active {
  transform: translate(1px, 2px);
}

.icon {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  background-color: transparent;
}

.icon:hover {
  filter: invert(28%);
}

.text {
  padding: 0;

  border: none;
  text-align: center;

  background-color: transparent;
}

.text:hover {
  filter: opacity(80%);
}

.fab {
  border-radius: 50%;
}

.disabled {
  cursor: default;
  filter: opacity(60%);

  border: none;
}

.disabled:hover {
  filter: opacity(60%);
}
</style>
