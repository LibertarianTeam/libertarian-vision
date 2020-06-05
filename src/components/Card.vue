<script>
import { buildClass } from '~/utils'
import Button from '~/components/Button'

export default {
  name: 'Card',
  components: {
    'c-button': Button
  },
  props: {
    tag: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: 'icons/broken.svg'
    },
    dark: {
      type: Boolean,
      default: true
    },
    compact: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    title() {
      return this.$attrs.title || ''
    },
    imgURL() {
      const { img } = this.$props
      const url = img.includes('https') ? img : require('~/assets/' + img)

      return { backgroundImage: `url("${url}")` }
    },
    classCard() {
      return buildClass('c-card', ['dark', 'compact', 'center'], this.$props)
    }
  }
}
</script>

<template lang="html">
  <div :class="classCard" :style="imgURL">
    <div class="content">
      <c-button v-if="tag" class="tag" :to="{ name: 'index' }">
        {{ tag }}
      </c-button>

      <c-button class="title" :title="title" :to="{ name: 'index' }">
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

  box-shadow: inset 0 0 18px 6px var(--bx-secondary);
  border-radius: 8px;

  transition: box-shadow 0.2s linear;

  background: var(--primary) no-repeat;
  background-size: cover;
}

.c-card:hover {
  box-shadow: inset 0 0 24px 4px var(--bx-tertiary);
}

.center.c-card {
  background-position: center;
}

.compact.c-card {
  height: 220px;
  overflow: hidden;
}

.content {
  width: 100%;
}

.tag {
  margin: 8px;
  border-radius: 4px;

  color: var(--text-secondary);
  font-size: 14px;
  font-weight: bold;

  text-shadow: 2px 2px 2px var(--bx-secondary);
}

.title {
  width: 100%;
  padding: 8px 12px;

  border: none;
  transition: background-color 0.4s;

  color: var(--text-secondary);
  font-size: 20px;
  font-weight: bold;

  text-shadow: 2px 2px 8px var(--bx-tertiary);

  background-color: transparent;
}

.dark.c-card .title {
  padding: 6px 8px;
  min-height: 100px;

  background-color: var(--bx-tertiary);
}

.dark.c-card:hover .title {
  background-color: var(--bg-secondary);
}

.dark.c-card .title:hover {
  background-color: var(--bd-secondary);
}

.compact.c-card .title {
  min-height: 80px;

  font-size: 18px;
  line-height: 22px;
}
</style>
