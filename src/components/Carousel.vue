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
    }
  },
  data() {
    return {
      end: 1,
      start: 0
    };
  },
  computed: {
    itemsLength() {
      return this.items.length;
    },

    itemsInScreen() {
      const { dsmWindow, smdWindow, dmdWindow, lmdWindow } = this;

      this.start = 0;
      this.end = dsmWindow
        ? 0
        : smdWindow
        ? 1
        : dmdWindow
        ? 2
        : lmdWindow
        ? 3
        : 4;
    },

    classCard() {
      const { start, end } = this;
      return index => `${index >= start && index <= end ? "show" : ""}`;
    },

    ...mapGetters(["dsmWindow", "smdWindow", "dmdWindow", "lmdWindow"])
  },
  watch: {
    itemsInScreen() {
      // updates the start and end of the card list when the screen is resized
    }
  },
  methods: {
    handleNext() {
      const { end, itemsLength } = this;
      if (end >= itemsLength - 1) return;

      this.end += 1;
      this.start += 1;
    },

    handlePrev() {
      const { start } = this;
      if (start <= 0) return;

      this.end -= 1;
      this.start -= 1;
    }
  }
};
</script>

<template lang="html">
  <section class="carousel">
    <c-button class="arrow arrow-prev" icon fab>
      <img
        alt="Anterior"
        title="Anterior"
        src="@/assets/icons/arrow-prev.svg"
        @click="handlePrev"
      />
    </c-button>

    <div class="cards">
      <c-card
        v-for="(item, index) in items"
        :key="index"
        :class="classCard(index)"
        :tag="item.tag"
        :img="item.img"
        :externalImg="item.externalImg"
      >
        {{ item.title }}
      </c-card>
    </div>

    <c-button class="arrow arrow-next" icon fab>
      <img
        alt="Próximo"
        title="Próximo"
        src="@/assets/icons/arrow-next.svg"
        @click="handleNext"
      />
    </c-button>
  </section>
</template>

<style lang="css" scoped>
.carousel {
  display: inline-flex;

  align-items: center;
  justify-content: center;
}

.carousel > div {
  display: inherit;
  overflow: hidden;
}

.arrow {
  min-width: 48px;
  min-height: 48px;

  transition: background-color 0.2s 0.1s;
}

.arrow:hover {
  background-color: transparent;
}

.arrow > img {
  width: 48px;
  height: 48px;

  transition: width 0.2s;
}

.arrow:hover > img {
  width: 42px;
  height: 42px;
}

.arrow-prev {
  margin-right: 4px;
}

.arrow-next {
  margin-left: 4px;
}

.card {
  width: 0;

  overflow: hidden;
  transition: width 0.4s;

  background-size: auto;
}

.show.card {
  width: auto;
  height: inherit;

  background-size: cover;
}

.show.card + .show.card {
  margin-left: 4px;
}

@media only screen and (max-width: 640px) {
  .cards {
    height: 300px;
    min-width: 100%;
  }

  .arrow {
    position: absolute;
    z-index: 1;
  }

  .arrow-prev {
    left: 12px;
  }

  .arrow-next {
    right: 12px;
  }
}
</style>
