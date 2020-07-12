<script>
import Card from '~/components/Card'
import Title from '~/components/Title'

export default {
  name: 'HomeNews',
  components: {
    'c-card': Card,
    'c-title': Title
  },
  computed: {
    articles() {
      return this.$store.state.article.list.map((article) => {
        article.to = {
          name: 'read-id',
          params: { read: article.category.name, id: article.id }
        }

        article.tags = article.category.slice(1, 4).map((tag) => {
          tag.to = {
            name: 'category-filter',
            params: { category: 'article', filter: tag.name }
          }

          return tag
        })

        return article
      })
    },
    skeleton() {
      return this.articles.length === 0
    }
  },
  mounted() {
    this.$store.dispatch('getArticleList')
  }
}
</script>

<template lang="html">
  <section class="v-home-news">
    <c-title>Últimas Notícias Veiculadas</c-title>

    <div class="news">
      <template v-if="skeleton">
        <c-card v-for="index in 12" :key="index" skeleton compact></c-card>
      </template>
      <template v-else>
        <c-card
          v-for="(article, index) of articles"
          :key="index"
          :tags="article.tags"
          :img="article.image"
          compact
        >
          <h4 class="title" v-text="article.title"></h4>
        </c-card>
      </template>
    </div>
  </section>
</template>

<style lang="css" scoped>
.v-home-news .news {
  display: grid;

  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
}

.v-home-news .news .c-card {
  width: 100%;
}

@media only screen and (max-width: 1024px) {
  .v-home-news .news {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 640px) {
  .v-home-news .news {
    grid-template-columns: auto;
  }
}
</style>
