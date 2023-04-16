<script lang="ts" setup>
const cards = [
  { label: "Agenda", value: 1194, color: "var(--info-color)" },
  { label: "Review", value: 23, color: "var(--warning-color)" },
  { label: "Narração", value: 2, color: "var(--secondary-color)" },
  { label: "Produção", value: 9, color: "var(--success-color)" },
  { label: "Sat/W", value: 8, color: "var(--primary-color)" },
];
</script>

<template>
  <section class="index-section" id="view-index-funnel">
    <h4 class="index-section-title">Funil de produção</h4>

    <div class="funnel-cards">
      <template v-for="card of cards">
        <button class="funnel-card button is-libertarian" :style="`--color: ${card.color}`">
          <b>{{ card.value }}</b>
          <p>{{ card.label }}</p>
        </button>
      </template>
    </div>
  </section>
</template>

<style lang="scss">
#view-index-funnel {
  min-width: min-content;
  min-height: min-content;

  .funnel-cards {
    display: flex;
    gap: 0.75rem;

    .funnel-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80px;
      height: unset;
      padding: 18px 12px;
      border-radius: 4px;
      box-shadow: unset;
      background-color: var(--color);

      color: #fff;
      font-size: 14px;
      line-height: 1.25rem;

      b {
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 658px) {
    .funnel-cards {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
}
</style>
