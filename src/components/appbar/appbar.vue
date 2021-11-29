<script lang="ts" setup></script>

<template>
  <header class="appbar">
    <social-links />

    <div class="appbar-center">
      <nuxt-link :to="{ name: 'index' }">
        <img class="appbar-logo" src="~/assets/images/logo.png" alt="Visão libertaria" />
      </nuxt-link>

      <div class="appbar-auth-options">
        <button class="button is-primary mr-2">Autenticar</button>
        <button class="button is-primary">Criar conta</button>
      </div>
    </div>

    <appbar-navbar />
  </header>
</template>

<style lang="scss">
.appbar {
  width: 100%;
  padding: 0.25rem 4rem;
  background: var(--primary-color) url("~/assets/images/appbar-background.svg") no-repeat 100%;

  .appbar-center {
    display: flex;
    align-items: center;
    padding: 1rem 0;

    .appbar-logo {
      height: 64px;
      user-select: none;
    }

    .appbar-auth-options {
      position: absolute;
      right: 50%;
      transform: translateX(-50%);

      .button {
        height: unset;
        padding: 4px 8px;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
}
</style>
