<script>
import Form from "@/components/Form";
import Input from "@/components/Input";
import Title from "@/views/Home/Title";

export default {
  name: "HomeNewsletter",
  components: {
    "gc-form": Form,
    "gc-input": Input,
    "sc-title": Title
  }
};
</script>

<template lang="html">
  <div class="sc-newsletter">
    <sc-title>Newsletter do Canal</sc-title>
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
