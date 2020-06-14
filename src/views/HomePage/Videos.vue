<script>
import Title from '~/components/Title'
import Carousel from '~/components/Carousel'

export default {
  name: 'HomeVDeos',
  components: {
    'c-title': Title,
    'c-carousel': Carousel
  },
  computed: {
    items() {
      return this.$store.state.video.list.map((video) => {
        video.to = {
          name: 'read-id',
          params: { read: video.category.name, id: video.id }
        }

        video.toTag = {
          name: 'category-filter',
          params: { category: video.category.name, filter: 'news' }
        }

        return video
      })
    }
  },
  mounted() {
    this.$store.dispatch('getVideoList')
  }
}
</script>

<template lang="html">
  <section class="v-home-videos">
    <c-title>Últimos Vídeos do Canal</c-title>
    <c-carousel :items="items"></c-carousel>
  </section>
</template>

<style lang="css" scoped>
.c-carousel {
  width: 100%;
  margin: 0 auto;
}
</style>
