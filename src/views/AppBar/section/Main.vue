<script>
import { mapGetters } from "vuex";

import Button from "@/components/Button";
import Figure from "@/components/Figure";
import Hamburger from "@/views/AppBar/section/Hamburger";

export default {
  name: "AppBarMain",
  components: {
    "c-button": Button,
    "c-figure": Figure,
    "s-hamburger": Hamburger
  },
  computed: {
    ...mapGetters(["smdWindow"])
  }
};
</script>

<template lang="html">
  <div class="s-main">
    <c-button title="Home" :to="{ name: 'Home' }" text>
      <c-figure src="logov1.svg"></c-figure>
    </c-button>

    <div class="content">
      <div class="account">
        <c-button title="Fazer login" :to="{ name: 'Login' }">
          Autenticar
        </c-button>
        <c-button title="Criar conta" :to="{ name: 'Register' }">
          Criar conta
        </c-button>
      </div>

      <s-hamburger v-if="smdWindow"></s-hamburger>
    </div>
  </div>
</template>

<style lang="css" scoped>
.s-main {
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
  .s-main {
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
  .s-main {
    align-items: flex-start;
  }
}
</style>
