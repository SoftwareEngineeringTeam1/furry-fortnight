import Vue from "vue";
import Vuex from "vuex";
import logInStatus from "./modules/logInStatus";
import userInfo from "./modules/userInfo";

Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    logInStatus,
    userInfo
  }
});
