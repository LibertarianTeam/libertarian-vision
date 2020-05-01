<script>
import Form from "@/components/Form";
import Input from "@/components/Input";
import Title from "@/components/Title";

export default {
  name: "HomeNewsletter",
  components: {
    "gc-form": Form,
    "gc-input": Input,
    "gc-title": Title
  }
};
</script>

<template lang="html">
  <div class="sc-newsletter">
    <gc-title>Newsletter do Canal</gc-title>
    <span>
      Registre seu email na Newsletter para ser avisado de novos vídeos!
    </span>

    <gc-form inline>
      <gc-input type="email" placeholder="seu@email.com" lazy></gc-input>
    </gc-form>
  </div>
</template>

<style lang="css" scoped>
.sc-newsletter {
  display: flex;
  flex-direction: column;
}

span {
  margin-bottom: 24px;
  font-size: 14px;
}
</style>
