<script>
import Title from "@/components/Title";
import SocialNav from "@/components/SocialNav";

export default {
  name: "HomeNumber",
  components: {
    "c-title": Title,
    "c-social-nav": SocialNav
  }
};
</script>

<template lang="html">
  <div class="s-numbers">
    <c-title>Números</c-title>

    <c-social-nav vertical>
      <template #youtube>72000 Inscritos</template>
      <template #visaolibertaria>8580 Inscritos</template>
      <template #bitchute>1314 Inscritos</template>
      <template #facebook>4401 Inscritos</template>
      <template #minds>363 Inscritos</template>
      <template #twitter>8836 Inscritos</template>
      <template #gab>151 Inscritos</template>
    </c-social-nav>
  </div>
</template>

<style lang="css" scoped></style>
