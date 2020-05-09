import Vue from "vue";
import App from "@/App";

import store from "@/store";
import router from "@/router";

import "@/meta";
import "@/global.css";
import "@/registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render(h) {
    return h(App);
  },
  mounted() {
    return document.dispatchEvent(new Event("x-app-rendered"));
  }
}).$mount("#app");
