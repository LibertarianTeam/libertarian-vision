<script>
import { mapGetters } from 'vuex'
import buildClass from 'build-css-class'

import Card from '~/components/Card'
import Button from '~/components/Button'
import Figure from '~/components/Figure'

export default {
  name: 'Carousel',
  components: {
    'c-card': Card,
    'c-button': Button,
    'c-figure': Figure
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    end: 1,
    start: 1
  }),
  computed: {
    startOfList() {
      return this.$data.start <= 1
    },
    endOfList() {
      return this.$data.end >= this.$props.items.length
    },
    itemsOnScreen() {
      const { dsmWindow, smdWindow, dmdWindow, lmdWindow } = this

      this.updateItemsOnScreen(
        dsmWindow ? 1 : smdWindow ? 2 : dmdWindow ? 3 : lmdWindow ? 4 : 5
      )
    },
    cardClass() {
      const { start, end } = this.$data

      return (index) =>
        buildClass('', { show: index + 1 >= start && index + 1 <= end })
    },
    ...mapGetters(['dsmWindow', 'smdWindow', 'dmdWindow', 'lmdWindow'])
  },
  watch: {
    itemsOnScreen() {
      // updates the start and end of the card list when the screen is resized
    }
  },
  methods: {
    updateItemsOnScreen(end) {
      this.$data.end = end
      this.$data.start = 1
    },
    handleNext() {
      if (this.$data.endOfList) return

      this.$data.end += 1
      this.$data.start += 1
    },
    handlePrev() {
      if (this.$data.startOfList) return

      this.$data.end -= 1
      this.$data.start -= 1
    }
  }
}
</script>

<template lang="html">
  <div class="c-carousel">
    <c-button
      class="arrow"
      title="Anterior"
      :disabled="startOfList"
      icon
      @click="handlePrev"
    >
      <c-figure src="icons/arrow-prev.svg"></c-figure>
    </c-button>

    <div class="cards">
      <c-card
        v-for="(item, index) in $props.items"
        :key="index"
        :class="cardClass(index)"
        :title="item.title"
        :to="item.to"
        :img="item.image"
        :tag="item.category.label"
        :to-tag="item.toTag"
        :centered="$props.centered"
      >
        <h4 class="title" v-text="item.title"></h4>
      </c-card>
    </div>

    <c-button
      class="arrow"
      title="Próximo"
      :disabled="endOfList"
      icon
      @click="handleNext"
    >
      <c-figure src="icons/arrow-next.svg"></c-figure>
    </c-button>
  </div>
</template>

<style lang="css" scoped>
.c-carousel {
  display: flex;

  align-items: center;
  justify-content: center;
}

.cards {
  display: inherit;
  overflow: hidden;
}

.arrow {
  z-index: 2;
  position: absolute;

  min-width: 48px;
  min-height: 48px;
}

.arrow .c-figure {
  width: 48px;
  height: 48px;
}

.arrow:active .c-figure {
  width: 42px;
  height: 42px;
}

.arrow.disabled:active .c-figure {
  width: 48px;
  height: 48px;
}

.arrow:first-child {
  left: 28px;
  margin-right: 4px;
}

.arrow:last-child {
  right: 28px;
  margin-left: 4px;
}

.cards > .c-card {
  width: 0;
  transition: all 0.2s;

  background-size: auto;
}

.cards > .c-card.show {
  width: 100%;
  height: inherit;

  background-size: cover;
}

.c-card.show + .c-card.show {
  margin-left: 6px;
}

.title {
  font-size: 1.2rem;
}

@media only screen and (max-width: 640px) {
  .c-carousel {
    align-items: flex-start;
  }

  .cards {
    height: 280px;
  }

  .arrow {
    margin: 64px 0 0;
  }
}

@media only screen and (max-width: 360px) {
  .arrow {
    margin: 42px 0 0;
  }
}
</style>
