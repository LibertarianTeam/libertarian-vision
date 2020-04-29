<script>
import { buildClass } from "@/utils";
import Button from "@/components/Button";

export default {
  name: "Form",
  components: {
    "gc-button": Button
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classForm() {
      return buildClass("gc-form", ["inline"], this.$props);
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
    <div class="fields">
      <slot name="default"></slot>
    </div>

    <gc-button type="submit">
      Cadastrar
    </gc-button>
  </form>
</template>

<style lang="css" scoped>
.inline {
  display: inline-flex;
  justify-content: space-between;

  width: 100%;
}

.inline .fields {
  width: 100%;
  max-width: 400px;

  padding-right: 12px;
}

.gc-button {
  padding: 0 36px;
  border-radius: 8px;

  font-weight: bold;
}

@media only screen and (max-width: 360px) {
  .inline {
    flex-direction: column;
    padding: 12px;
  }

  .inline .fields {
    padding: 0 0 12px;
  }

  .gc-button {
    padding: 12px;
  }
}
</style>
