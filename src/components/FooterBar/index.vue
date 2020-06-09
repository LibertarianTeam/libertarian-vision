<script>
import About from './About'
import Store from './Store'
import Donation from './Donation'

export default {
  name: 'FooterBar',
  components: {
    'c-footer-bar-about': About,
    'c-footer-bar-store': Store,
    'c-footer-bar-donation': Donation
  }
}
</script>

<template lang="html">
  <footer class="v-footer-bar">
    <div class="content">
      <c-footer-bar-about></c-footer-bar-about>
      <c-footer-bar-donation></c-footer-bar-donation>
      <c-footer-bar-store></c-footer-bar-store>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.v-footer-bar {
  background: url('~assets/imgs/footer.png') no-repeat;
  background-size: cover;
}

.content {
  display: grid;

  grid-gap: 6px 18px;
  grid-template-areas: 'c-footer-bar-about c-footer-bar-donation c-footer-bar-store';
  grid-template-columns: repeat(3, 1fr);

  padding: 12px 48px;
  transition: background-color 0.4s linear;

  background-color: var(--sw-tertiary);
}

.v-footer-bar:hover .content {
  background-color: var(--bg-tertiary);
}

.c-footer-bar-about {
  grid-area: c-footer-bar-about;
}

.c-footer-bar-donation {
  grid-area: c-footer-bar-donation;
}

.c-footer-bar-store {
  grid-area: c-footer-bar-store;
}

@media only screen and (max-width: 1024px) {
  .content {
    grid-template-areas:
      'c-footer-bar-donation c-footer-bar-store'
      'c-footer-bar-about c-footer-bar-about';
    grid-template-columns: repeat(2, 1fr);
  }

  .c-footer-bar-about {
    margin-top: 24px;
  }
}

@media only screen and (max-width: 640px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-areas:
      'c-footer-bar-donation'
      'c-footer-bar-store'
      'c-footer-bar-about';

    padding: 12px;
  }

  .c-footer-bar-about {
    margin-top: 12px;
  }
}
</style>
