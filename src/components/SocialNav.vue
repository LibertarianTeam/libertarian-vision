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
    },
    invertColor: {
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
      target="_blank"
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

.button {
  display: inline-flex;
}

.button + .button {
  margin-left: 18px;
}

.vertical .button {
  align-items: center;
  justify-content: flex-start;

  padding: 8px 0;
  border: 1px solid var(--primary);

  transition: opacity 0.2s;

  background-color: transparent;
}

.vertical .button:hover {
  opacity: 72%;
}

.vertical .button + .button {
  margin-top: 8px;
  margin-left: 0;
}

img {
  width: 18px;
  height: 18px;

  padding: 1px;
  cursor: pointer;

  box-sizing: content-box;
}

.vertical img {
  padding: 0 8px;
}

h6 {
  font-size: 12px;
  font-weight: bold;
}

@media only screen and (max-width: 480px) {
  .social-nav {
    padding-left: 14px;
    text-align: left;
  }
}
</style>
