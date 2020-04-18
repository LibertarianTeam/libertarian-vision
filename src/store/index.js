import Vue from "vue";
import Vuex from "vuex";

import staticStore from "@/store/static";
import standardStore from "@/store/standard";

Vue.use(Vuex);

export default new Vuex.Store({
  ...standardStore,
  modules: {
    static: staticStore
  }
});
