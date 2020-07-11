<template lang="html">
  <div class="c-loading">
    <c-figure src="logov1.svg"></c-figure>
  </div>
</template>

<script>
import Figure from '~/components/Figure'

export default {
  name: 'Loading',
  components: {
    'c-figure': Figure
  }
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

.c-loading .c-figure {
  width: 80%;
  height: 80%;

  animation: loading 3s linear infinite;
}

@keyframes loading {
  from {
    filter: opacity(80%);
    transform: rotateZ(0deg);
  }
  50% {
    filter: opacity(20%);
  }
  to {
    filter: opacity(80%);
    transform: rotateZ(360deg);
  }
}
</style>
