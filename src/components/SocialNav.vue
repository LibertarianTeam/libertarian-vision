<script>
import { mapGetters } from "vuex";
import Button from "@/components/Button";

export default {
  name: "SocialNav",
  components: {
    "c-button": Button
  },
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: ["Youtube", "Bitchute", "Facebook", "Minds", "Twitter", "Gab"]
    };
  },
  computed: {
    links() {
      return this.$store.state.static.links;
    },

    classSocialNav() {
      const { vertical } = this;
      return `social-nav${vertical ? " vertical" : ""}`;
    },

    ...mapGetters(["getAsset"])
  }
};
</script>

<template lang="html">
  <div :class="classSocialNav">
    <c-button
      v-for="(item, index) in items"
      :key="index"
      type="link"
      :title="item"
      :to="links[item.toLowerCase()]"
      icon
    >
      <img :src="getAsset(`icons/${item.toLowerCase()}.svg`)" :alt="item" />

      <h6 v-if="vertical">
        <slot :name="item.toLowerCase()"></slot>
      </h6>
    </c-button>
  </div>
</template>

<style lang="css" scoped>
.social-nav {
  text-align: center;
}

.vertical {
  display: inline-flex;
  flex-direction: column;

  width: 100%;
}

.button.icon + .button.icon {
  margin-left: 18px;
}

.vertical .button.icon {
  align-items: center;
  justify-content: flex-start;

  padding: 8px 0;
  border: 1px solid var(--primary);

  background-color: transparent;
}

.vertical .button.icon + .button.icon {
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

h6 {
  font: bold 12px menu;
}
</style>
