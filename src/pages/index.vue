<script lang="ts" setup></script>

<template>
  <main class="page" id="index-page">
    <view-index-newsletter />
    <view-index-funnel />
    <view-index-last-videos />
    <view-index-help />
    <view-index-last-articles />
    <view-index-numbers />

    <router-view />
  </main>
</template>

<style lang="scss">
#index-page {
  display: grid;
  grid-template-rows: repeat(4, min-content);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "view-index-newsletter view-index-newsletter view-index-funnel view-index-funnel"
    "view-index-last-videos view-index-last-videos view-index-last-videos view-index-last-videos"
    "view-index-help view-index-last-articles view-index-last-articles view-index-last-articles"
    "view-index-numbers view-index-last-articles view-index-last-articles view-index-last-articles";
  gap: 2rem 1rem;
  min-height: 100%;

  .index-section {
    .index-section-title {
      padding: 0.5rem 0 0.25rem;
      border-top: 2px solid var(--primary-text-color);
      border-radius: 2px;

      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  #view-index-newsletter {
    grid-area: view-index-newsletter;
  }

  #view-index-funnel {
    grid-area: view-index-funnel;
  }

  #view-index-last-videos {
    grid-area: view-index-last-videos;
  }

  #view-index-help {
    grid-area: view-index-help;
  }

  #view-index-last-articles {
    grid-area: view-index-last-articles;
  }

  #view-index-numbers {
    grid-area: view-index-numbers;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-rows: repeat(5, min-content);
    grid-template-areas:
      "view-index-newsletter view-index-newsletter view-index-newsletter view-index-newsletter"
      "view-index-last-videos view-index-last-videos view-index-last-videos view-index-last-videos"
      "view-index-last-articles view-index-last-articles view-index-last-articles view-index-last-articles"
      "view-index-help view-index-help view-index-numbers view-index-numbers"
      "view-index-funnel view-index-funnel view-index-funnel view-index-funnel";
  }

  @media only screen and (max-width: 900px) {
    grid-template-rows: repeat(6, min-content);
    grid-template-areas:
      "view-index-newsletter view-index-newsletter view-index-newsletter view-index-newsletter"
      "view-index-last-videos view-index-last-videos view-index-last-videos view-index-last-videos"
      "view-index-last-articles view-index-last-articles view-index-last-articles view-index-last-articles"
      "view-index-funnel view-index-funnel view-index-funnel view-index-funnel"
      "view-index-help view-index-help view-index-help view-index-help"
      "view-index-numbers view-index-numbers view-index-numbers view-index-numbers";
  }
}
</style>
