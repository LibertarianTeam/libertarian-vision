<script lang="ts" setup>
type DropdownItem = {
  label?: string;
  href?: string;
  to?: { name: string; params?: { [key: string]: string }; query?: { [key: string]: string } };
  command?: () => void;
  isDivider?: boolean;
};

type DropdownProps = {
  id?: string;
  items: DropdownItem[];
};

withDefaults(defineProps<DropdownProps>(), { id: "dropdown-menu" });
</script>

<template>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" :aria-controls="id">
        <span><slot name="default" /></span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" :id="id" role="menu">
      <div class="dropdown-content">
        <template v-for="(item, index) of items" :key="index">
          <hr class="dropdown-divider" v-if="item.isDivider" />
          <a class="dropdown-item" :href="item.href" v-else-if="item.href">{{ item.label }}</a>
          <nuxt-link class="dropdown-item" :to="item.to" v-else-if="item.to">{{ item.label }}</nuxt-link>
          <a class="dropdown-item" v-else @click="item.command">{{ item.label }}</a>
        </template>
      </div>
    </div>
  </div>
</template>
