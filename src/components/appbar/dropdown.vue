<script lang="ts" setup>
export type AppbarDropdownItem = {
  label?: string;
  href?: string;
  to?: { name: string; params?: { [key: string]: string }; query?: { [key: string]: string } };
  command?: () => void;
  isDivider?: boolean;
};

type AppbarDropdownProps = {
  id?: string;
  items: AppbarDropdownItem[];
};

withDefaults(defineProps<AppbarDropdownProps>(), { id: "navbar-dropdown" });
</script>

<template>
  <div class="appbar-dropdown navbar-item has-dropdown is-hoverable">
    <a class="navbar-link"><slot name="default" /></a>

    <div class="navbar-dropdown">
      <template v-for="(item, index) of items" :key="index">
        <hr class="navbar-divider" v-if="item.isDivider" />
        <a class="navbar-item" :href="item.href" v-else-if="item.href">{{ item.label }}</a>
        <nuxt-link class="navbar-item" :to="item.to" v-else-if="item.to">{{ item.label }}</nuxt-link>
        <a class="navbar-item" v-else @click="item.command">{{ item.label }}</a>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.appbar-dropdown {
  position: relative;
  transition: all 0.2s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    margin: 0 auto;
    border-radius: 4px;
    transition: width 0.2s;
    background-color: #333;
  }

  .navbar-link {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 4px;
    color: var(--primary-text-color);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;

    &::after {
      display: none;
    }
  }

  .navbar-dropdown {
    display: none !important;
    min-width: 160px;
    padding: 0;
    border-color: transparent;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: #0000001f 0px 1px 3px, #0000003d 0px 1px 2px;
    background-color: var(--primary-color);

    .navbar-item {
      padding: 0.575rem 1rem;
      border: 1px solid #666;
      border-radius: 2px;
      transition: all 0.2s !important;
      color: var(--primary-text-color);
      font-weight: 500;

      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &:hover {
        border-color: transparent;
      }
    }

    .navbar-divider {
      margin: 0.25rem 0;
      background-color: #333;
    }
  }

  &:hover {
    &::after {
      width: 100%;
    }

    .navbar-dropdown {
      display: block !important;
    }

    .navbar-link {
      filter: brightness(99%);
      color: var(--primary-text-color);
      background-color: var(--primary-color) !important;
    }
  }
}
</style>
