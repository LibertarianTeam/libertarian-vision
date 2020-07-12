<script>
import Title from '~/components/Title'
import SocialNav from '~/components/SocialNav'

export default {
  name: 'HomeNumber',
  components: {
    'c-title': Title,
    'c-social-nav': SocialNav
  }
}
</script>

<template lang="html">
  <section class="v-home-numbers">
    <c-title>Números</c-title>

    <c-social-nav vertical>
      <template #visaolibertaria>97200 Inscritos</template>
      <template #youtube>13100 Inscritos</template>
      <template #twitter>13100 Seguidores</template>
      <template #facebook>6831 Seguidores</template>
      <template #bitchute>1924 Inscritos</template>
      <template #gab>642 Seguidores</template>
      <template #minds>445 Inscritos</template>
    </c-social-nav>
  </section>
</template>

<style lang="css" scoped></style>
