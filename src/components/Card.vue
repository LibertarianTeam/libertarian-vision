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
    extended: {
      type: Boolean,
      default: false
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
      const { extended } = this;
      return `card${extended ? " extended" : ""}`;
    },

    ...mapGetters(["getAsset"])
  }
};
</script>

<template lang="html">
  <div :class="classCard" :style="imgURL">
    <div>
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
  box-shadow: 0 4px 8px #0006;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--primary);
}

.card:hover {
  box-shadow: 0 8px 16px #0006;
}

.extended {
  height: 280px;
  overflow: hidden;

  background-position: top;
  background-size: auto 50%;
}

.card > div {
  padding: 12px;
}

.extended.card > div {
  height: 64%;
}

.tag {
  margin-bottom: 16px;

  color: var(--text-secondary);
  font-size: 12px;
}

.title {
  padding: 0;
  border: none;

  color: var(--text-secondary);
  background-color: transparent;
}

h5 {
  text-shadow: 2px 2px 4px var(--text-primary);

  font-size: 22px;
  text-align: left;
}

.extended h5 {
  font-size: 18px;
}
</style>
