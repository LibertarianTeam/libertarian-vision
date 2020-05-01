<script>
import Image from "@/components/Image";
import Button from "@/components/Button";
import SocialNav from "@/components/SocialNav";

export default {
  name: "FooterAbout",
  components: {
    "gc-image": Image,
    "gc-button": Button,
    "gc-social-nav": SocialNav
  },
  computed: {
    links() {
      return this.$store.state.static.links;
    }
  }
};
</script>

<template lang="html">
  <div class="sc-about">
    <gc-image src="logov1.svg"></gc-image>

    <h4 class="description">
      Ancap.su é um canal no youtube com o objetivo de divulgar o
      libertarianismo e o anarcocapitalismo. O canal é composto de vários
      quadros, vídeos teóricos semanais, geralmente liberados as sextas-feiras,
      quadros cômicos ocasionais e nosso jornal diário libertário, o
      <gc-button
        title="Visite o canal Visão Libertária"
        :to="links.visaolibertaria"
        icon
      >
        visão libertária</gc-button
      >.
    </h4>

    <address class="contact">
      Entre em contato:
      <gc-button title="Entre em contato conosco!" :to="links.email" icon>
        ancapsu@gmail.com
      </gc-button>
    </address>

    <gc-social-nav invert></gc-social-nav>
  </div>
</template>

<style lang="css" scoped>
.sc-about {
  display: flex;
  flex-direction: column;

  text-align: justify;
}

.gc-image {
  fill: var(--primary);
  width: 220px;

  padding: 0 0 22px;
}

.contact,
.description {
  padding: 0 0 22px;
}

.contact,
.gc-button,
.description {
  font: small-caps bold 22px/1 cursive;
  color: var(--text-secondary);
}

.gc-button {
  color: var(--text-tertiary);
}
</style>
