<script>
import buildClass from 'build-css-class'
import Divider from '~/components/Divider'

export default {
  name: 'Title',
  components: {
    'c-divider': Divider
  },
  props: {
    double: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    titleClass() {
      return buildClass('c-title', this.$props)
    }
  }
}
</script>

<template lang="html">
  <div :class="titleClass">
    <c-divider></c-divider>

    <h3 class="text">
      <slot name="default"></slot>
    </h3>

    <c-divider v-if="double"></c-divider>
  </div>
</template>

<style lang="css" scoped>
.c-title {
  margin-bottom: 20px;

  font-size: 1.4rem;
  font-weight: bold;
}

.c-title.double .c-divider {
  margin: 8px 0;
}

@media only screen and (max-width: 640px) {
  .c-title {
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 480px) {
  .c-title {
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
