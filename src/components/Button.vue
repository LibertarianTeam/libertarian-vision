<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button"
    },
    to: {
      type: [Object, String],
      default: () => ({ name: "Home" })
    },
    icon: {
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
    classButton() {
      const { icon, fab, disabled } = this;
      return `button${icon ? " icon" : ""}${fab ? " fab" : ""}${
        disabled ? " disabled" : ""
      }`;
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
    v-if="type === 'link' && to.name"
    :to="to"
    :class="classButton"
    :title="title"
    @click.native="emitClick($event)"
  >
    <slot name="default"></slot>
  </router-link>

  <a
    v-else-if="type === 'link'"
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
    :type="type"
    :class="classButton"
    :title="title"
    :disabled="disabled"
    @click="emitClick($event)"
  >
    <slot name="default"></slot>
  </button>
</template>

<style lang="css" scoped>
.button {
  display: inline-block;

  padding: 4px 8px;

  border: 1px solid var(--bd-primary);
  border-radius: 2px;

  color: var(--text-primary);
  font: normal 14px caption;

  text-align: center;
  text-decoration: none;

  cursor: pointer;
  transition: filter 0.2s linear, border-color 0.2s linear;

  background-color: var(--primary);
}

.button:hover {
  filter: brightness(96%);
  border-color: transparent;
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

.fab {
  border-radius: 50%;
}

.disabled {
  opacity: 60%;
  cursor: default;

  border: none;
}

.disabled:hover {
  filter: none;
}
</style>
