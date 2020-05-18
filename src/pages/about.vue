<script>
import GenerateMetaInfo from '@/plugins/vue-meta'

export default {
  name: 'About',
  head: GenerateMetaInfo({
    page: {
      title: 'Sobre'
    }
  })
}
</script>

<template lang="html">
  <main id="p-about">
    About
  </main>
</template>

<style lang="css" scoped></style>
