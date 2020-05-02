<script>
import Figure from "@/components/Figure";
import Button from "@/components/Button";

export default {
  name: "FooterCard",
  components: {
    "gc-figure": Figure,
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
      <gc-figure :src="image"></gc-figure>
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

  height: 94px;
}

.gc-figure {
  margin-right: 12px;
}

.text {
  text-align: justify;
  color: var(--text-secondary);
}

.text,
.gc-button {
  font: normal 16px small-caption;
}

.gc-button {
  font-size: 20px;
  color: var(--text-tertiary);
}

@media only screen and (max-width: 800px) {
  .gc-button {
    font-size: 18px;
  }

  .gc-figure {
    height: 50px;
  }
}

@media only screen and (max-width: 360px) {
  .gc-figure {
    height: 42px;
  }

  .text {
    font-size: 14px;
  }
}
</style>
