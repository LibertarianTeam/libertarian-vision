<script>
import GenerateMetaInfo from '@/plugins/vue-meta'

import Help from '@/views/HomePage/Help'
import News from '@/views/HomePage/News'
import Funnel from '@/views/HomePage/Funnel'
import Videos from '@/views/HomePage/Videos'
import Numbers from '@/views/HomePage/Numbers'
import Newsletter from '@/views/HomePage/Newsletter'

export default {
  name: 'Home',
  components: {
    'v-help': Help,
    'v-news': News,
    'v-funnel': Funnel,
    'v-videos': Videos,
    'v-numbers': Numbers,
    'v-newsletter': Newsletter
  },
  head: GenerateMetaInfo({
    page: {
      title: 'Home'
    }
  })
}
</script>

<template>
  <main id="p-home">
    <v-newsletter></v-newsletter>
    <v-funnel></v-funnel>
    <v-videos></v-videos>
    <v-help></v-help>
    <v-news></v-news>
    <v-numbers></v-numbers>
  </main>
</template>

<style lang="css" scoped>
#p-home {
  display: grid;

  grid-gap: 24px 12px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    'v-newsletter v-newsletter v-newsletter v-funnel v-funnel v-funnel'
    'v-videos v-videos v-videos v-videos v-videos v-videos'
    'v-help v-help v-news v-news v-news v-news'
    'v-numbers v-numbers v-news v-news v-news v-news';
}

.v-newsletter {
  grid-area: v-newsletter;
}

.v-funnel {
  grid-area: v-funnel;
}

.v-videos {
  grid-area: v-videos;
}

.v-help {
  grid-area: v-help;
}

.v-news {
  grid-area: v-news;
}

.v-numbers {
  grid-area: v-numbers;
}

@media only screen and (max-width: 1366px) {
  #p-home {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'v-newsletter v-funnel'
      'v-videos v-videos'
      'v-news v-news'
      'v-numbers v-help';
  }
}

@media only screen and (max-width: 800px) {
  #p-home {
    grid-template-areas:
      'v-newsletter v-newsletter'
      'v-funnel v-funnel'
      'v-videos v-videos'
      'v-news v-news'
      'v-numbers v-numbers'
      'v-help v-help';
  }
}
</style>
