<script>
import Help from "@/components/Footer/Help";
import About from "@/components/Footer/About";
import Store from "@/components/Footer/Store";

export default {
  name: "Footer",
  components: {
    "sc-help": Help,
    "sc-about": About,
    "sc-store": Store
  }
};
</script>

<template lang="html">
  <footer class="gc-footer">
    <div class="content">
      <sc-about></sc-about>
      <sc-help></sc-help>
      <sc-store></sc-store>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.gc-footer {
  background: var(--primary) url("../../assets/imgs/footer.png") no-repeat;
  background-size: cover;
}

.gc-footer .content {
  display: grid;

  grid-gap: 6px 12px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "sc-about sc-help sc-store";

  padding: 12px 24px;

  transition: background-color 0.4s linear;
  background-color: var(--bx-tertiary);
}

.gc-footer:hover .content {
  background-color: var(--bd-primary);
}

.sc-help {
  grid-area: sc-help;
}

.sc-about {
  grid-area: sc-about;
}

.sc-store {
  grid-area: sc-store;
}

@media only screen and (max-width: 1024px) {
  .gc-footer .content {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "sc-help sc-store" "sc-about sc-about";
  }
}

@media only screen and (max-width: 640px) {
  .gc-footer .content {
    grid-template-columns: 1fr;
    grid-template-areas: "sc-help" "sc-store" "sc-about";

    padding: 12px;
  }
}
</style>
