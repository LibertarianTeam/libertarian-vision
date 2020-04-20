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
      default: () => ({})
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
    class="button"
    @click.native="emitClick($event)"
  >
    <slot name="default"></slot>
  </router-link>

  <a
    v-else-if="type === 'link'"
    class="button"
    :href="to"
    target="_blank"
    @click="emitClick($event)"
  >
    <slot name="default"></slot>
  </a>

  <button v-else :type="type" class="button" @click="emitClick($event)">
    <slot name="default"></slot>
  </button>
</template>

<style lang="css" scoped>
.button {
  display: inline-block;

  padding: 4px 8px;

  border: 1px solid #000;
  border-radius: 2px;

  color: var(--text-primary);
  font-size: 14px;
  text-align: center;
  font-weight: medium;
  text-decoration: none;

  cursor: pointer;
  transition: filter 0.2s;

  background-color: var(--primary);
}

.button:hover {
  filter: brightness(90%);
}
</style>
