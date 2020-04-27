<script>
import { mapGetters } from "vuex";
import Button from "@/components/Button";

export default {
  name: "Card",
  components: {
    "c-button": Button
  },
  props: {
    tag: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: "icons/broken-image.svg"
    },
    externalImg: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: true
    },
    compact: {
      type: Boolean,
      default: false
    },
    centerBG: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    title() {
      return this.$attrs.title || "";
    },

    imgURL() {
      const { img, externalImg } = this;
      const imgURL = externalImg ? img : this.getAsset(img);

      return { backgroundImage: `url("${imgURL}")` };
    },

    classCard() {
      const { dark, compact, centerBG } = this;
      return `card${compact ? " compact" : ""}${dark ? " dark" : ""}${
        centerBG ? " center-bg" : ""
      }`;
    },

    ...mapGetters(["getAsset"])
  }
};
</script>

<template lang="html">
  <div :class="classCard" :style="imgURL">
    <div class="content">
      <c-button v-if="tag" class="tag" type="link" :to="{ name: 'Home' }">
        {{ tag }}
      </c-button>

      <c-button class="title" type="link" :to="{ name: 'Home' }" :title="title">
        <h5>
          <slot name="default"></slot>
        </h5>
      </c-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  display: flex;

  align-items: flex-end;
  justify-content: center;

  width: 260px;
  height: 360px;

  border-radius: 8px;
  transition: box-shadow 0.2s;

  box-shadow: 0 0 8px 2px var(--bx-primary);

  background: var(--primary) no-repeat;
  background-size: cover;
}

.card:hover {
  box-shadow: 0 0 16px 2px var(--bx-tertiary);
}

.center-bg {
  background-position: center;
}

.compact {
  height: 220px;
  overflow: hidden;
}

.content {
  width: 100%;
}

.tag {
  margin: 8px;

  border-radius: 4px;
  text-shadow: 2px 2px 2px var(--bx-secondary);

  font: normal bold 14px caption;
  color: var(--text-secondary);
}

.title {
  width: 100%;

  padding: 8px 12px;
  border: none;

  text-align: left;
  transition: background-color 0.4s;

  background-color: transparent;
}

h5 {
  font: bold 22px caption;
  color: var(--text-secondary);

  text-shadow: 2px 2px 8px var(--bx-tertiary);
}

.compact .title {
  padding: 6px 8px;
  background-color: var(--bx-secondary);
}

.compact h5 {
  font-size: 18px;
  line-height: 22px;
}

.dark.card:hover .title {
  background-color: var(--bx-tertiary);
}

.dark.compact .title:hover {
  background-color: var(--bd-primary);
}
</style>
