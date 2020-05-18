<script>
import Title from '@/components/Title'
import Card from '@/views/FooterBar/Card'

export default {
  name: 'FooterBarStore',
  components: {
    'v-card': Card,
    'c-title': Title
  },
  computed: {
    links() {
      return this.$store.state.static.links
    }
  }
}
</script>

<template lang="html">
  <section class="v-store">
    <c-title double>Compre em nossa loja!</c-title>

    <v-card
      title="Garanta já a sua Caneca!"
      :to="links.mug"
      image="imgs/mug.png"
    >
      <template #link>Caneca ANCAP.SU</template>
      Tire onda com uma caneca exclusiva do canal, ideal para todo tipo de
      café... cara, a substância você decide.
    </v-card>

    <v-card
      title="Garanta já a sua Camisa!"
      :to="links.shirt"
      image="imgs/shirt.png"
    >
      <template #link>Camisa ANCAP.SU</template>
      Quer arrumar confusão na escola? ou causar problema na repartição? essa é
      a camisa certa para isso.
    </v-card>
  </section>
</template>

<style lang="css" scoped>
.c-title {
  color: var(--text-secondary);
}

.v-card + .v-card {
  margin-top: 42px;
}

@media only screen and (max-width: 1024px) {
  .c-title {
    font-size: 20px;
  }

  .v-card + .v-card {
    margin-top: 36px;
  }
}

@media only screen and (max-width: 800px) {
  .c-title {
    font-size: 18px;
  }
}

@media only screen and (max-width: 640px) {
  .v-card + .v-card {
    margin-top: 0;
  }
}
</style>
