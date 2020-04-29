<script>
import Button from "@/components/Button";
import { getAsset, buildClass } from "@/utils";

export default {
  name: "Card",
  components: {
    "gc-button": Button
  },
  props: {
    tag: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: "icons/broken.svg"
    },
    dark: {
      type: Boolean,
      default: true
    },
    compact: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    title() {
      return this.$attrs.title || "";
    },
    imgURL() {
      return { backgroundImage: `url("${getAsset(this.img)}")` };
    },
    classCard() {
      return buildClass("gc-card", ["dark", "compact", "center"], this.$props);
    }
  }
};
</script>

<template lang="html">
  <div :class="classCard" :style="imgURL">
    <div class="content">
      <gc-button v-if="tag" class="tag" :to="{ name: 'Home' }">
        {{ tag }}
      </gc-button>

      <gc-button class="title" :title="title" :to="{ name: 'Home' }">
        <h5>
          <slot name="default"></slot>
        </h5>
      </gc-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.gc-card {
  display: flex;

  align-items: flex-end;
  justify-content: center;

  width: 260px;
  height: 360px;

  border-radius: 8px;
  transition: box-shadow 0.2s linear;

  box-shadow: inset 0 0 18px 6px var(--bx-secondary);

  background: var(--primary) no-repeat;
  background-size: cover;
}

.gc-card:hover {
  box-shadow: inset 0 0 24px 4px var(--bx-tertiary);
}

.center.gc-card {
  background-position: center;
}

.compact.gc-card {
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
  min-height: 100px;

  padding: 8px 12px;
  border: none;

  transition: background-color 0.4s;

  background-color: transparent;
}

h5 {
  font: bold 24px caption;
  color: var(--text-secondary);

  text-shadow: 2px 2px 8px var(--bx-tertiary);
}

.dark.gc-card .title {
  padding: 6px 8px;
  background-color: var(--bx-tertiary);
}

.dark.gc-card:hover .title {
  background-color: var(--bd-primary);
}

.dark.gc-card .title:hover {
  background-color: var(--bd-secondary);
}
.compact.gc-card .title {
  min-height: 80px;
}
.compact.gc-card h5 {
  font-size: 18px;
  line-height: 22px;
}
</style>
