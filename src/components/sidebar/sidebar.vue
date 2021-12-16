<script lang="ts" setup>
defineProps<{ isActive: boolean }>();
defineEmits<{ (e: "toggle", value?: boolean): void }>();

function handleLogout() {
  console.info("handleLogout");
}

const links = [
  { title: "Home", icon: "fas fa-home", to: { name: "index" } },
  { title: "Vídeos", icon: "fas fa-video", to: { name: "videos" } },
  { title: "Matérias", icon: "fas fa-newspaper", to: { name: "matters" } },
  { title: "Pautas", icon: "fas fa-tasks", to: { name: "schedules" } },
  { title: "Sobre", icon: "fas fa-question", to: { name: "about" } },
  { title: "Sair", icon: "fas fa-sign-out-alt", command: handleLogout },
];
</script>

<template>
  <aside :class="['sidebar', { 'is-active': isActive }]">
    <ul class="sidebar-content">
      <template v-for="(link, index) of links" :key="index">
        <li class="sidebar-item">
          <nuxt-link class="sidebar-item-link" :to="link.to" v-if="link.to">
            <span class="cool-border one" />
            <span class="cool-border two" />

            <i :class="['sidebar-icon', link.icon]" />
            <span class="sidebar-title">{{ link.title }}</span>
          </nuxt-link>
          <a class="sidebar-item-link" @click="link.command" v-else>
            <span class="cool-border one" />
            <span class="cool-border two" />

            <i :class="['sidebar-icon', link.icon]" />
            <span class="sidebar-title">{{ link.title }}</span>
          </a>
        </li>
      </template>
    </ul>
  </aside>
</template>

<style lang="scss">
.sidebar {
  position: relative;
  width: 52px;
  min-height: 100%;
  overflow: hidden auto;
  background-color: var(--primary-color);

  transition: width 0.5s;

  .sidebar-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 8px;

    .sidebar-item {
      position: relative;
      list-style: none;
      width: 100%;

      .sidebar-item-link {
        position: relative;
        display: flex;
        width: 100%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;

        color: #fff;
        text-decoration: none;

        .sidebar-icon {
          position: relative;
          display: block;
          min-width: 36px;
          height: 36px;
          line-height: 36px;

          font-size: 1.25rem;
          text-align: center;
        }

        .sidebar-title {
          position: relative;
          display: block;
          padding-left: 8px;
          height: 36px;

          font-weight: 600;
          line-height: 36px;
          white-space: normal;
        }

        .cool-border {
          position: absolute;
          display: none;
          width: 100%;
          height: 6px;
          background-color: #fff;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--primary-color);
          }

          &.one {
            top: -6px;

            &::before {
              border-bottom-right-radius: 6px;
            }
          }

          &.two {
            bottom: -6px;

            &::before {
              border-top-right-radius: 6px;
            }
          }
        }

        &.router-link-exact-active {
          color: #333;
          background-color: #fff;

          .cool-border {
            display: block;
          }
        }
      }

      + .sidebar-item {
        padding-top: 0.5rem;
      }
    }
  }

  &.is-active {
    width: 180px;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
