import Vue from "vue";
import Vuex from "vuex";

import standardStore from "@/store/standard";

Vue.use(Vuex);

export default new Vuex.Store({
  ...standardStore
});
