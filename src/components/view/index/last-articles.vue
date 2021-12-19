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
  <section class="index-section" id="view-index-last-articles">
    <h4 class="index-section-title">Últimos artigos publicados</h4>

    <div class="libertarian-cards">
      <template v-for="libertarianCardItem of libertarianCardItems">
        <libertarian-card
          :go-to="libertarianCardItem.goTo"
          :tags="libertarianCardItem.tags"
          :image="libertarianCardItem.image"
        >
          {{ libertarianCardItem.label }}
        </libertarian-card>
      </template>
    </div>
  </section>
</template>

<style lang="scss">
#view-index-last-articles {
  --columns: 4;

  .libertarian-cards {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 0.5rem;

    .libertarian-card {
      --height: unset;
    }
  }

  @media only screen and (max-width: 1440px) {
    --columns: 3;
  }

  @media only screen and (max-width: 1280px) {
    --columns: 2;
  }

  @media only screen and (max-width: 720px) {
    --columns: 1;
  }
}
</style>
