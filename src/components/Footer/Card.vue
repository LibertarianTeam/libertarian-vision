<script>
import Image from "@/components/Image";
import Button from "@/components/Button";

export default {
  name: "FooterCard",
  components: {
    "gc-image": Image,
    "gc-button": Button
  },
  props: {
    to: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<template lang="html">
  <div class="sc-card">
    <gc-button :to="to" icon>
      <gc-image :src="image"></gc-image>
    </gc-button>

    <span class="text">
      <gc-button :to="to" icon>
        <slot name="link"></slot>
      </gc-button>

      <slot name="default"></slot>
    </span>
  </div>
</template>

<style lang="css" scoped>
.sc-card {
  display: inline-flex;
  align-items: center;

  height: 98px;
}

.gc-image {
  height: inherit;
  margin-right: 12px;
}

.text,
.gc-button {
  text-align: justify;

  font: normal 16px small-caption;
  color: var(--text-secondary);
}

.gc-button {
  font-size: 20px;
  color: var(--text-tertiary);
}
</style>
