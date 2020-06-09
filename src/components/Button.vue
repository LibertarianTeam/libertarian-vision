<script>
import buildClass from 'build-css-class'

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    to: {
      type: [Object, String],
      default: () => ''
    },
    icon: {
      type: Boolean,
      default: false
    },
    img: {
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
      return this.$props.disabled ? '' : this.$attrs.title
    },
    isInternalLink() {
      return this.$props.to && this.$props.to.name
    },
    isExternalLink() {
      return this.$props.to && !this.$props.to.name
    },
    buttonClass() {
      return buildClass('c-button', this.$props, [
        'icon',
        'img',
        'text',
        'fab',
        'disabled'
      ])
    }
  }
}
</script>

<template lang="html">
  <nuxt-link
    v-if="isInternalLink"
    :class="buttonClass"
    :title="title"
    :to="$props.to"
    @click.native="$emit('click', $event)"
  >
    <slot name="default"></slot>
  </nuxt-link>

  <a
    v-else-if="isExternalLink"
    :class="buttonClass"
    :title="title"
    :href="$props.to"
    target="_blank"
    @click="$emit('click', $event)"
  >
    <slot name="default"></slot>
  </a>

  <button
    v-else
    :class="buttonClass"
    :title="title"
    :type="$props.type"
    :disabled="$props.disabled"
    @click="$emit('click', $event)"
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

  cursor: pointer;
  transition: filter 0.2s linear, border-color 0.2s linear, transform 0.1s;

  color: var(--text-primary);
  font-size: 1rem;
  text-align: center;
  font-weight: normal;

  background-color: var(--primary);
}

.c-button:hover {
  filter: brightness(96%);
  border-color: transparent;
}

.c-button:active {
  transform: translate(1px, 2px);
}

.c-button.img,
.c-button.icon {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  background-color: transparent;
}

.c-button.icon:hover {
  filter: invert(100%);
}

.c-button.img:hover {
  filter: invert(12%);
}

.c-button.text {
  padding: 0;

  border: none;
  text-align: center;

  background-color: transparent;
}

.c-button.text:hover {
  filter: opacity(60%);
}

.c-button.fab {
  border-radius: 50%;
}

.c-button.disabled {
  border: none;

  cursor: default;
  filter: opacity(60%);
}

.c-button.disabled:hover {
  filter: opacity(60%);
}

.c-button.disabled:active {
  transform: none;
}
</style>
