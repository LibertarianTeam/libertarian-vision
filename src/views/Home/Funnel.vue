<script>
import Title from "@/views/Home/Title";
import Button from "@/components/Button";
import Divider from "@/components/Divider";

export default {
  name: "HomeFunnel",
  components: {
    "m-title": Title,
    "c-button": Button,
    "c-divider": Divider
  }
};
</script>

<template lang="html">
  <div class="home-funnel">
    <c-divider></c-divider>
    <m-title>Funil de Produção</m-title>

    <div>
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
.home-funnel {
}

.home-funnel > div {
  display: flex;
}

.button {
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  border-radius: 8px;

  color: #fff;
}

.schedule {
  margin-right: 20px;
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
</style>
