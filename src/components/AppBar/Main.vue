<script>
import Button from "@/components/Button";

export default {
  name: "AppBarMain",
  components: {
    "c-button": Button
  }
};
</script>

<template lang="html">
  <div class="app-bar-main">
    <router-link class="logo" :to="{ name: 'Home' }">
      <img alt="Ancap.SU" title="Home" src="@/assets/logov1.svg" />
    </router-link>

    <div class="account">
      <c-button type="link" :to="{ name: 'Login' }">
        Autenticar
      </c-button>
      <c-button type="link" :to="{ name: 'Register' }">
        Criar conta
      </c-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.app-bar-main {
  display: inline-flex;
  align-items: flex-end;

  width: 100%;
}

.logo > img {
  height: 80px;
}

.account {
  width: 100%;
  max-width: 200px;

  margin: 0 auto 0 20%;
  padding-bottom: 14px;
}

.account > .button {
  font-size: 12px;
}

.account > .button + .button {
  margin-left: 5px;
}

@media only screen and (max-width: 640px) {
  .app-bar-main {
    flex-direction: column;
    align-items: center;
  }

  .logo > img {
    margin: 6px 0;
  }

  .account {
    width: auto;

    margin: 0;
    padding: 0;
  }
}

@media only screen and (max-width: 480px) {
  .app-bar-main {
    align-items: flex-start;
  }

  .account {
    padding-left: 8px;
  }

  .logo > img {
    height: 74px;
  }
}
</style>
