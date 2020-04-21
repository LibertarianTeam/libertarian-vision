<script>
import Card from "@/components/Card";
import Title from "@/views/Home/Title";
import Divider from "@/components/Divider";

export default {
  name: "HomeHelp",
  components: {
    "c-card": Card,
    "m-title": Title,
    "c-divider": Divider
  }
};
</script>

<template lang="html">
  <div class="home-help">
    <c-divider></c-divider>
    <m-title>Quer Ajudar?</m-title>

    <div class="cards">
      <c-card img="imgs/news.png">
        <span>Sugerir Noticia</span>
      </c-card>

      <c-card img="imgs/typewriter.png">
        <span>Escrever Matéria</span>
      </c-card>

      <c-card img="imgs/mic.png">
        <span>Narrar Matéria</span>
      </c-card>
    </div>
  </div>
</template>

<style lang="css" scoped>
.home-help {
}

.cards {
  display: inline-flex;
  justify-content: center;

  width: 100%;
}

.card {
  align-items: flex-start;

  width: 120px;
  height: 240px;
}

.card + .card {
  margin-left: 6px;
}

.card span {
  transition: color 0.4s;

  color: var(--text-tertiary);
  font-size: 20px;
  font-weight: bolder;
}

.card:hover span {
  color: var(--text-secondary);
}
</style>
