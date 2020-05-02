<script>
import Title from "@/components/Title";
import Card from "@/components/Footer/Card";

export default {
  name: "FooterStore",
  components: {
    "sc-card": Card,
    "gc-title": Title
  },
  computed: {
    links() {
      return this.$store.state.static.links;
    }
  }
};
</script>

<template lang="html">
  <div class="sc-store">
    <gc-title double>Compre em nossa loja!</gc-title>

    <sc-card
      title="Garanta já a sua Caneca!"
      :to="links.mug"
      image="imgs/mug.png"
    >
      <template #link>Caneca ANCAP.SU</template>
      <template #default>
        Tire onda com uma caneca exclusiva do canal, ideal para todo tipo de
        café... cara, a substância você decide.
      </template>
    </sc-card>

    <sc-card
      title="Garanta já a sua Camisa!"
      :to="links.shirt"
      image="imgs/shirt.png"
    >
      <template #link>Camisa ANCAP.SU</template>
      <template #default>
        Quer arrumar confusão na escola? ou causar problema na repartição? essa
        é a camisa certa para isso.
      </template>
    </sc-card>
  </div>
</template>

<style lang="css" scoped>
.gc-title {
  color: var(--text-secondary);
}

@media only screen and (max-width: 1024px) {
  .gc-title {
    font-size: 20px;
  }
}

@media only screen and (max-width: 800px) {
  .gc-title {
    font-size: 18px;
  }
}
</style>
