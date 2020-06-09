<script>
import Button from '~/components/Button'
import Figure from '~/components/Figure'

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
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<template lang="html">
  <div class="c-footer-bar-card">
    <c-button :title="$props.title" :to="to" img>
      <c-figure :src="img"></c-figure>
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
.c-footer-bar-card {
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
  color: var(--text-tertiary);
  font-size: 1.1rem;
}

.text {
  font-size: 1rem;
}

@media only screen and (max-width: 1366px) {
  .text {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 800px) {
  .c-figure {
    height: 52px;
  }

  .c-button.text {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 360px) {
  .c-footer-bar-card {
    height: auto;
    flex-direction: column;
  }

  .c-footer-bar-card + .c-footer-bar-card {
    margin-top: 12px;
  }

  .c-figure {
    margin: 0 0 12px;
  }
}
</style>
