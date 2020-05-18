<script>
import { mapGetters } from 'vuex'

import Button from '@/components/Button'
import Figure from '@/components/Figure'
import Hamburger from '@/views/AppBar/Hamburger'

export default {
  name: 'AppBarMain',
  components: {
    'c-button': Button,
    'c-figure': Figure,
    'v-hamburger': Hamburger
  },
  computed: {
    ...mapGetters(['smdWindow'])
  }
}
</script>

<template lang="html">
  <div class="v-main">
    <c-button title="Home" :to="{ name: 'index' }" text>
      <c-figure src="logov1.svg"></c-figure>
    </c-button>

    <div class="content">
      <div class="account">
        <c-button title="Fazer login" :to="{ name: 'login' }">
          Autenticar
        </c-button>
        <c-button title="Criar conta" :to="{ name: 'register' }">
          Criar conta
        </c-button>
      </div>

      <v-hamburger v-if="smdWindow"></v-hamburger>
    </div>
  </div>
</template>

<style lang="css" scoped>
.v-main {
  display: inline-flex;
  align-items: flex-end;

  width: 100%;
}

.c-figure {
  width: 220px;
}

.content {
  display: inline-flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 6px;
}

.account {
  margin: 0 auto 0 22%;
  padding-bottom: 14px;
}

.account .c-button {
  font-size: 12px;
}

.account .c-button + .c-button {
  margin-left: 6px;
}

@media only screen and (max-width: 800px) {
  .v-main {
    flex-direction: column;
    align-items: center;
  }

  .c-figure {
    width: 180px;
  }

  .account {
    margin: 0;
    padding: 0;
  }
}

@media only screen and (max-width: 360px) {
  .v-main {
    align-items: flex-start;
  }
}
</style>
