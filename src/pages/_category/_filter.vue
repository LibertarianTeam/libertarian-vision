<script>
import GenerateMetaInfo from '~/plugins/vue-meta'

export default {
  name: 'Category',
  head: GenerateMetaInfo({
    page: {
      title: 'Categorias'
    }
  })
}
</script>

<template lang="html">
  <main id="p-category">
    {{ $route.params }}
  </main>
</template>

<style lang="css" scoped></style>
