<script lang="ts" setup></script>

<template>
  <main id="home-page">
    <app-newsletter class="app-newsletter" />
    <app-funnel class="app-funnel" />
    <app-last-videos class="app-last-videos" />
    <app-collaborate class="app-collaborate" />
    <app-numbers class="app-numbers" />
    <app-last-posts class="app-last-posts" />
  </main>
</template>

<style lang="css">
#home-page {
  display: grid;
  grid-template-rows: repeat(4, min-content);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "app-newsletter app-newsletter app-funnel app-funnel"
    "app-last-videos app-last-videos app-last-videos app-last-videos"
    "app-collaborate app-last-posts app-last-posts app-last-posts"
    "app-numbers app-last-posts app-last-posts app-last-posts";
}

.app-newsletter {
  grid-area: app-newsletter;
}

.app-funnel {
  grid-area: app-funnel;
}

.app-last-videos {
  grid-area: app-last-videos;
}

.app-collaborate {
  grid-area: app-collaborate;
}

.app-numbers {
  grid-area: app-numbers;
}

.app-last-posts {
  grid-area: app-last-posts;
}
</style>
