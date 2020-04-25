<script>
import Title from "@/views/Home/Title";
import Button from "@/components/Button";

export default {
  name: "HomeFunnel",
  components: {
    "m-title": Title,
    "c-button": Button
  }
};
</script>

<template lang="html">
  <div class="home-funnel">
    <m-title>Funil de Produção</m-title>

    <div class="content">
      <c-button class="schedule" type="link" :to="{ name: 'Home' }">
        <h6>138</h6>
        <span>Pautas</span>
      </c-button>

      <c-button class="approved" type="link" :to="{ name: 'Home' }">
        <h6>17</h6>
        <span>Aprovadas</span>
      </c-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.content {
  padding: 2px 0;
}

.button {
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
