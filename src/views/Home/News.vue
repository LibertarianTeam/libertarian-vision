<script>
import Card from "@/components/Card";
import Title from "@/views/Home/Title";
import Button from "@/components/Button";
import Divider from "@/components/Divider";

export default {
  name: "HomeNews",
  components: {
    "c-card": Card,
    "m-title": Title,
    "c-button": Button,
    "c-divider": Divider
  }
};
</script>

<template lang="html">
  <div class="home-news">
    <c-divider></c-divider>
    <m-title>Últimas Notícias Veiculadas</m-title>

    <div class="cards">
      <c-card
        v-for="i in 9"
        :key="i"
        tag="Crônica"
        img="https://i.ibb.co/ZhWXc4X/1-kg8aaunxi055ohnht04srq.jpg"
        extended
        externalImg
      >
        África Oriental: Surto de gafanhotos que já perdura mais de 3 meses é a
        maior praga no continente dos últimos 70 anos.
      </c-card>
    </div>
  </div>
</template>

<style lang="css" scoped>
.cards {
  display: grid;

  grid-gap: 12px;
  grid-template-columns: repeat(3, auto);
}

.card {
  width: 100%;
}

@media only screen and (max-width: 1365px) {
  .cards {
    grid-template-columns: repeat(2, auto);
  }

  .card {
    background-size: cover;
  }
}

@media only screen and (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, auto);
  }
}

@media only screen and (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, auto);
  }
}

@media only screen and (max-width: 640px) {
  .cards {
    grid-template-columns: auto;
  }
}
</style>
