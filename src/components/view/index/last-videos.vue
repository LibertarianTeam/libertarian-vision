<script lang="ts" setup>
import { TLibertarianCardTagsProp } from "~/components/libertarian-card.vue";

type TLibertarianCardItem = { label: string; goTo: { name: string }; image: string; tags: TLibertarianCardTagsProp };

const libertarianCardItems: TLibertarianCardItem[] = [
  {
    label: "Carde Libertario 1",
    goTo: { name: "index" },
    image: "https://libvw.com/api/article/image?id=eec91861-4e76-4903-b5cb-0e1b43865535",
    tags: [{ label: "Artigo", to: { name: "index" } }],
  },
  {
    label: "Carde Libertario 2",
    goTo: { name: "index" },
    image: "https://libvw.com/api/article/image?id=eec91861-4e76-4903-b5cb-0e1b43865535",
    tags: [
      { label: "Artigo", to: { name: "index" } },
      { label: "Artigo2", to: { name: "index" } },
    ],
  },
  {
    label: "Carde Libertario 3",
    goTo: { name: "index" },
    image: "https://libvw.com/api/article/image?id=eec91861-4e76-4903-b5cb-0e1b43865535",
    tags: [{ label: "Artigo", to: { name: "index" } }],
  },
  {
    label: "Carde Libertario 4",
    goTo: { name: "index" },
    image: "https://libvw.com/api/article/image?id=eec91861-4e76-4903-b5cb-0e1b43865535",
    tags: [{ label: "Artigo", to: { name: "index" } }],
  },
  {
    label: "Carde Libertario 5",
    goTo: { name: "index" },
    image: "https://libvw.com/api/article/image?id=eec91861-4e76-4903-b5cb-0e1b43865535",
    tags: [
      { label: "Artigo", to: { name: "index" } },
      { label: "Artigo2", to: { name: "index" } },
      { label: "Artigo", to: { name: "index" } },
      { label: "Artigo2", to: { name: "index" } },
      { label: "Artigo", to: { name: "index" } },
      { label: "Artigo2", to: { name: "index" } },
      { label: "Artigo", to: { name: "index" } },
      { label: "Artigo2", to: { name: "index" } },
    ],
  },
  {
    label: "Carde Libertario 6",
    goTo: { name: "index" },
    image: "https://libvw.com/api/article/image?id=eec91861-4e76-4903-b5cb-0e1b43865535",
    tags: [{ label: "Artigo", to: { name: "index" } }],
  },
];
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
    --carousel-items: 5;

    .libertarian-card {
      --height: unset;
    }
  }

  @media only screen and (max-width: 1440px) {
    .carousel {
      --carousel-items: 4;
    }
  }

  @media only screen and (max-width: 1280px) {
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
