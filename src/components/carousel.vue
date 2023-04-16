<script lang="ts" setup>
type CarouselPropsType = { styleType?: "short" | "long" };
withDefaults(defineProps<CarouselPropsType>(), { styleType: "short" });

const carouselContent = ref<HTMLDivElement | null>(null);
const scrollValue = 300;

function applyScroll(direction: "prev" | "next") {
  if (!carouselContent.value) return;

  if (direction === "next") carouselContent.value?.scrollBy(scrollValue, 0);
  else carouselContent.value?.scrollBy(scrollValue * -1, 0);
}

function handleScroll({ deltaY }: { deltaY: number } = { deltaY: 0 }) {
  if (deltaY > 0) applyScroll("next");
  else applyScroll("prev");
}
</script>

<template>
  <div class="carousel">
    <button class="carousel-nav carousel-nav-prev" @click="applyScroll('prev')">
      <i class="fas fa-chevron-left" />
    </button>
    <div class="carousel-items" ref="carouselContent" @wheel="handleScroll($event)">
      <slot name="default" />
    </div>
    <button class="carousel-nav carousel-nav-next" @click="applyScroll('next')">
      <i class="fas fa-chevron-right" />
    </button>
  </div>
</template>

<style lang="scss">
.carousel {
  --carousel-scroll: hidden;
  --carousel-items: 4;
  --carousel-gap: 0.25rem;

  width: 100%;
  position: relative;

  .carousel-items {
    display: flex;
    overflow: var(--carousel-scroll);
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    border-radius: 6px;
    gap: var(--carousel-gap);

    > * {
      flex: none;
      width: calc(100% / var(--carousel-items) - var(--carousel-items) * 8px);
      scroll-snap-align: start;
      -webkit-overflow-scrolling: touch;
    }
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 12px 6px;
    border: none;
    outline: none;
    box-shadow: #63636333 0px 2px 8px 0px;
    z-index: 99;
    background-color: #fff8;

    transition: all 0.4s;

    i {
      color: var(--secondary-color);
      font-size: 1.5rem;
    }

    &.carousel-nav-prev {
      left: 0;
      padding-right: 16px;
      border-radius: 0 50% 50% 0;
    }

    &.carousel-nav-next {
      right: 0;
      padding-left: 16px;
      border-radius: 50% 0 0 50%;
    }

    &:hover {
      background-color: #fffc;
    }
  }
}
</style>
