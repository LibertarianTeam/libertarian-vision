<script lang="ts" setup>
type SocialLinksProps = { itemStyle?: "short" | "long" };

withDefaults(defineProps<SocialLinksProps>(), { itemStyle: "short" });

// Links possivelmente desatualizados!
const socialLinks = [
  { title: "Youtube", icon: "fab fa-youtube", link: "https://www.youtube.com/c/ANCAPSU", number: 364000 },
  { title: "Twitter", icon: "fab fa-twitter", link: "https://twitter.com/visaolibertaria", number: 28230 },
  { title: "Facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/visaolibertariafb", number: 6500 },
  { title: "Minds", src: "/images/minds-icon.svg", link: "https://www.minds.com/ancapsu", number: 363 },
  { title: "Gab", src: "/images/gab-icon.svg", link: "https://gab.com/ancapsu", number: 454 },
  { title: "Patreon", icon: "fab fa-patreon", link: "https://www.patreon.com/ancapsu", number: 25 },
];
</script>

<template>
  <nav :class="['social-links', itemStyle]">
    <template v-for="socialLink of socialLinks">
      <a
        :class="['social-link', socialLink.icon]"
        :href="socialLink.link"
        :title="socialLink.title"
        target="blank"
        rel="nofollow"
      >
        <img :src="socialLink.src" :alt="socialLink.title" v-if="socialLink.src" />
        <span v-if="itemStyle === 'long'">{{ socialLink.number }} inscritos</span>
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

  &.long {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      width: 100%;
      height: 34px;
      border: 1px solid var(--primary-color);
      border-radius: 2px;

      line-height: 1rem;

      span {
        word-spacing: 0.25rem;
        font-family: var(--font-family) !important;
        font-size: 0.75rem;
        font-weight: 600;
      }
    }
  }
}
</style>
