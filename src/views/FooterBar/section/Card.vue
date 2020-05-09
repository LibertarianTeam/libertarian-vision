<script>
import Button from "@/components/Button";
import Figure from "@/components/Figure";

export default {
  name: "FooterBarCard",
  components: {
    "c-button": Button,
    "c-figure": Figure
  },
  props: {
    title: {
      type: String,
      required: true
    },
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
  <div class="s-card">
    <c-button :title="$props.title" :to="to" icon>
      <c-figure :src="image"></c-figure>
    </c-button>

    <aside class="content">
      <c-button :title="$props.title" :to="to" text>
        <slot name="link"></slot>
      </c-button>

      <span class="text">
        <slot name="default"></slot>
      </span>
    </aside>
  </div>
</template>

<style lang="css" scoped>
.s-card {
  display: inline-flex;
  align-items: center;

  height: 94px;
}

.c-figure {
  margin-right: 12px;
}

.content {
  text-align: justify;
  color: var(--text-secondary);
}

.text {
  font: normal 16px small-caption;
}

.c-button.text {
  font-size: 20px;
  color: var(--text-tertiary);
}

@media only screen and (max-width: 800px) {
  .c-figure {
    height: 52px;
  }

  .c-button.text {
    font-size: 18px;
  }
}

@media only screen and (max-width: 360px) {
  .s-card {
    height: 120px;
  }

  .c-figure {
    margin-right: 6px;
  }

  .text {
    font-size: 14px;
  }
}
</style>
