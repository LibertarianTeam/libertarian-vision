<script>
import Card from "@/components/Card";
import Title from "@/views/Home/Title";

export default {
  name: "HomeHelp",
  components: {
    "c-card": Card,
    "m-title": Title
  }
};
</script>

<template lang="html">
  <div class="home-help">
    <m-title>Quer Ajudar?</m-title>

    <div class="cards">
      <c-card :dark="false" img="imgs/news.png">
        <span>Sugerir Noticia</span>
      </c-card>

      <c-card :dark="false" img="imgs/typewriter.png">
        <span>Escrever Matéria</span>
      </c-card>

      <c-card :dark="false" img="imgs/mic.png">
        <span>Narrar Matéria</span>
      </c-card>
    </div>
  </div>
</template>

<style lang="css" scoped>
.cards {
  display: inline-flex;
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

@media only screen and (max-width: 800px) {
  .cards {
    justify-content: center;
  }

  .card {
    width: 180px;
  }
}

@media only screen and (max-width: 360px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
  }

  .card + .card {
    margin: 8px 0 0;
  }
}
</style>
