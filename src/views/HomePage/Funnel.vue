<script>
import Title from '@/components/Title'
import Button from '@/components/Button'

export default {
  name: 'HomeFunnel',
  components: {
    'c-title': Title,
    'c-button': Button
  }
}
</script>

<template lang="html">
  <section class="v-funnel">
    <c-title>Funil de Produção</c-title>

    <div class="content">
      <c-button class="schedule" :to="{ name: 'index' }">
        <h6>138</h6>
        <span>Pautas</span>
      </c-button>

      <c-button class="approved" :to="{ name: 'index' }">
        <h6>17</h6>
        <span>Aprovadas</span>
      </c-button>
    </div>
  </section>
</template>

<style lang="css" scoped>
.content {
  padding: 2px 0;
}

.c-button {
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  border-radius: 8px;

  color: var(--text-secondary);
}

.schedule {
  margin-right: 22px;
  background-color: var(--secondary);
}

.approved {
  background-color: var(--success);
}

h6 {
  font-size: 20px;
}

span {
  font-size: 12px;
}

@media only screen and (max-width: 480px) {
  .content {
    display: flex;
    justify-content: center;
  }
}
</style>
