<script>
import Card from "@/components/Card";
import Title from "@/components/Title";

export default {
  name: "HomeNews",
  components: {
    "c-card": Card,
    "c-title": Title
  }
};
</script>

<template lang="html">
  <section class="s-news">
    <c-title>Últimas Notícias Veiculadas</c-title>

    <div class="list">
      <c-card
        v-for="i in 9"
        :key="i"
        tag="Crônica"
        img="https://i.ibb.co/Lnz4Tgs/image.png"
        compact
      >
        Burger King e Ambev capitalistas malvados dando um empurrãozinho no
        sistema estatal.
      </c-card>
    </div>
  </section>
</template>

<style lang="css" scoped>
.list {
  display: grid;

  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
}

.c-card {
  width: 100%;
}

@media only screen and (max-width: 800px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }

  .c-card:last-child {
    grid-column: 1/3;
  }
}

@media only screen and (max-width: 640px) {
  .list {
    grid-template-columns: auto;
  }

  .c-card:last-child {
    grid-column: 1/2;
  }
}
</style>
