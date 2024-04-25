<script lang="ts" setup>
import type { AppbarDropdownItem } from "@/components/appbar/dropdown.vue";

defineEmits<{ (e: "toggle:sidebar", value?: boolean): void }>();

export type AppbarDropdownItems = {
  videos: AppbarDropdownItem[];
  matter: AppbarDropdownItem[];
  schedule: AppbarDropdownItem[];
  about: AppbarDropdownItem[];
};

const appbarDropdownItems: AppbarDropdownItems = {
  videos: [
    { label: "Teoria libertária" },
    { label: "Visão libertária" },
    { label: "Cômicos" },
    { label: "Pesquisar", to: { name: "videos" } },
  ],
  matter: [
    { label: "Artigos" },
    { label: "Tapas" },
    { label: "Crônicas" },
    { label: "Pesquisar", to: { name: "matters" } },
  ],
  schedule: [{ label: "Últimas pautas" }, { label: "Pesquisar", to: { name: "schedules" } }],
  about: [{ label: "Ajuda", to: { name: "about" } }],
};
</script>

<template>
  <nav class="appbar-navbar navbar">
    <a
      class="navbar-burger"
      role="button"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbar-menu"
      @click="$emit('toggle:sidebar')"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>

    <div class="navbar-menu" id="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" :to="{ name: 'index' }"><i class="fas fa-home" /></nuxt-link>

        <appbar-dropdown :items="appbarDropdownItems.videos">Vídeos</appbar-dropdown>
        <appbar-dropdown :items="appbarDropdownItems.matter">Matérias</appbar-dropdown>
        <appbar-dropdown :items="appbarDropdownItems.schedule">Pautas</appbar-dropdown>
        <appbar-dropdown :items="appbarDropdownItems.about">Sobre</appbar-dropdown>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.appbar-navbar {
  width: 100%;
  min-height: unset;
  background-color: transparent;

  .navbar-burger {
    position: absolute;
    right: 0;
    bottom: 1rem;
    width: 28px;
    height: 28px;
    border: 1px solid #000;
    border-radius: 3px;
    color: var(--primary-text-color);
    background-color: var(--primary-color);
    transition: all 0.2s !important;

    span {
      height: 2px;
    }

    &:hover {
      filter: brightness(92%);
    }
  }

  .navbar-menu {
    .navbar-item {
      color: var(--primary-text-color);
      background-color: var(--primary-color) !important;

      &:hover {
        filter: brightness(96%);
        color: var(--primary-text-color);
        background-color: var(--primary-color) !important;
      }
    }

    .navbar-start {
      align-items: center;
    }

    .fa-home {
      font-size: 1.25rem;
    }
  }
}
</style>
