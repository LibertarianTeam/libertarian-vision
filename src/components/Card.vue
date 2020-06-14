<script>
import buildClass from 'build-css-class'
import Button from '~/components/Button'

export default {
  name: 'Card',
  components: {
    'c-button': Button
  },
  props: {
    to: {
      type: [String, Object],
      default: () => ({ name: 'index' })
    },
    tag: {
      type: String,
      default: ''
    },
    toTag: {
      type: [String, Object],
      default: () => ({ name: 'index' })
    },
    img: {
      type: String,
      default: 'icons/broken.svg'
    },
    transparent: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    title() {
      return this.$attrs.title || ''
    },
    cardStyle() {
      const { img } = this.$props
      const url = img.includes('https') ? img : require('~/assets/' + img)

      return { backgroundImage: `url("${url}")` }
    },
    cardClass() {
      return buildClass('c-card', {
        compact: this.$props.compact,
        centered: this.$props.centered,
        transparent: this.$props.transparent
      })
    }
  }
}
</script>

<template lang="html">
  <div :class="cardClass" :style="cardStyle">
    <div class="content">
      <c-button
        v-if="$props.tag"
        class="tag"
        :title="`Acessar a categoria ${$props.tag}`"
        :to="$props.toTag"
        v-text="$props.tag"
      ></c-button>

      <c-button class="title" :title="title" :to="$props.to">
        <slot name="default"></slot>
      </c-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.c-card {
  display: flex;

  align-items: flex-end;
  justify-content: center;

  width: 260px;
  height: 360px;

  box-shadow: inset 0 0 18px 6px var(--sw-secondary);
  border-radius: 8px;

  transition: box-shadow 0.2s linear;

  background: var(--primary) no-repeat;
  background-size: cover;
}

.c-card:hover {
  box-shadow: inset 0 0 24px 4px var(--sw-tertiary);
}

.c-card.compact {
  height: 220px;
  overflow: hidden;
}

.c-card.centered {
  background-position: center;
}

.c-card > .content {
  width: 100%;
}

.c-card > .content .tag {
  margin: 8px;
  border-radius: 4px;

  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: bold;

  text-shadow: 2px 2px 2px var(--sw-secondary);
}

.c-card > .content .title {
  width: 100%;
  padding: 8px 12px;

  border: none;
  transition: background-color 0.4s;

  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: bold;

  text-shadow: 2px 2px 8px var(--sw-tertiary);

  background-color: transparent;
}

.c-card:not(.transparent) > .content .title {
  padding: 6px 8px;
  min-height: 100px;

  background-color: var(--sw-tertiary);
}

.c-card:not(.transparent):hover > .content .title {
  background-color: var(--bg-tertiary);
}

.c-card:not(.transparent) > .content .title:hover {
  background-color: var(--bg-secondary);
}

.c-card.compact > .content .title {
  min-height: 82px;

  font-size: 1.2rem;
  line-height: 1.6rem;
}
</style>
