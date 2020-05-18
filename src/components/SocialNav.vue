<script>
import Button from '@/components/Button'
import Figure from '@/components/Figure'

import { buildClass } from '@/utils'

export default {
  name: 'SocialNav',
  components: {
    'c-button': Button,
    'c-figure': Figure
  },
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [
        'Youtube',
        'VisaoLibertaria',
        'Bitchute',
        'Facebook',
        'Minds',
        'Twitter',
        'Gab'
      ]
    }
  },
  computed: {
    links() {
      return this.$store.state.static.links
    },
    classSocialNav() {
      return buildClass('c-social-nav', ['vertical', 'invert'], this.$props)
    }
  }
}
</script>

<template lang="html">
  <nav :class="classSocialNav">
    <c-button
      v-for="(item, index) in $data.items"
      :key="index"
      :title="item"
      :to="links[item.toLowerCase()]"
      icon
    >
      <c-figure :src="`icons/${item.toLowerCase()}.svg`"></c-figure>

      <h5 v-if="$props.vertical" class="text">
        <slot :name="item.toLowerCase()"></slot>
      </h5>
    </c-button>
  </nav>
</template>

<style lang="css" scoped>
.c-social-nav {
  text-align: center;
}

.c-figure {
  width: 18px;
  height: 18px;

  padding: 1px;
  box-sizing: content-box;
}

.c-button.icon + .c-button.icon {
  margin-left: 18px;
}

.vertical {
  display: inline-flex;
  flex-direction: column;

  width: 100%;
}

.vertical .c-figure {
  padding: 0 8px;
}

.vertical .c-button.icon {
  align-items: center;
  justify-content: flex-start;

  padding: 8px 0;
  border: 1px solid var(--primary);

  background-color: transparent;
}

.vertical .c-button.icon + .c-button.icon {
  margin: 6px 0 0;
}

.text {
  font-size: 12px;
  font-weight: bold;
}

.invert .c-figure {
  filter: invert(100%);
}

@media only screen and (max-width: 480px) {
  .c-button.icon + .c-button.icon {
    margin-left: 16px;
  }
}

@media only screen and (max-width: 360px) {
  .c-button.icon + .c-button.icon {
    margin-left: 12px;
  }
}
</style>
