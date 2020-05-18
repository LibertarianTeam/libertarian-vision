<script>
import Help from '@/views/FooterBar/Help'
import About from '@/views/FooterBar/About'
import Store from '@/views/FooterBar/Store'

export default {
  name: 'FooterBar',
  components: {
    'v-help': Help,
    'v-about': About,
    'v-store': Store
  }
}
</script>

<template lang="html">
  <footer class="v-footer-bar">
    <div class="content">
      <v-about></v-about>
      <v-help></v-help>
      <v-store></v-store>
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

  grid-gap: 6px 12px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'v-about v-help v-store';

  padding: 12px 24px;

  transition: background-color 0.4s linear;
  background-color: var(--bx-tertiary);
}

.v-footer-bar:hover .content {
  background-color: var(--bd-primary);
}

.v-help {
  grid-area: v-help;
}

.v-about {
  grid-area: v-about;
}

.v-store {
  grid-area: v-store;
}

@media only screen and (max-width: 1024px) {
  .content {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'v-help v-store' 'v-about v-about';
  }

  .v-about {
    margin-top: 24px;
  }
}

@media only screen and (max-width: 640px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-areas: 'v-help' 'v-store' 'v-about';

    padding: 12px;
  }

  .v-about {
    margin-top: 12px;
  }
}
</style>
