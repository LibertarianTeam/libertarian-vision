<script>
import Button from "@/components/Button";

export default {
  name: "Dropdown",
  props: ["type", "items", "to"],
  components: {
    "c-button": Button
  },
  computed: {
    classDropdownRootButton() {
      return `root-button ${
        this.type === "contained" ? "large-root-button" : ""
      }`;
    },

    classDropdownContent() {
      return `dropdown-content ${
        this.type === "contained" ? "contained-dropdown-content" : ""
      }`;
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
  <div class="dropdown">
    <c-button
      type="link"
      :to="to"
      :class="classDropdownRootButton"
      @click="emitEvent('click', $event)"
    >
      <slot name="default"></slot>
    </c-button>

    <div :class="classDropdownContent">
      <c-button
        v-for="(item, index) in items"
        :key="index"
        type="link"
        :to="item.to"
        @click="emitEvent('clickOnItem', $event)"
      >
        {{ item.text }}
      </c-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dropdown {
  display: inline-block;
  position: relative;
}

.root-button {
  display: block;

  padding: 8px 22px;
  border: none;

  font-size: 15px;
  font-weight: bold;
}

.large-root-button {
  padding: 14px 22px !important;
  font-size: 16px !important;
}

.dropdown:hover .root-button {
  filter: brightness(90%);
}

.dropdown-content {
  display: none;
  position: absolute;

  z-index: 1;
  min-width: 160px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.contained-dropdown-content {
  position: relative !important;
}

.dropdown-content > .button {
  display: block;

  margin: 0;
  padding: 10px 14px;
}

.dropdown-content > .button + .button {
  border-top: 0;
}
</style>
