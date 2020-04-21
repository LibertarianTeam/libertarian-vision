<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: String,
    lazy: {
      type: Boolean,
      default: false,
      validator: value => value !== undefined
    }
  },
  methods: {
    emitInput({ type, target }) {
      if (this.lazy && type !== "change") return;
      this.$emit("input", target.value);
    }
  }
};
</script>

<template lang="html">
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    @input="emitInput($event)"
    @change="emitInput($event)"
  />
</template>

<style lang="css" scoped>
.input {
  width: 100%;
  min-width: 180px;

  padding: 10px 16px;

  border: 1px solid #e1e1e1;
  border-radius: 4px;

  font-size: 14px;
  font-weight: lighter;
}

.input:focus {
  outline: 1px solid var(--primary);
  box-shadow: 0 0 4px var(--primary);
}
</style>
