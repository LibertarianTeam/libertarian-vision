<script lang="ts" setup>
defineEmits<{ (e: "toggle:sidebar", value?: boolean): void }>();
</script>

<template>
  <header class="appbar">
    <social-links />

    <div class="appbar-center">
      <nuxt-link :to="{ name: 'index' }">
        <img class="appbar-logo" src="~/assets/images/logo.png" alt="Visão libertaria" />
      </nuxt-link>

      <div class="appbar-auth-options">
        <nuxt-link class="button is-primary mr-2" :to="{ name: 'index' }">Autenticar</nuxt-link>
        <nuxt-link class="button is-primary" :to="{ name: 'index' }">Criar conta</nuxt-link>
      </div>
    </div>

    <appbar-navbar @toggle:sidebar="$emit('toggle:sidebar')" />
  </header>
</template>

<style lang="scss">
.appbar {
  width: 100%;
  padding: 0.25rem 4rem 0;
  background: var(--primary-color) url("~/assets/images/appbar-background.svg") no-repeat 100%;

  .appbar-center {
    display: flex;
    align-items: center;
    position: relative;
    padding: 1rem 0;

    .appbar-logo {
      height: 64px;
      user-select: none;
    }

    .appbar-auth-options {
      position: absolute;
      right: 48vw;
      transform: translateX(-50%);

      .button {
        height: unset;
        padding: 0.25rem 0.5rem;
        border: 1px solid var(--primary-text-color);
        border-radius: 2px;
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1rem;
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .appbar-center {
      .appbar-logo {
        height: 48px;
      }

      .appbar-auth-options {
        transform: translateX(-5%);
      }
    }
  }

  @media only screen and (max-width: 1023px) {
    .appbar-center {
      padding-bottom: 3.5rem;

      .appbar-auth-options {
        bottom: 1rem;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    padding: 0.25rem 2rem 0rem;
    background-position: 130%;

    .appbar-center {
      padding-bottom: 3.75rem;

      .appbar-auth-options {
        left: 0;
        right: unset;
        transform: unset;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 0.25rem 1rem 0rem;
    background: var(--primary-color);

    .appbar-center {
      padding-bottom: 3.5rem;

      .appbar-logo {
        height: 36px;
      }

      .appbar-auth-options {
        min-width: max-content;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
