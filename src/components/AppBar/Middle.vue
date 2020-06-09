<script>
import { mapGetters } from 'vuex'

import Hamburger from './Hamburger'
import Button from '~/components/Button'
import Figure from '~/components/Figure'

export default {
  name: 'AppBarMiddle',
  components: {
    'c-button': Button,
    'c-figure': Figure,
    'c-app-bar-hamburger': Hamburger
  },
  computed: {
    ...mapGetters(['smdWindow'])
  }
}
</script>

<template lang="html">
  <div class="c-app-bar-middle">
    <c-button class="logo" title="Home" :to="{ name: 'index' }" img>
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

      <c-app-bar-hamburger
        v-if="smdWindow"
        @click="$emit('click:hamburger', $event)"
      ></c-app-bar-hamburger>
    </div>
  </div>
</template>

<style lang="css" scoped>
.c-app-bar-middle {
  display: inline-flex;
  align-items: flex-end;

  width: 100%;
}

.logo .c-figure {
  width: 220px;
}

.c-app-bar-middle > .content {
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
  font-size: 0.8rem;
}

.account .c-button + .c-button {
  margin-left: 6px;
}

@media only screen and (max-width: 800px) {
  .c-app-bar-middle {
    flex-direction: column;
    align-items: center;
  }

  .logo .c-figure {
    width: 180px;
  }

  .account {
    margin: 0;
    padding: 0;
  }
}

@media only screen and (max-width: 360px) {
  .c-app-bar-middle {
    align-items: flex-start;
  }
}
</style>
