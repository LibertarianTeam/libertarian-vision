<script>
import Help from "@/views/FooterBar/section/Help";
import About from "@/views/FooterBar/section/About";
import Store from "@/views/FooterBar/section/Store";

export default {
  name: "FooterBar",
  components: {
    "s-help": Help,
    "s-about": About,
    "s-store": Store
  }
};
</script>

<template lang="html">
  <footer class="v-footer-bar">
    <div class="content">
      <s-about></s-about>
      <s-help></s-help>
      <s-store></s-store>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.v-footer-bar {
  background: url("../../assets/imgs/footer.png") no-repeat;
  background-size: cover;
}

.content {
  display: grid;

  grid-gap: 6px 12px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "s-about s-help s-store";

  padding: 12px 24px;

  transition: background-color 0.4s linear;
  background-color: var(--bx-tertiary);
}

.v-footer-bar:hover .content {
  background-color: var(--bd-primary);
}

.s-help {
  grid-area: s-help;
}

.s-about {
  grid-area: s-about;
}

.s-store {
  grid-area: s-store;
}

@media only screen and (max-width: 1024px) {
  .content {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "s-help s-store" "s-about s-about";
  }

  .s-about {
    margin-top: 24px;
  }
}

@media only screen and (max-width: 640px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-areas: "s-help" "s-store" "s-about";

    padding: 12px;
  }

  .s-about {
    margin-top: 12px;
  }
}
</style>
