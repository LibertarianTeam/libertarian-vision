<script>
import Card from './Card'
import Title from '~/components/Title'

export default {
  name: 'FooterBarStore',
  components: {
    'c-title': Title,
    'c-footer-bar-card': Card
  },
  computed: {
    storeLinks() {
      return this.$store.state.static.links.store
    }
  }
}
</script>

<template lang="html">
  <section class="c-footer-bar-store">
    <c-title double>Compre em nossa loja!</c-title>

    <c-footer-bar-card
      title="Garanta já a sua Caneca!"
      :to="storeLinks.mug"
      img="imgs/mug.png"
    >
      <template #link>Caneca ANCAP.SU</template>
      Tire onda com uma caneca exclusiva do canal, ideal para todo tipo de
      café... cara, a substância você decide.
    </c-footer-bar-card>

    <c-footer-bar-card
      title="Garanta já a sua Camisa!"
      :to="storeLinks.shirt"
      img="imgs/shirt.png"
    >
      <template #link>Camisa ANCAP.SU</template>
      Quer arrumar confusão na escola? ou causar problema na repartição? essa é
      a camisa certa para isso.
    </c-footer-bar-card>
  </section>
</template>

<style lang="css" scoped>
.c-title {
  margin-bottom: 40px;

  color: var(--text-secondary);
  font-size: 1.2rem;
}

.c-footer-bar-card + .c-footer-bar-card {
  margin-top: 38px;
}

@media only screen and (max-width: 800px) {
  .c-title {
    font-size: 1.1rem;
    text-align: center;
  }
}

@media only screen and (max-width: 640px) {
  .c-footer-bar-card + .c-footer-bar-card {
    margin-top: 0;
  }
}
</style>
