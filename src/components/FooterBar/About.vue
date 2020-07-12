<script>
import Button from '~/components/Button'
import Figure from '~/components/Figure'
import SocialNav from '~/components/SocialNav'

export default {
  name: 'FooterBarAbout',
  components: {
    'c-button': Button,
    'c-figure': Figure,
    'c-social-nav': SocialNav
  },
  computed: {
    emailAddress() {
      return this.$store.state.static.links.emails.primary
    },
    emailLink() {
      return this.$store.getters['static/email'](this.emailAddress)
    },
    visaolibertariaLink() {
      return this.$store.state.static.links.social.visaolibertaria
    }
  }
}
</script>

<template lang="html">
  <section class="c-footer-bar-about">
    <c-figure src="full-logo.svg"></c-figure>

    <h4 class="description">
      Ancap.su é um canal no youtube com o objetivo de divulgar o
      libertarianismo e o anarcocapitalismo. O canal é composto de vários
      quadros, vídeos teóricos semanais, geralmente liberados as sextas-feiras,
      quadros cômicos ocasionais e nosso jornal diário libertário, o
      <span>
        <c-button
          title="Visite o canal Visão Libertária"
          :to="visaolibertariaLink"
          text
        >
          visão libertária </c-button
        >.
      </span>
    </h4>

    <address class="contact">
      Entre em contato:
      <c-button title="Entre em contato conosco!" :to="emailLink" text>
        {{ emailAddress }}
      </c-button>
    </address>

    <c-social-nav invert></c-social-nav>
  </section>
</template>

<style lang="css" scoped>
.c-footer-bar-about {
  display: flex;

  text-align: justify;
  flex-direction: column;
}

.c-footer-bar-about > .c-figure {
  width: 220px;
  padding: 0 0 22px;

  fill: var(--primary);
}

.c-footer-bar-about .contact,
.c-footer-bar-about .description {
  padding: 0 0 22px;
  color: var(--text-secondary);
}

.c-footer-bar-about .contact,
.c-footer-bar-about .description,
.c-footer-bar-about .c-button.text {
  font: italic bold 1.3rem/1.2 cursive;
}

.c-footer-bar-about .c-button.text {
  color: var(--text-tertiary);
}

@media only screen and (max-width: 1366px) {
  .c-footer-bar-about .contact,
  .c-footer-bar-about .description,
  .c-footer-bar-about .c-button.text {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 360px) {
  .c-footer-bar-about > .c-figure {
    width: 180px;
  }

  .c-footer-bar-about .contact,
  .c-footer-bar-about .description,
  .c-footer-bar-about .c-button.text {
    font-size: 1.2rem;
  }

  .c-footer-bar-about .contact {
    text-align: center;
  }
}
</style>
