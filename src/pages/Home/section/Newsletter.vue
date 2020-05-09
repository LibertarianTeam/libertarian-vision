<script>
import Form from "@/components/Form";
import Input from "@/components/Input";
import Title from "@/components/Title";

export default {
  name: "HomeNewsletter",
  components: {
    "c-form": Form,
    "c-input": Input,
    "c-title": Title
  }
};
</script>

<template lang="html">
  <div class="s-newsletter">
    <c-title>Newsletter do Canal</c-title>
    <span>
      Registre seu email na Newsletter para ser avisado de novos vídeos!
    </span>

    <c-form inline>
      <c-input type="email" placeholder="seu@email.com" lazy></c-input>
    </c-form>
  </div>
</template>

<style lang="css" scoped>
.s-newsletter {
  display: flex;
  flex-direction: column;
}

span {
  margin-bottom: 24px;
  font-size: 14px;
}
</style>
