<script>
import Form from '~/components/Form'
import Input from '~/components/Input'
import Title from '~/components/Title'

export default {
  name: 'HomeNewsletter',
  components: {
    'c-form': Form,
    'c-input': Input,
    'c-title': Title
  }
}
</script>

<template lang="html">
  <section class="v-home-newsletter">
    <c-title>Newsletter do Canal</c-title>
    <span class="subtitle">
      Registre seu email na Newsletter para ser avisado de novos vídeos!
    </span>

    <c-form inline>
      <c-input type="email" placeholder="seu@email.com" lazy></c-input>
    </c-form>
  </section>
</template>

<style lang="css" scoped>
.v-home-newsletter {
  display: flex;
  flex-direction: column;
}

.v-home-newsletter .subtitle {
  margin-bottom: 24px;
  font-size: 0.9rem;
}

@media only screen and (max-width: 480px) {
  .v-home-newsletter .subtitle {
    margin: 0 6px 6px;
    text-align: justify;
  }
}
</style>
