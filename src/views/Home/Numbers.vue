<script>
import Title from "@/views/Home/Title";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import SocialNav from "@/components/SocialNav";

export default {
  name: "HomeNumber",
  components: {
    "m-title": Title,
    "c-button": Button,
    "c-divider": Divider,
    "c-social-nav": SocialNav
  }
};
</script>

<template lang="html">
  <div class="home-numbers">
    <c-divider></c-divider>
    <m-title>Números</m-title>

    <c-social-nav vertical>
      <template #youtube>72000 Inscritos</template>
      <template #bitchute>1314 Inscritos</template>
      <template #facebook>4401 Inscritos</template>
      <template #minds>363 Inscritos</template>
      <template #twitter>8836 Inscritos</template>
      <template #gab>151 Inscritos</template>
    </c-social-nav>
  </div>
</template>

<style lang="css" scoped></style>
