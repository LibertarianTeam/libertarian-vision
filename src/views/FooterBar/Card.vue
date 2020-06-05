<script>
import Button from '@/components/Button'
import Figure from '@/components/Figure'

export default {
  name: 'FooterBarCard',
  components: {
    'c-button': Button,
    'c-figure': Figure
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
}
</script>

<template lang="html">
  <div class="v-card">
    <c-button :title="$props.title" :to="to" img>
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
.v-card {
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

.c-button.text {
  font-size: 20px;
  color: var(--text-tertiary);
}

.text {
  font-size: 16px;
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
  .v-card {
    flex-direction: column;
    height: auto;
  }

  .v-card + .v-card {
    margin-top: 12px;
  }

  .c-figure {
    margin: 0 0 12px;
  }

  .text {
    font-size: 14px;
  }
}
</style>
