<script lang="ts" setup>
type AppbarDropdownItems = {
  videos: AppbarDropdownItem[];
  matter: AppbarDropdownItem[];
  schedule: AppbarDropdownItem[];
  about: AppbarDropdownItem[];
};

const appbarDropdownItems: AppbarDropdownItems = {
  videos: [{ label: "Teoria libertária" }, { label: "Visão libertária" }, { label: "Cômicos" }, { label: "Pesquisar" }],
  matter: [{ label: "Artigos" }, { label: "Tapas" }, { label: "Crônicas" }, { label: "Pesquisar" }],
  schedule: [{ label: "Últimas pautas" }, { label: "Pesquisar" }],
  about: [{ label: "Ajuda" }],
};
</script>

<template>
  <nav class="appbar-navbar navbar">
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"><i class="fas fa-home" /></a>

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

  .navbar-menu {
    .navbar-item {
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
