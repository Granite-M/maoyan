import Vue from "vue";
import Vuex from "vuex";
import address from "./address";
import detail from "./detail";
import hot from "./hot";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: { hot, detail, address },
});
