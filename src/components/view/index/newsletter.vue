<script lang="ts" setup>
const email = ref("");
const loading = ref(false);

function handleSubmit() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    console.info(email.value);
  }, 2000);
}
</script>

<template>
  <section class="index-section" id="view-index-newsletter">
    <h4 class="index-section-title">Newsletter do Canal</h4>
    <p class="newsletter-message">Registre seu email na Newsletter para ser avisado de novos vídeos!</p>

    <form class="newsletter-form field has-addons" @submit.prevent="handleSubmit">
      <div class="newsletter-form-email control has-icons-left">
        <input class="input" v-model="email" type="email" autocomplete="email" placeholder="seu@email.com" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope" />
        </span>
      </div>
      <div class="control">
        <button class="button is-primary is-libertarian" type="submit">Cadastrar</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss">
#view-index-newsletter {
  .newsletter-message {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .newsletter-form {
    .newsletter-form-email {
      width: 100%;
      max-width: 480px;
    }
  }
}
</style>
