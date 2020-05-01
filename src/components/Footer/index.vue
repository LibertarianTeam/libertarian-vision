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
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 12px 24px;
  transition: background-color 0.4s linear;

  background-color: var(--bx-tertiary);
}

.gc-footer:hover .content {
  background-color: var(--bd-primary);
}

.sc-help,
.sc-about,
.sc-store {
  width: 32%;
}
</style>
