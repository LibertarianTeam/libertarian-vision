<script>
import Card from "@/components/Card";
import Title from "@/views/Home/Title";

export default {
  name: "HomeNews",
  components: {
    "gc-card": Card,
    "sc-title": Title
  }
};
</script>

<template lang="html">
  <div class="sc-news">
    <sc-title>Últimas Notícias Veiculadas</sc-title>

    <div class="list">
      <gc-card
        v-for="i in 9"
        :key="i"
        tag="Crônica"
        img="https://i.ibb.co/Lnz4Tgs/image.png"
        compact
      >
        Burger King e Ambev capitalistas malvados dando um empurrãozinho no
        sistema estatal.
      </gc-card>
    </div>
  </div>
</template>

<style lang="css" scoped>
.list {
  display: grid;

  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
}

.gc-card {
  width: 100%;
}

@media only screen and (max-width: 800px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }

  .gc-card:last-child {
    grid-column: 1/3;
  }
}

@media only screen and (max-width: 640px) {
  .list {
    grid-template-columns: auto;
  }

  .gc-card:last-child {
    grid-column: 1/2;
  }
}
</style>
