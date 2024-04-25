<script lang="ts" setup>
import useArticleStore from "~/store/useArticle";
import type { LibertarianCardTagsPropType } from "~/components/libertarian-card.vue";

type LibertarianCardItemType = {
  label: string;
  goTo: { name: string };
  image: string;
  tags?: LibertarianCardTagsPropType;
};
const articleStore = useArticleStore();

const libertarianCardItems = computed(() =>
  articleStore.last.map(
    (article): LibertarianCardItemType => ({
      label: article.title,
      goTo: { name: "index" },
      image: article.image,
      tags: article.categories?.map((category) => ({ label: category.label, to: { name: "index" } })),
    })
  )
);

articleStore.getFakeLastArticles();
</script>

<template>
  <section class="index-section" id="view-index-last-articles">
    <h4 class="index-section-title">Últimos artigos publicados</h4>

    <div class="libertarian-cards">
      <template v-for="(libertarianCardItem, index) of libertarianCardItems">
        <libertarian-card
          :index="index"
          :go-to="libertarianCardItem.goTo"
          :tags="libertarianCardItem.tags"
          :image="libertarianCardItem.image"
        >
          {{ libertarianCardItem.label }}
        </libertarian-card>
      </template>
      <libertarian-card is-loading v-for="index in 6" :key="index" v-if="!libertarianCardItems.length" />
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

  @media only screen and (max-width: 1800px) {
    --columns: 3;
  }

  @media only screen and (max-width: 1440px) {
    --columns: 2;

    .libertarian-card {
      &[index="11"],
      &[index="10"],
      &[index="9"],
      &[index="8"],
      &[index="7"],
      &[index="6"] {
        display: none !important;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    --columns: 1;
  }
}
</style>
