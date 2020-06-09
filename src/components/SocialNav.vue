<script>
import buildClass from 'build-css-class'

import Button from '~/components/Button'
import Figure from '~/components/Figure'

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
  computed: {
    socialLinks() {
      return this.$store.state.static.links.social
    },
    isDark() {
      return this.$store.state.theme === 'dark'
    },
    socialNavClass() {
      return buildClass('c-social-nav', {
        ...this.$props,
        dark: this.isDark
      })
    }
  }
}
</script>

<template lang="html">
  <nav :class="socialNavClass">
    <c-button
      v-for="(link, item, index) in socialLinks"
      :key="index"
      :title="item"
      :to="link"
      icon
    >
      <c-figure :src="`icons/${item}.svg`"></c-figure>

      <h5 v-if="$props.vertical" class="text">
        <slot :name="item"></slot>
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

.text {
  font-size: 12px;
  font-weight: bold;
}

.c-button.icon + .c-button.icon {
  margin-left: 18px;
}

.c-social-nav.vertical {
  display: inline-flex;
  flex-direction: column;

  width: 100%;
}

.c-social-nav.vertical .c-figure {
  padding: 0 8px;
}

.c-social-nav.vertical .c-button.icon {
  align-items: center;
  justify-content: flex-start;

  padding: 8px 0;
  border: 1px solid var(--primary);

  background-color: transparent;
}

.c-social-nav.vertical .c-button.icon:hover {
  filter: opacity(60%);
}

.c-social-nav.vertical .c-button.icon + .c-button.icon {
  margin: 6px 0 0;
}

.c-social-nav.dark .c-figure {
  fill: #fff !important;
}

.c-social-nav.invert .c-figure {
  fill: #fff;
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
