<script>
import { mapGetters } from 'vuex'

import Card from '@/components/Card'
import Button from '@/components/Button'
import Figure from '@/components/Figure'

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
    center: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      end: 1,
      start: 1
    }
  },
  computed: {
    startOfList() {
      return this.start <= 1
    },
    endOfList() {
      return this.end >= this.items.length
    },
    itemsOnScreen() {
      const { dsmWindow, smdWindow, dmdWindow, lmdWindow } = this

      this.updateItemsOnScreen(
        dsmWindow ? 1 : smdWindow ? 2 : dmdWindow ? 3 : lmdWindow ? 4 : 5
      )
    },
    classCard() {
      const { start, end } = this

      return (index) =>
        `${index + 1 >= start && index + 1 <= end ? 'show' : ''}`
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
      this.end = end
      this.start = 1
    },
    handleNext() {
      if (this.endOfList) return

      this.end += 1
      this.start += 1
    },
    handlePrev() {
      if (this.startOfList) return

      this.end -= 1
      this.start -= 1
    }
  }
}
</script>

<template lang="html">
  <div class="c-carousel">
    <c-button
      class="arrow"
      title="Anterior"
      icon
      :disabled="startOfList"
      @click="handlePrev"
    >
      <c-figure src="icons/arrow-prev.svg"></c-figure>
    </c-button>

    <div class="items">
      <c-card
        v-for="(item, index) in items"
        :key="index"
        :class="classCard(index)"
        style="width: 0;"
        :img="item.img"
        :tag="item.tag"
        :center="center"
      >
        <h4 class="title">{{ item.title }}</h4>
      </c-card>
    </div>

    <c-button
      class="arrow"
      title="Próximo"
      icon
      :disabled="endOfList"
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

.items {
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

.c-card {
  width: 0;
  transition: all 0.2s;

  background-size: auto;
}

.c-card.show {
  width: 100% !important;
  height: inherit;

  background-size: cover;
}

.c-card.show + .c-card.show {
  margin-left: 6px;
}

.title {
  font-size: 20px;
}

@media only screen and (max-width: 640px) {
  .c-carousel {
    align-items: flex-start;
  }

  .items {
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
