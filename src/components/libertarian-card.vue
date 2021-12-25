<script lang="ts" setup>
export type LibertarianCardTagsPropType = { label: string; to: { name: string } }[];

type LibertarianCardPropsType = {
  goTo?: { name: string };
  image?: string;
  tags?: LibertarianCardTagsPropType;
  isLoading?: boolean;
};

withDefaults(defineProps<LibertarianCardPropsType>(), {
  goTo: () => ({ name: "index" }),
  image: "",
  tags: () => [],
  isLoading: false,
});
</script>

<template>
  <div class="libertarian-card skeleton is-loading" v-if="isLoading">
    <div class="libertarian-card-tags">
      <span class="skeleton skeleton-text" v-for="index of 4" :key="index" />
    </div>
    <p class="libertarian-card-text">
      <span class="skeleton skeleton-text" v-for="index of 3" :key="index" />
    </p>
  </div>

  <div
    class="libertarian-card"
    :style="`--image: url(${image})`"
    title="Conferir conteúdo"
    @click="$router.push(goTo)"
    v-else
  >
    <div class="libertarian-card-tags" @click.stop>
      <template v-for="tag of tags">
        <nuxt-link class="libertarian-card-tag button is-primary is-libertarian" :to="tag.to">
          {{ tag.label }}
        </nuxt-link>
      </template>
    </div>
    <p class="libertarian-card-text">
      <slot name="default" />
    </p>
  </div>
</template>

<style lang="scss">
.libertarian-card {
  --height: 160px;
  --min-width: 180px;
  --background-position: top center;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-width: var(--min-width);
  height: var(--height);
  border-radius: 4px;
  cursor: pointer;
  background-image: var(--image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--background-position);

  // se --height for definido como unset a altura do carde sera a metade da largura
  aspect-ratio: 1 / 0.5;

  .libertarian-card-tags {
    display: flex;
    gap: 4px;
    margin: 0 4px 8px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .libertarian-card-tag {
      height: unset;
      padding: 4px 8px;
      border-radius: 2px;

      color: #fff;
      font-size: 13px;
      font-weight: 600;
      line-height: 13px;
      text-shadow: 2px 2px 2px #0003;
    }
  }

  .libertarian-card-text {
    padding: 12px;
    min-height: 4.5rem;
    background-color: #000a;

    color: #fff;
    font-size: 1rem;
    font-weight: 500;

    transition: all 0.2s;
  }

  &:hover {
    .libertarian-card-text {
      background-color: #000e;
    }
  }

  &.is-loading {
    --from-background-color: var(--primary-color);
    --to-background-color: var(--warning-color);

    .libertarian-card-tags {
      .skeleton-text {
        width: 100%;
        height: 1rem;
        border-radius: 2px;
      }
    }

    .libertarian-card-text {
      .skeleton-text {
        height: 0.65rem;

        + .skeleton-text {
          margin-top: 0.4rem;
        }
      }
    }
  }
}
</style>
