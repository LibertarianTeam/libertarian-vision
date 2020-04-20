<script>
export default {
  name: "SocialNav",
  computed: {
    links() {
      return this.$store.state.static.links;
    }
  }
};
</script>

<template lang="html">
  <div class="social-nav">
    <a :href="links.youtube" target="_blank" title="Youtube">
      <img src="@/assets/icons/youtube.svg" alt="Youtube" />
    </a>

    <a :href="links.bitchute" target="_blank" title="Bitchute">
      <img src="@/assets/icons/bitchute.svg" alt="Bitchute" />
    </a>

    <a :href="links.facebook" target="_blank" title="Facebook">
      <img src="@/assets/icons/facebook.svg" alt="Facebook" />
    </a>

    <a :href="links.minds" target="_blank" title="Minds">
      <img src="@/assets/icons/minds.svg" alt="Minds" />
    </a>

    <a :href="links.twitter" target="_blank" title="Twitter">
      <img src="@/assets/icons/twitter.svg" alt="Twitter" />
    </a>

    <a :href="links.gab" target="_blank" title="Gab">
      <img src="@/assets/icons/gab.svg" alt="Gab" />
    </a>
  </div>
</template>

<style lang="css" scoped>
.social-nav {
  text-align: center;
}

a {
  display: inline-flex;
}

a + a {
  margin-left: 18px;
}

img {
  width: 18px;
  height: 18px;

  padding: 1px;
  cursor: pointer;

  box-sizing: content-box;
}

a:hover img {
  filter: opacity(72%);
  transition: filter 0.2s;
}

@media only screen and (max-width: 480px) {
  .social-nav {
    padding-left: 14px;
    text-align: left;
  }
}
</style>
