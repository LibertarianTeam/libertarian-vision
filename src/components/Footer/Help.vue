<script>
import Title from "@/components/Title";
import Card from "@/components/Footer/Card";

export default {
  name: "FooterHelp",
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
  <div class="sc-help">
    <gc-title double>Ajude nosso projeto</gc-title>

    <sc-card
      title="Nos ajude no Apoiase.se"
      :to="links.apoiase"
      image="imgs/apoiase.png"
    >
      <template #link>Apoia.se</template>
      <template #default>
        Oferece todos os modos de pagamento tradicionais no Brasil, inclusive
        boleto.
      </template>
    </sc-card>

    <sc-card
      title="Nos ajude no Padrim"
      :to="links.padrim"
      image="imgs/padrim.png"
    >
      <template #link>Padrim</template>
      <template #default>
        Oferece todos os modos de pagamento tradicionais no Brasil, inclusive
        boleto.
      </template>
    </sc-card>

    <sc-card
      title="Nos ajude no Patreon"
      :to="links.patreon"
      image="imgs/patreon.png"
    >
      <template #link>Patreon</template>
      <template #default>
        Fácil de ser usado no resto do mundo, aceita qualquer cartão
        internacional ou paypal.
      </template>
    </sc-card>
  </div>
</template>

<style lang="css" scoped>
.gc-title {
  color: var(--text-secondary);
}
</style>
