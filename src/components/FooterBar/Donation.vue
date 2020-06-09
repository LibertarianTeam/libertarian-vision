<script>
import Card from './Card'
import Title from '~/components/Title'

export default {
  name: 'FooterBarDonation',
  components: {
    'c-title': Title,
    'c-footer-bar-card': Card
  },
  computed: {
    donationLinks() {
      return this.$store.state.static.links.donation
    }
  }
}
</script>

<template lang="html">
  <section class="c-footer-bar-donation">
    <c-title double>Ajude nosso projeto</c-title>

    <c-footer-bar-card
      title="Nos ajude no Apoiase.se"
      :to="donationLinks.apoiase"
      img="imgs/apoiase.png"
    >
      <template #link>Apoia.se</template>
      Oferece todos os modos de pagamento tradicionais no Brasil, inclusive
      boleto.
    </c-footer-bar-card>

    <c-footer-bar-card
      title="Nos ajude no Padrim"
      :to="donationLinks.padrim"
      img="imgs/padrim.png"
    >
      <template #link>Padrim</template>
      Oferece todos os modos de pagamento tradicionais no Brasil, inclusive
      boleto.
    </c-footer-bar-card>

    <c-footer-bar-card
      title="Nos ajude no Patreon"
      :to="donationLinks.patreon"
      img="imgs/patreon.png"
    >
      <template #link>Patreon</template>
      Fácil de ser usado no resto do mundo, aceita qualquer cartão internacional
      ou paypal.
    </c-footer-bar-card>
  </section>
</template>

<style lang="css" scoped>
.c-title {
  color: var(--text-secondary);
  font-size: 1.2rem;
}

@media only screen and (max-width: 800px) {
  .c-title {
    font-size: 1.1rem;
    text-align: center;
  }
}
</style>
