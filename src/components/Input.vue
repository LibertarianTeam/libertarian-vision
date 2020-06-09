<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    lazy: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template lang="html">
  <input
    class="c-input"
    :type="type"
    @input="$props.lazy ? null : $emit('input', $event.target.value)"
    @change="$emit('input', $event.target.value)"
  />
</template>

<style lang="css" scoped>
.c-input {
  width: 100%;
  min-width: 160px;

  padding: 10px 16px;

  border: 1px solid var(--tertiary);
  border-radius: 4px;

  outline: transparent;
  transition: all 0.2s linear;

  font-size: 1rem;
  font-weight: lighter;

  background-color: var(--bg-primary);
}

.c-input:focus {
  outline: 1px solid var(--primary);
  box-shadow: 0 0 4px var(--primary);
}
</style>
