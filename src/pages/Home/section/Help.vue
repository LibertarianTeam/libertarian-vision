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
  <div class="s-help">
    <c-title>Quer Ajudar?</c-title>

    <div class="list">
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

.c-card span {
  transition: color 0.4s;

  color: var(--text-tertiary);
  font-size: 20px;
  font-weight: bolder;
}

.c-card:hover span {
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

@media only screen and (max-width: 360px) {
  .list {
    flex-direction: column;
    align-items: center;
  }

  .c-card {
    width: 100%;
    height: 140px;
  }

  .c-card span {
    font-size: 28px;
  }

  .c-card + .c-card {
    margin: 8px 0 0;
  }
}
</style>
