<script>
import Card from '~/components/Card'
import Title from '~/components/Title'

export default {
  name: 'HomeContribute',
  components: {
    'c-card': Card,
    'c-title': Title
  },
  data: () => ({
    cards: [
      { title: 'Sugerir Noticia', to: 'news', image: 'news.png' },
      { title: 'Escrever Matéria', to: 'article', image: 'typewriter.png' },
      { title: 'Traduzir Matéria', to: 'translate', image: 'glasses.png' },
      { title: 'Narrar Matéria', to: 'narrate', image: 'mic.png' }
    ]
  })
}
</script>

<template lang="html">
  <section class="v-home-contribute">
    <c-title>Quer Ajudar?</c-title>

    <div class="cards">
      <c-card
        v-for="(card, index) of $data.cards"
        :key="index"
        :to="{ name: 'contribute-to', params: { to: card.to } }"
        :img="`imgs/${card.image}`"
        transparent
      >
        <h5 class="title" v-text="card.title"></h5>
      </c-card>
    </div>
  </section>
</template>

<style lang="css" scoped>
.v-home-contribute .cards {
  display: inline-flex;
  width: 100%;
}

.v-home-contribute .cards .c-card {
  align-items: flex-start;

  width: 120px;
  height: 240px;
}

.v-home-contribute .cards .c-card .title {
  transition: color 0.4s;

  color: var(--text-tertiary);
  font-size: 1.3rem;
  font-weight: bolder;
}

.v-home-contribute .cards .c-card:hover .title {
  color: var(--text-secondary);
}

.v-home-contribute .cards .c-card + .c-card {
  margin-left: 6px;
}

@media only screen and (max-width: 800px) {
  .v-home-contribute .cards {
    justify-content: center;
  }

  .v-home-contribute .cards .c-card {
    width: 100%;
  }
}

@media only screen and (max-width: 480px) {
  .v-home-contribute .cards {
    align-items: center;
    flex-direction: column;
  }

  .v-home-contribute .cards .c-card {
    height: 160px;
    background-position: center;
  }

  .v-home-contribute .cards .c-card + .c-card {
    margin: 8px 0 0;
  }
}
</style>
