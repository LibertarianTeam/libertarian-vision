<script>
import metaInfo from '~/plugins/vue-meta'

import News from '~/views/Home/News'
import Funnel from '~/views/Home/Funnel'
import Videos from '~/views/Home/Videos'
import Numbers from '~/views/Home/Numbers'
import Contribute from '~/views/Home/Contribute'
import Newsletter from '~/views/Home/Newsletter'

export default {
  name: 'Home',
  components: {
    'v-home-news': News,
    'v-home-funnel': Funnel,
    'v-home-videos': Videos,
    'v-home-numbers': Numbers,
    'v-home-contribute': Contribute,
    'v-home-newsletter': Newsletter
  },
  head: metaInfo({
    page: {
      title: 'Home'
    }
  })
}
</script>

<template>
  <main id="p-home">
    <v-home-newsletter></v-home-newsletter>
    <v-home-funnel></v-home-funnel>
    <v-home-videos></v-home-videos>
    <v-home-contribute></v-home-contribute>
    <v-home-news></v-home-news>
    <v-home-numbers></v-home-numbers>
  </main>
</template>

<style lang="css" scoped>
#p-home {
  display: grid;

  grid-gap: 24px 12px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    'v-home-newsletter v-home-newsletter v-home-newsletter v-home-funnel v-home-funnel v-home-funnel'
    'v-home-videos v-home-videos v-home-videos v-home-videos v-home-videos v-home-videos'
    'v-home-contribute v-home-contribute v-home-news v-home-news v-home-news v-home-news'
    'v-home-numbers v-home-numbers v-home-news v-home-news v-home-news v-home-news';
}

.v-home-newsletter {
  grid-area: v-home-newsletter;
}

.v-home-funnel {
  grid-area: v-home-funnel;
}

.v-home-videos {
  grid-area: v-home-videos;
}

.v-home-contribute {
  grid-area: v-home-contribute;
}

.v-home-news {
  grid-area: v-home-news;
}

.v-home-numbers {
  grid-area: v-home-numbers;
}

@media only screen and (max-width: 1366px) {
  #p-home {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'v-home-newsletter v-home-funnel'
      'v-home-videos v-home-videos'
      'v-home-news v-home-news'
      'v-home-numbers v-home-contribute';
  }
}

@media only screen and (max-width: 800px) {
  #p-home {
    grid-template-areas:
      'v-home-newsletter v-home-newsletter'
      'v-home-funnel v-home-funnel'
      'v-home-videos v-home-videos'
      'v-home-news v-home-news'
      'v-home-numbers v-home-numbers'
      'v-home-contribute v-home-contribute';
  }
}
</style>
