<script>
import Card from "@/components/Card";
import Title from "@/components/Title";

export default {
  name: "HomeHelp",
  components: {
    "c-card": Card,
    "c-title": Title
  }
};
</script>

<template lang="html">
  <section class="s-help">
    <c-title>Quer Ajudar?</c-title>

    <div class="list">
      <c-card :dark="false" img="imgs/news.png">
        <span class="title">Sugerir Noticia</span>
      </c-card>

      <c-card :dark="false" img="imgs/typewriter.png">
        <span class="title">Escrever Matéria</span>
      </c-card>

      <c-card :dark="false" img="imgs/mic.png">
        <span class="title">Narrar Matéria</span>
      </c-card>
    </div>
  </section>
</template>

<style lang="css" scoped>
.list {
  display: inline-flex;
  width: 100%;
}

.c-card {
  align-items: flex-start;

  width: 120px;
  height: 240px;
}

.c-card + .c-card {
  margin-left: 6px;
}

.c-card .title {
  transition: color 0.4s;

  color: var(--text-tertiary);
  font: bolder 24px caption;
}

.c-card:hover .title {
  color: var(--text-secondary);
}

@media only screen and (max-width: 800px) {
  .list {
    justify-content: center;
  }

  .c-card {
    width: 180px;
  }
}

@media only screen and (max-width: 480px) {
  .c-card .title {
    font-size: 20px;
  }
}

@media only screen and (max-width: 360px) {
  .list {
    flex-direction: column;
    align-items: center;
  }

  .c-card {
    width: 100%;
    height: 96px;
  }

  .c-card .title {
    font-size: 24px;
  }

  .c-card + .c-card {
    margin: 8px 0 0;
  }
}
</style>
