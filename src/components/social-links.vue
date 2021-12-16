<script lang="ts" setup>
// Links possivelmente desatualizados!
const socialLinks = [
  { title: "Youtube", icon: "fab fa-youtube", link: "https://www.youtube.com/c/ANCAPSU" },
  { title: "Twitter", icon: "fab fa-twitter", link: "https://twitter.com/visaolibertaria" },
  { title: "Facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/visaolibertariafb" },
  { title: "Minds", src: "/images/minds-icon.svg", link: "https://www.minds.com/ancapsu" },
  { title: "Gab", src: "/images/gab-icon.svg", link: "https://gab.com/ancapsu" },
  { title: "Patreon", icon: "fab fa-patreon", link: "https://www.patreon.com/ancapsu" },
];
</script>

<template>
  <nav class="social-links">
    <template v-for="(socialLink, index) of socialLinks" :key="index">
      <a
        :class="['social-link', socialLink.icon]"
        :href="socialLink.link"
        :title="socialLink.title"
        target="blank"
        rel="nofollow"
      >
        <img :src="socialLink.src" :alt="socialLink.title" v-if="socialLink.src" />
      </a>
    </template>
  </nav>
</template>

<style lang="scss">
.social-links {
  --invert: invert(0);
  --color: var(--primary-text-color);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;

  .social-link {
    color: var(--color);
    font-size: 1.125rem;
    line-height: 0;

    img {
      width: 1.275rem;
      height: 1.275rem;
      border-radius: 50%;
      filter: var(--invert);
    }

    &.fa-facebook {
      font-size: 1.175rem;
    }

    &:hover {
      filter: opacity(80%);
    }
  }
}
</style>
