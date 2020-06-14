<script>
import GenerateMetaInfo from '~/plugins/vue-meta'

export default {
  name: 'Read',
  head: GenerateMetaInfo({
    page: {
      title: 'Leitura'
    }
  })
}
</script>

<template lang="html">
  <main id="p-read">
    {{ $route.params }}
  </main>
</template>

<style lang="css" scoped></style>
