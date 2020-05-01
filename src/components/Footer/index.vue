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
  background: var(--primary) url("../../assets/imgs/footer.png") no-repeat;
  background-size: cover;
}

.footer .content {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 460px;

  padding: 0 24px;
  transition: background-color 0.4s linear;

  background-color: var(--bx-tertiary);
}

.footer:hover .content {
  background-color: var(--bd-primary);
}

.sc-about {
  width: 33.33%;
}

.sc-help {
  width: 33.33%;
}

.sc-store {
  width: 33.33%;
}
</style>
