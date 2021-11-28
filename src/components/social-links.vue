<script lang="ts" setup>
// Links possivelmente desatualizados!
const socialLinks = [
  { title: "Youtube", icon: "fab fa-youtube", color: "#f00", link: "https://www.youtube.com/c/ANCAPSU" },
  { title: "Twitter", icon: "fab fa-twitter", color: "#1da1f2", link: "https://twitter.com/visaolibertaria" },
  { title: "Facebook", icon: "fab fa-facebook", color: "#1877f2", link: "https://www.facebook.com/visaolibertariafb" },
  { title: "Patreon", icon: "fab fa-patreon", color: "#f96854", link: "https://www.patreon.com/ancapsu" },
  { title: "Apoia", src: "/images/apoiase-icon.jpg", link: "https://apoia.se/ancapsu" },
];
</script>

<template>
  <nav class="social-links">
    <template v-for="(socialLink, index) of socialLinks" :key="index">
      <a
        :class="['social-link', socialLink.icon]"
        :style="{ '--color': socialLink.color }"
        :href="socialLink.link"
        :title="socialLink.title"
        target="blank"
        rel="nofollow"
        v-if="socialLink.icon"
      />
      <img class="social-link" :src="socialLink.src" :alt="socialLink.title" :title="socialLink.title" v-else />
    </template>
  </nav>
</template>

<style lang="scss">
.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--primary-color);

  a.social-link {
    color: var(--color);
    font-size: 1.25rem;
    line-height: 0;

    &.fa-facebook {
      font-size: 1.25rem;
    }
  }

  img.social-link {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
  }
}
</style>
