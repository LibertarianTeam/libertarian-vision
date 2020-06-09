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
      <c-button class="schedule" :to="{ name: 'index' }">
        <h6 class="counter">138</h6>
        <span class="text">Pautas</span>
      </c-button>

      <c-button class="approved" :to="{ name: 'index' }">
        <h6 class="counter">17</h6>
        <span class="text">Aprovadas</span>
      </c-button>
    </div>
  </section>
</template>

<style lang="css" scoped>
.content {
  padding: 2px 0;
}

.schedule,
.approved {
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  color: var(--text-secondary);
  border-radius: 8px;
}

.schedule {
  margin-right: 22px;
  background-color: var(--secondary);
}

.approved {
  background-color: var(--success);
}

.counter {
  font-size: 1.2rem;
}

.text {
  font-size: 0.8rem;
  margin-top: 4px;
}

@media only screen and (max-width: 640px) {
  .content {
    display: flex;
    justify-content: center;
  }
}
</style>
