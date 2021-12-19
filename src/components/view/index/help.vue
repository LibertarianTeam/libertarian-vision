<script lang="ts" setup>
const cards = [
  { label: "Sugerir Pauta", src: "/images/news.png" },
  { label: "Escrever Artigo", src: "/images/glasses.png" },
  { label: "Sugerir Artigo", src: "/images/typewriter.png" },
];
</script>

<template>
  <section class="index-section" id="view-index-help">
    <h4 class="index-section-title">Quer ajudar?</h4>

    <div class="help-cards">
      <template v-for="card of cards">
        <button class="help-card button is-primary" :style="`--src: url(${card.src})`">
          {{ card.label }}
        </button>
      </template>
    </div>
  </section>
</template>

<style lang="scss">
#view-index-help {
  min-height: min-content;

  .help-cards {
    display: flex;
    gap: 0.5rem;

    .help-card {
      align-items: flex-start;
      width: 100%;
      min-width: 120px;
      max-width: 160px;
      height: 240px;
      border: none;
      border-radius: 4px;
      box-shadow: inset #63636333 0px 2px 8px 0px;
      background-image: var(--src);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      color: #fff;
      font-size: 1.25rem;
      font-weight: 600;
      white-space: normal;

      transition: all 0.2s;

      &:hover {
        box-shadow: inset #00000059 0px 5px 15px;
        color: var(--primary-color);
      }
    }
  }

  @media only screen and (max-width: 658px) {
    .help-cards {
      flex-direction: column;

      .help-card {
        max-width: unset;
        height: unset;
        align-items: center;

        font-size: 18px;
        text-shadow: 2px 2px 2px #0006;

        aspect-ratio: 1 / 0.16;
      }
    }
  }
}
</style>
