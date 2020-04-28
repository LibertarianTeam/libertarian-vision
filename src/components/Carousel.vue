<script>
import { mapGetters } from "vuex";

import Card from "@/components/Card";
import Button from "@/components/Button";

export default {
  name: "Carousel",
  components: {
    "c-card": Card,
    "c-button": Button
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    centerBG: {
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
  <section class="carousel">
    <c-button
      class="arrow"
      title="Anterior"
      :disabled="startOfList"
      icon
      fab
      @click="handlePrev"
    >
      <img alt="Anterior" src="@/assets/icons/arrow-prev.svg" />
    </c-button>

    <div class="cards">
      <c-card
        v-for="(item, index) in items"
        :key="index"
        :class="classCard(index)"
        :tag="item.tag"
        :centerBG="centerBG"
        :img="item.img"
      >
        {{ item.title }}
      </c-card>
    </div>

    <c-button
      class="arrow"
      title="Próximo"
      :disabled="endOfList"
      icon
      fab
      @click="handleNext"
    >
      <img alt="Próximo" src="@/assets/icons/arrow-next.svg" />
    </c-button>
  </section>
</template>

<style lang="css" scoped>
.carousel {
  display: inline-flex;

  align-items: center;
  justify-content: center;
}

.cards {
  display: inherit;
  overflow: hidden;
}

.arrow {
  min-width: 48px;
  min-height: 48px;
}

.arrow > img {
  width: 48px;
  height: 48px;
}

.arrow:active > img {
  width: 42px;
  height: 42px;
}

.disabled.arrow:active > img {
  width: 48px;
  height: 48px;
}

.arrow:first-child {
  margin-right: 4px;
}

.arrow:last-child {
  margin-left: 4px;
}

.card {
  width: 0;

  overflow: hidden;
  transition: all 0.2s;

  background-size: auto;
}

.show.card {
  width: 100%;
  height: inherit;

  background-size: cover;
}

.show.card + .show.card {
  margin-left: 6px;
}

@media only screen and (max-width: 640px) {
  .cards {
    height: 300px;
    min-width: 100%;
  }

  .arrow {
    z-index: 1;
    position: absolute;

    opacity: 60%;
  }

  .arrow:first-child {
    left: 12px;
  }

  .arrow:last-child {
    right: 12px;
  }
}
</style>
