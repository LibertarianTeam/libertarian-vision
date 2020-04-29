<script>
import Title from "@/views/Home/Title";
import SocialNav from "@/components/SocialNav";

export default {
  name: "HomeNumber",
  components: {
    "sc-title": Title,
    "gc-social-nav": SocialNav
  }
};
</script>

<template lang="html">
  <div class="sc-numbers">
    <sc-title>Números</sc-title>

    <gc-social-nav vertical>
      <template #youtube>72000 Inscritos</template>
      <template #visaolibertaria>8580 Inscritos</template>
      <template #bitchute>1314 Inscritos</template>
      <template #facebook>4401 Inscritos</template>
      <template #minds>363 Inscritos</template>
      <template #twitter>8836 Inscritos</template>
      <template #gab>151 Inscritos</template>
    </gc-social-nav>
  </div>
</template>

<style lang="css" scoped></style>
