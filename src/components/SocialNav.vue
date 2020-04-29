<script>
import Button from "@/components/Button";
import { getAsset, buildClass } from "@/utils";

export default {
  name: "SocialNav",
  components: {
    "gc-button": Button
  },
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [
        "Youtube",
        "VisaoLibertaria",
        "Bitchute",
        "Facebook",
        "Minds",
        "Twitter",
        "Gab"
      ]
    };
  },
  computed: {
    links() {
      return this.$store.state.static.links;
    },
    classSocialNav() {
      return buildClass("gc-social-nav", ["vertical", "invert"], this.$props);
    }
  },
  methods: {
    getAsset
  }
};
</script>

<template lang="html">
  <div :class="classSocialNav">
    <gc-button
      v-for="(item, index) in items"
      :key="index"
      :title="item"
      :to="links[item.toLowerCase()]"
      icon
    >
      <img :alt="item" :src="getAsset(`icons/${item.toLowerCase()}.svg`)" />

      <h6 v-if="vertical">
        <slot :name="item.toLowerCase()"></slot>
      </h6>
    </gc-button>
  </div>
</template>

<style lang="css" scoped>
.gc-social-nav {
  text-align: center;
}

.vertical {
  display: inline-flex;
  flex-direction: column;

  width: 100%;
}

.gc-button.icon + .gc-button.icon {
  margin-left: 18px;
}

.vertical .gc-button.icon {
  align-items: center;
  justify-content: flex-start;

  padding: 8px 0;
  border: 1px solid var(--primary);

  background-color: transparent;
}

.vertical .gc-button.icon + .gc-button.icon {
  margin: 6px 0 0;
}

img {
  width: 18px;
  height: 18px;

  padding: 1px;
  box-sizing: content-box;
}

.vertical img {
  padding: 0 8px;
}

.invert img {
  filter: invert(100%);
}

h6 {
  font: bold 12px menu;
}
</style>
