<script>
import Button from "@/components/Button";

export default {
  name: "Dropdown",
  components: {
    "c-button": Button
  },
  props: {
    items: {
      type: Array,
      default: []
    },
    to: {
      type: [Object, String],
      default: () => ({})
    },
    contained: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classDropdownRootButton() {
      const { contained } = this;
      return `root-button${contained ? " large-button" : ""}`;
    },

    classDropdownContent() {
      const { contained } = this;
      return `dropdown-content${contained ? " contained-content" : ""}`;
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
      :class="classDropdownRootButton"
      :to="contained ? to : undefined"
      :type="contained ? 'link' : 'button'"
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

  width: 100%;

  padding: 8px 22px;
  border: none;

  font-size: 15px;
  font-weight: bold;
}

.large-button {
  padding: 14px 22px;
  font-size: 16px;
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

.contained-content {
  position: relative;
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
