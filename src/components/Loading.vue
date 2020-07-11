<template lang="html">
  <div class="c-loading"></div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="css" scoped>
.c-loading {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  z-index: 20;
  position: fixed;

  background-color: var(--bg-primary);
}

.c-loading::after {
  content: '';

  border: 60px solid #666;
  border-top-color: var(--primary);
  border-bottom-color: var(--primary);
  border-radius: 50%;

  animation: spin 1.4s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
