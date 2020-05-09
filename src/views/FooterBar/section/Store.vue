<script>
import Title from "@/components/Title";
import Card from "@/views/FooterBar/section/Card";

export default {
  name: "FooterBarStore",
  components: {
    "s-card": Card,
    "c-title": Title
  },
  computed: {
    links() {
      return this.$store.state.static.links;
    }
  }
};
</script>

<template lang="html">
  <section class="s-store">
    <c-title double>Compre em nossa loja!</c-title>

    <s-card
      title="Garanta já a sua Caneca!"
      :to="links.mug"
      image="imgs/mug.png"
    >
      <template #link>Caneca ANCAP.SU</template>
      Tire onda com uma caneca exclusiva do canal, ideal para todo tipo de
      café... cara, a substância você decide.
    </s-card>

    <s-card
      title="Garanta já a sua Camisa!"
      :to="links.shirt"
      image="imgs/shirt.png"
    >
      <template #link>Camisa ANCAP.SU</template>
      Quer arrumar confusão na escola? ou causar problema na repartição? essa é
      a camisa certa para isso.
    </s-card>
  </section>
</template>

<style lang="css" scoped>
.c-title {
  color: var(--text-secondary);
}

@media only screen and (max-width: 1024px) {
  .c-title {
    font-size: 20px;
  }
}

@media only screen and (max-width: 800px) {
  .c-title {
    font-size: 18px;
  }
}
</style>
