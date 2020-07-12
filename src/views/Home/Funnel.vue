<script>
import Title from '~/components/Title'
import Button from '~/components/Button'

export default {
  name: 'HomeFunnel',
  components: {
    'c-title': Title,
    'c-button': Button
  }
}
</script>

<template lang="html">
  <section class="v-home-funnel">
    <c-title>Funil de Produção</c-title>

    <div class="content">
      <c-button class="item schedule" :to="{ name: 'index' }">
        <h6 class="counter">138</h6>
        <span class="text">Pautas</span>
      </c-button>

      <c-button class="item approved" :to="{ name: 'index' }">
        <h6 class="counter">17</h6>
        <span class="text">Aprovadas</span>
      </c-button>
    </div>
  </section>
</template>

<style lang="css" scoped>
.v-home-funnel .content {
  padding: 2px 0;
}

.v-home-funnel .content .item {
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  color: var(--text-secondary);
  border-radius: 8px;
}

.v-home-funnel .content .item .counter {
  font-size: 1.2rem;
}

.v-home-funnel .content .item .text {
  font-size: 0.8rem;
  margin-top: 4px;
}

.v-home-funnel .content .schedule {
  margin-right: 22px;
  background-color: var(--secondary);
}

.v-home-funnel .content .approved {
  background-color: var(--success);
}

@media only screen and (max-width: 640px) {
  .v-home-funnel .content {
    display: flex;
    justify-content: center;
  }
}
</style>
