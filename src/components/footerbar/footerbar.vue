<script lang="ts" setup>
const donateLinks = [
  {
    title: "PicPay",
    text: "Pagamento rápido por várias formas, inclui boleto, cartão e outras opções.",
    src: "/images/picpay.png",
    href: "https://app.picpay.com/user/ancapsu",
  },
  {
    title: "Padrim",
    text: "Oferece todos os modos de pagamento tradicionais no Brasil, inclusive boleto.",
    src: "/images/padrim.png",
    href: "https://www.padrim.com.br/ancapsu",
  },
  {
    title: "Patreon",
    text: "Fácil de usar em qualquer lugar do mundo, você pode contribuir em qualquer moeda, com cartão de crédito ou PayPal.",
    src: "/images/patreon.png",
    href: "https://www.patreon.com/ancapsu",
  },
];

const storeLinks = [
  {
    title: "PimentaNoCafé",
    text: "Quer fazer uma bagunça na escola? ou causar problema no escritório? esta é a camisa certa para isso.",
    src: "/images/pimentanocafe.jpg",
    href: "https://app.picpay.com/user/ancapsu",
  },
];

const { NUXT_ENV_MAIL } = process.env || {};
</script>

<template>
  <footer class="footerbar" id="footerbar">
    <div class="footerbar-content">
      <section class="footerbar-about">
        <img class="footerbar-logo" src="~/assets/images/logo.png" alt="Visão libertaria" />
        <p class="footerbar-about-text">
          Visão libertária é um jornal colaborativo no qual muitas pessoas participam da criação, edição, escolha dos
          temas e conseguem receber algumas migalhas que o youtube, de vez em quando, joga na gente.
        </p>
        <address class="footerbar-about-contact">
          Entre em contato:
          <a class="button" :href="NUXT_ENV_MAIL" target="_blank" rel="noopener noreferrer">ancapsu@gmail.com</a>
        </address>
        <social-links />
      </section>

      <section class="footerbar-donate">
        <h4 class="footerbar-title">Ajude nosso projeto</h4>

        <template v-for="link of donateLinks">
          <a class="footerbar-card" :href="link.href" target="_blank" rel="noopener noreferrer">
            <img class="footerbar-card-image" :src="link.src" :alt="link.title" />
            <p class="footerbar-card-text">
              <b class="footerbar-card-title">{{ link.title }}</b> {{ link.text }}
            </p>
          </a>
        </template>
      </section>

      <section class="footerbar-store">
        <h4 class="footerbar-title">Compre em nossa loja!</h4>

        <template v-for="link of storeLinks">
          <a class="footerbar-card" :href="link.href" target="_blank" rel="noopener noreferrer">
            <img class="footerbar-card-image" :src="link.src" :alt="link.title" />
            <p class="footerbar-card-text">
              <b class="footerbar-card-title">{{ link.title }}</b> {{ link.text }}
            </p>
          </a>
        </template>
      </section>
    </div>
  </footer>
</template>

<style lang="scss">
.footerbar {
  position: relative;
  width: 100%;
  background-image: url("~/assets/images/footer.png");
  background-repeat: no-repeat;
  background-size: cover;

  .footerbar-content {
    display: grid;
    grid-template-areas: "footerbar-about footerbar-donate footerbar-store";
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 1.5rem 3rem;
    background-color: #000a;

    transition: all 0.6s;

    .footerbar-title {
      margin-bottom: 1.5rem;
      padding: 0.5rem 0;
      border: 0 solid #fff;
      border-width: 2px 0;
      border-radius: 2px;

      color: #fff;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .footerbar-card {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .footerbar-card-image {
        width: 100px;
        border-radius: 4px;
      }

      .footerbar-card-text {
        color: #fff;
        font-size: 1rem;
        text-align: justify;
        line-height: 1.25rem;

        .footerbar-card-title {
          color: var(--primary-color);
          font-size: 1.125rem;
        }
      }

      + .footerbar-card {
        margin-top: 1rem;
      }
    }
  }

  .footerbar-about {
    grid-area: footerbar-about;
    color: #fff;

    .footerbar-logo {
      height: 64px;
      margin-bottom: 1.5rem;
      user-select: none;
      filter: invert(100%);
      object-fit: contain;
    }

    .footerbar-about-text {
      margin-bottom: 1.5rem;

      font: italic 700 1.3rem/1.2 cursive;
      text-align: justify;
      line-height: 1.5rem;
    }

    .footerbar-about-contact {
      margin-bottom: 1.5rem;

      font-weight: 500;
      font-style: normal;

      .button {
        border: none !important;
        height: unset;
        padding: 0;
        background-color: transparent;

        color: var(--primary-color);
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .social-links {
      --color: #fff;
      --invert: invert(100%);
    }
  }

  .footerbar-donate {
    grid-area: footerbar-donate;
  }

  .footerbar-store {
    grid-area: footerbar-store;
  }

  &:hover {
    .footerbar-content {
      background-color: #000c;
    }
  }

  @media only screen and (max-width: 1280px) {
    .footerbar-content {
      grid-template-areas: "footerbar-about footerbar-about" "footerbar-donate footerbar-store";
      grid-template-rows: min-content 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 2rem 1rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    .footerbar-content {
      padding: 1.5rem;
    }
  }

  @media only screen and (max-width: 720px) {
    .footerbar-content {
      grid-template-areas: "footerbar-about" "footerbar-donate" "footerbar-store";
      grid-template-rows: min-content min-content min-content;
      grid-template-columns: 1fr;
    }

    .footerbar-card-image {
      width: 64px !important;
    }
  }

  @media only screen and (max-width: 480px) {
    .footerbar-content {
      padding: 0.75rem;
    }

    .footerbar-logo {
      height: 48px !important;
    }
  }
}
</style>
