<script>
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
  computed: {
    skeleton() {
      return this.$props.items.length === 0
    }
  },
  methods: {
    handleNext() {
      this.$refs.cards.scrollBy(this.$store.state.window.width, 0)
    },
    handlePrev() {
      this.$refs.cards.scrollBy(this.$store.state.window.width * -1, 0)
    },
    handleScroll(event) {
      if (event.deltaX > 40) this.handleNext()
      else if (event.deltaX < -40) this.handlePrev()
    }
  }
}
</script>

<template lang="html">
  <div class="c-carousel">
    <c-button class="arrow" title="Anterior" icon @click="handlePrev($event)">
      <c-figure src="icons/arrow-prev.svg"></c-figure>
    </c-button>

    <div ref="cards" class="cards" @wheel="handleScroll($event)">
      <template v-if="skeleton">
        <c-card v-for="index in 5" :key="index" skeleton></c-card>
      </template>
      <template v-else>
        <c-card
          v-for="(item, index) of items"
          :key="index"
          :title="item.title"
          :to="item.to"
          :img="item.image"
          :tags="item.tags"
          :centered="$props.centered"
        >
          <h4 class="title" v-text="item.title"></h4>
        </c-card>
      </template>
    </div>

    <c-button class="arrow" title="Próximo" icon @click="handleNext($event)">
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

.c-carousel .cards {
  display: flex;

  height: 340px;
  overflow-x: hidden;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  -webkit-overflow-scrolling: touch;
}

.c-carousel .cards .c-card {
  flex: none;

  width: calc(20% - 4px);
  height: inherit;

  margin: 0 2px;
  scroll-snap-align: start;

  background-size: cover;
}

.c-carousel .cards .c-card.skeleton {
  height: 280px;
}

.c-carousel .cards .c-card .title {
  font-size: 1.2rem;
}

.c-carousel .arrow {
  min-width: 48px;
  min-height: 48px;

  z-index: 2;
  position: absolute;
}

.c-carousel .arrow .c-figure {
  width: 48px;
  height: 48px;
}

.c-carousel .arrow:active .c-figure {
  width: 42px;
  height: 42px;
}

.c-carousel .arrow.disabled:active .c-figure {
  width: 48px;
  height: 48px;
}

.c-carousel .arrow:first-child {
  left: 28px;
  margin-left: 4px;
}

.c-carousel .arrow:last-child {
  right: 28px;
  margin-right: 4px;
}

@media only screen and (max-width: 1366px) {
  .c-carousel .cards .c-card {
    width: calc(25% - 4px);
  }
}

@media only screen and (max-width: 1024px) {
  .c-carousel .cards .c-card {
    width: calc(33.33% - 4px);
  }
}

@media only screen and (max-width: 800px) {
  .c-carousel .cards .c-card {
    width: calc(50% - 4px);
  }
}

@media only screen and (max-width: 640px) {
  .c-carousel {
    align-items: flex-start;
  }

  .c-carousel .cards {
    height: 280px;
  }

  .c-carousel .arrow {
    margin: 64px 0 0;
  }
}

@media only screen and (max-width: 480px) {
  .c-carousel .cards .c-card {
    width: calc(100%);
  }
}

@media only screen and (max-width: 360px) {
  .c-carousel .arrow {
    margin: 42px 0 0;
  }
}
</style>
