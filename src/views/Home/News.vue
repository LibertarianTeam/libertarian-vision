<script>
import Card from "@/components/Card";
import Title from "@/views/Home/Title";

export default {
  name: "HomeNews",
  components: {
    "c-card": Card,
    "m-title": Title
  }
};
</script>

<template lang="html">
  <div class="home-news">
    <m-title>Últimas Notícias Veiculadas</m-title>

    <div class="cards">
      <c-card
        v-for="i in 9"
        :key="i"
        tag="Crônica"
        img="https://i.ibb.co/Lnz4Tgs/image.png"
        compact
        externalImg
      >
        Burger King e Ambev capitalistas malvados dando um empurrãozinho no
        sistema estatal.
      </c-card>
    </div>
  </div>
</template>

<style lang="css" scoped>
.cards {
  display: grid;

  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  width: 100%;
}

@media only screen and (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .card:last-child {
    grid-column: 1/3;
  }
}

@media only screen and (max-width: 640px) {
  .cards {
    grid-template-columns: auto;
  }

  .card:last-child {
    grid-column: 1/2;
  }
}
</style>
