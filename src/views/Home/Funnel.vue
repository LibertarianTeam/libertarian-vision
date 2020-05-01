<script>
import Title from "@/components/Title";
import Button from "@/components/Button";

export default {
  name: "HomeFunnel",
  components: {
    "gc-title": Title,
    "gc-button": Button
  }
};
</script>

<template lang="html">
  <div class="sc-funnel">
    <gc-title>Funil de Produção</gc-title>

    <div class="content">
      <gc-button class="schedule" :to="{ name: 'Home' }">
        <h6>138</h6>
        <span>Pautas</span>
      </gc-button>

      <gc-button class="approved" :to="{ name: 'Home' }">
        <h6>17</h6>
        <span>Aprovadas</span>
      </gc-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.content {
  padding: 2px 0;
}

.gc-button {
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

@media only screen and (max-width: 360px) {
  .content {
    display: flex;
    justify-content: center;
  }
}
</style>
