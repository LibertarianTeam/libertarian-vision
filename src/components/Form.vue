<script>
import Button from "@/components/Button";

export default {
  name: "Form",
  components: {
    "c-button": Button
  },
  props: {
    inline: {
      type: Boolean,
      default: false,
      validator: value => value !== undefined
    }
  },
  computed: {
    classForm() {
      return `form${this.inline ? " inline-form" : ""}`;
    },

    classFormFields() {
      return `form${this.inline ? " inline-form-fields" : ""}`;
    }
  },
  methods: {
    emitSubmit(evt) {
      this.$emit("submit", evt);
    }
  }
};
</script>

<template lang="html">
  <form :class="classForm" @submit.prevent="emitSubmit($event)">
    <div :class="classFormFields">
      <slot name="default"></slot>
    </div>

    <c-button type="submit">
      Cadastrar
    </c-button>
  </form>
</template>

<style lang="css" scoped>
.inline-form {
  display: inline-flex;
  justify-content: space-between;

  width: 100%;
}

.inline-form-fields {
  width: 30vw;
  max-width: 400px;
}

.button {
  padding: 0 36px;
  border-radius: 6px;

  font-weight: bold;
}
</style>
