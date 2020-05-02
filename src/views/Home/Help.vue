<script>
import Card from "@/components/Card";
import Title from "@/components/Title";

export default {
  name: "HomeHelp",
  components: {
    "gc-card": Card,
    "gc-title": Title
  }
};
</script>

<template lang="html">
  <div class="sc-help">
    <gc-title>Quer Ajudar?</gc-title>

    <div class="list">
      <gc-card :dark="false" img="imgs/news.png">
        <span>Sugerir Noticia</span>
      </gc-card>

      <gc-card :dark="false" img="imgs/typewriter.png">
        <span>Escrever Matéria</span>
      </gc-card>

      <gc-card :dark="false" img="imgs/mic.png">
        <span>Narrar Matéria</span>
      </gc-card>
    </div>
  </div>
</template>

<style lang="css" scoped>
.list {
  display: inline-flex;
  width: 100%;
}

.gc-card {
  align-items: flex-start;

  width: 120px;
  height: 240px;
}

.gc-card + .gc-card {
  margin-left: 6px;
}

.gc-card span {
  transition: color 0.4s;

  color: var(--text-tertiary);
  font-size: 20px;
  font-weight: bolder;
}

.gc-card:hover span {
  color: var(--text-secondary);
}

@media only screen and (max-width: 800px) {
  .list {
    justify-content: center;
  }

  .gc-card {
    width: 180px;
  }
}

@media only screen and (max-width: 360px) {
  .list {
    flex-direction: column;
    align-items: center;
  }

  .gc-card {
    width: 100%;
    height: 140px;
  }

  .gc-card span {
    font-size: 28px;
  }

  .gc-card + .gc-card {
    margin: 8px 0 0;
  }
}
</style>
