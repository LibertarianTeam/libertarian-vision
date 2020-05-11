<script>
import GenerateMetaInfo from "@/meta/info";

export default {
  name: "Category",
  meta: GenerateMetaInfo({
    page: {
      title: "Categorias"
    }
  })
};
</script>

<template lang="html">
  <main id="p-category">
    {{ $route.params }}
  </main>
</template>

<style lang="css" scoped></style>
