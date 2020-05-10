<script>
import { mapGetters } from "vuex";

import Card from "@/components/Card";
import Button from "@/components/Button";
import Figure from "@/components/Figure";

export default {
  name: "Carousel",
  components: {
    "c-card": Card,
    "c-button": Button,
    "c-figure": Figure
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
    };
  },
  computed: {
    startOfList() {
      return this.start <= 1;
    },
    endOfList() {
      return this.end >= this.items.length;
    },
    itemsOnScreen() {
      const { dsmWindow, smdWindow, dmdWindow, lmdWindow } = this;

      this.updateItemsOnScreen(
        dsmWindow ? 1 : smdWindow ? 2 : dmdWindow ? 3 : lmdWindow ? 4 : 5
      );
    },
    classCard() {
      const { start, end } = this;

      return index => `${index + 1 >= start && index + 1 <= end ? "show" : ""}`;
    },
    ...mapGetters(["dsmWindow", "smdWindow", "dmdWindow", "lmdWindow"])
  },
  watch: {
    itemsOnScreen() {
      // updates the start and end of the card list when the screen is resized
    }
  },
  methods: {
    updateItemsOnScreen(end) {
      this.start = 1;
      this.end = end;
    },
    handleNext() {
      if (this.endOfList) return;

      this.end += 1;
      this.start += 1;
    },
    handlePrev() {
      if (this.startOfList) return;

      this.end -= 1;
      this.start -= 1;
    }
  }
};
</script>

<template lang="html">
  <section class="c-carousel">
    <c-button
      class="arrow"
      title="Anterior"
      icon
      fab
      :disabled="startOfList"
      @click="handlePrev"
    >
      <c-figure src="icons/arrow-prev.svg"></c-figure>
    </c-button>

    <div class="list">
      <c-card
        v-for="(item, index) in items"
        :key="index"
        :class="classCard(index)"
        :tag="item.tag"
        :center="center"
        :img="item.img"
      >
        <span class="text"> {{ item.title }}</span>
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
  </section>
</template>

<style lang="css" scoped>
.c-carousel {
  display: inline-flex;

  align-items: center;
  justify-content: center;
}

.list {
  display: inherit;
  overflow: hidden;
}

.arrow {
  z-index: 1;
  position: absolute;

  min-width: 48px;
  min-height: 48px;
}

.disabled.arrow {
  opacity: 0%;
}

.arrow .c-figure {
  width: 48px;
  height: 48px;
}

.arrow:active .c-figure {
  width: 42px;
  height: 42px;
}

.disabled.arrow:active .c-figure {
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

  overflow: hidden;
  transition: all 0.2s;

  background-size: auto;
}

.show.c-card {
  width: 100%;
  height: inherit;

  background-size: cover;
}

.show.c-card + .show.c-card {
  margin-left: 6px;
}

@media only screen and (max-width: 640px) {
  .c-carousel {
    align-items: flex-start;
  }

  .list {
    height: 280px;
  }

  .arrow {
    margin: 64px 0 0;
  }

  .text {
    font-size: 20px;
  }
}

@media only screen and (max-width: 360px) {
  .arrow {
    margin: 42px 0 0;
  }
}
</style>
