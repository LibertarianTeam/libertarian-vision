<script lang="ts" setup>
export type TLibertarianCardTagsProp = { label: string; to: { name: string } }[];
type TLibertarianCardProps = { goTo: { name: string }; image: string; tags?: TLibertarianCardTagsProp };

withDefaults(defineProps<TLibertarianCardProps>(), { tags: () => [] });
</script>

<template>
  <div class="libertarian-card" :style="`--image: url(${image})`" title="Conferir conteúdo" @click="$router.push(goTo)">
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
  --min-width: 240px;
  --background-position: center;

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
    background-color: #0006;

    color: #fff;
    font-size: 1rem;
    font-weight: 500;

    transition: all 0.2s;
  }

  &:hover {
    .libertarian-card-text {
      background-color: #000a;
    }
  }
}
</style>
