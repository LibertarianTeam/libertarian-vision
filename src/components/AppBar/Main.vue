<script>
import Button from "@/components/Button";

export default {
  name: "AppBarMain",
  components: {
    "gc-button": Button
  }
};
</script>

<template lang="html">
  <div class="sc-main">
    <router-link class="logo" :to="{ name: 'Home' }">
      <img alt="Ancap.SU" title="Home" src="@/assets/logov1.svg" />
    </router-link>

    <div class="account">
      <gc-button :to="{ name: 'Login' }">
        Autenticar
      </gc-button>
      <gc-button :to="{ name: 'Register' }">
        Criar conta
      </gc-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.sc-main {
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

.account > .gc-button {
  font-size: 12px;
}

.account > .gc-button + .gc-button {
  margin-left: 5px;
}

@media only screen and (max-width: 640px) {
  .sc-main {
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
  .sc-main {
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
