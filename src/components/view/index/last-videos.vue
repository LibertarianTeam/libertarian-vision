<script lang="ts" setup>
import useVideoStore from "~/store/useVideo";
import { TLibertarianCardTagsProp } from "~/components/libertarian-card.vue";

type TLibertarianCardItem = { label: string; goTo: { name: string }; image: string; tags: TLibertarianCardTagsProp };
const videoStore = useVideoStore();

const libertarianCardItems = computed<TLibertarianCardItem[]>(() =>
  videoStore.last.map((video) => ({
    label: video.title,
    goTo: { name: "index" },
    image: video.image,
    tags: [{ label: video.category.label, to: { name: "index" } }],
  }))
);

videoStore.getLastVideos();
</script>

<template>
  <section class="index-section" id="view-index-last-videos">
    <h4 class="index-section-title">Últimos vídeos do canal</h4>

    <carousel>
      <template v-for="libertarianCardItem of libertarianCardItems">
        <libertarian-card
          :go-to="libertarianCardItem.goTo"
          :tags="libertarianCardItem.tags"
          :image="libertarianCardItem.image"
        >
          {{ libertarianCardItem.label }}
        </libertarian-card>
      </template>
    </carousel>
  </section>
</template>

<style lang="scss">
#view-index-last-videos {
  min-height: min-content;

  .carousel {
    --carousel-items: 4;

    .libertarian-card {
      --height: unset;
    }
  }

  @media only screen and (max-width: 1440px) {
    .carousel {
      --carousel-items: 3;
    }
  }

  @media only screen and (max-width: 1024px) {
    .carousel {
      --carousel-items: 2;
    }
  }

  @media only screen and (max-width: 720px) {
    .carousel {
      --carousel-items: 1;
    }
  }
}
</style>
