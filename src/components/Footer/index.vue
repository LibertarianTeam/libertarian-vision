<script>
export default {
  name: "Footer"
};
</script>

<template lang="html">
  <footer class="footer">
    <div class="content"></div>
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
