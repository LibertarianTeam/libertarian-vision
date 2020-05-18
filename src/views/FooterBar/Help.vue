<script>
import Title from '@/components/Title'
import Card from '@/views/FooterBar/Card'

export default {
  name: 'FooterBarHelp',
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
  <section class="v-help">
    <c-title double>Ajude nosso projeto</c-title>

    <v-card
      title="Nos ajude no Apoiase.se"
      :to="links.apoiase"
      image="imgs/apoiase.png"
    >
      <template #link>Apoia.se</template>
      Oferece todos os modos de pagamento tradicionais no Brasil, inclusive
      boleto.
    </v-card>

    <v-card
      title="Nos ajude no Padrim"
      :to="links.padrim"
      image="imgs/padrim.png"
    >
      <template #link>Padrim</template>
      Oferece todos os modos de pagamento tradicionais no Brasil, inclusive
      boleto.
    </v-card>

    <v-card
      title="Nos ajude no Patreon"
      :to="links.patreon"
      image="imgs/patreon.png"
    >
      <template #link>Patreon</template>
      Fácil de ser usado no resto do mundo, aceita qualquer cartão internacional
      ou paypal.
    </v-card>
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
</style>
