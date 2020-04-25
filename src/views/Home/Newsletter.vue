<script>
import Form from "@/components/Form";
import Input from "@/components/Input";
import Title from "@/views/Home/Title";

export default {
  name: "HomeNewsletter",
  components: {
    "c-form": Form,
    "c-input": Input,
    "m-title": Title
  }
};
</script>

<template lang="html">
  <div class="home-newsletter">
    <m-title>Newsletter do Canal</m-title>
    <span>
      Registre seu email na Newsletter para ser avisado de novos vídeos!
    </span>

    <c-form inline>
      <c-input type="email" placeholder="seu@email.com" lazy></c-input>
    </c-form>
  </div>
</template>

<style lang="css" scoped>
.home-newsletter {
  display: flex;
  flex-direction: column;
}

span {
  margin-bottom: 24px;
  font-size: 14px;
}
</style>
