<script>
import Button from "@/components/Button";
import Figure from "@/components/Figure";
import SocialNav from "@/components/SocialNav";

export default {
  name: "FooterBarAbout",
  components: {
    "c-button": Button,
    "c-figure": Figure,
    "c-social-nav": SocialNav
  },
  computed: {
    links() {
      return this.$store.state.static.links;
    }
  }
};
</script>

<template lang="html">
  <section class="s-about">
    <c-figure src="logov1.svg"></c-figure>

    <h4 class="description">
      Ancap.su é um canal no youtube com o objetivo de divulgar o
      libertarianismo e o anarcocapitalismo. O canal é composto de vários
      quadros, vídeos teóricos semanais, geralmente liberados as sextas-feiras,
      quadros cômicos ocasionais e nosso jornal diário libertário, o
      <c-button
        title="Visite o canal Visão Libertária"
        :to="links.visaolibertaria"
        text
      >
        visão libertária</c-button
      >.
    </h4>

    <address class="contact">
      Entre em contato:
      <c-button title="Entre em contato conosco!" :to="links.email" text>
        ancapsu@gmail.com
      </c-button>
    </address>

    <c-social-nav invert></c-social-nav>
  </section>
</template>

<style lang="css" scoped>
.s-about {
  display: flex;
  flex-direction: column;

  text-align: justify;
}

.c-figure {
  fill: var(--primary);
  width: 220px;

  padding: 0 0 22px;
}

.contact,
.description {
  padding: 0 0 22px;
  color: var(--text-secondary);
}

.contact,
.c-button,
.description {
  font: small-caps bold 22px/1 cursive;
}

.c-button {
  color: var(--text-tertiary);
}

@media only screen and (max-width: 1366px) {
  .contact,
  .c-button,
  .description {
    font-size: 18px;
  }
}

@media only screen and (max-width: 360px) {
  .contact,
  .c-button,
  .description {
    font-size: 14px;
  }
}
</style>
