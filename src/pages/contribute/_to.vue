<script>
import GenerateMetaInfo from '~/plugins/vue-meta'

export default {
  name: 'Contribute',
  head: GenerateMetaInfo({
    page: {
      title: 'Contribuir'
    }
  })
}
</script>

<template lang="html">
  <main id="p-contribute">
    {{ $route.params }}
  </main>
</template>

<style lang="css" scoped></style>
