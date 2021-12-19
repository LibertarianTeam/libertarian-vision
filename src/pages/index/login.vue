<script lang="ts" setup>
useMeta({ title: "Login | Visão libertária" });

const router = useRouter();

function generateForm() {
  return { email: "", password: "" };
}

const form = reactive(generateForm());
const loading = ref(false);

function handleClose() {
  router.back();
}

function handleLogin() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    console.info(form);
  }, 2000);
}
</script>

<template>
  <div class="modal is-active" id="login-page">
    <div class="modal-background" @click="handleClose" />

    <form class="modal-card" @submit.prevent="handleLogin">
      <header class="modal-card-head">
        <p class="modal-card-title">Faça login</p>
        <button class="delete" aria-label="close" type="button" @click="handleClose" />
      </header>

      <section class="modal-card-body">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" v-model="form.email" type="email" autocomplete="email" placeholder="seu@email.com" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope" />
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              v-model="form.password"
              type="password"
              autocomplete="current-password"
              placeholder="Senha"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock" />
            </span>
          </p>
        </div>
      </section>

      <footer class="modal-card-foot">
        <button class="button is-danger" type="button" @click="handleClose">Cancelar</button>
        <button :class="['button is-success', { 'is-loading': loading }]" type="submit">Entrar</button>
      </footer>
    </form>
  </div>
</template>

<style lang="scss">
#login-page {
  .modal-card {
    width: 100%;
    max-width: 20rem;

    .modal-card-foot {
      .button {
        width: 100%;
        max-width: 98px;
      }
    }
  }
}
</style>
