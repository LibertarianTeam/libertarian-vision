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
  <footer class="footer">
    <div class="content">
      <sc-about></sc-about>
      <sc-help></sc-help>
      <sc-store></sc-store>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  background: var(--primary) url("../../assets/imgs/footer.jpg") no-repeat;
}

.footer .content {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 460px;

  background-color: var(--bx-tertiary);
}
</style>
