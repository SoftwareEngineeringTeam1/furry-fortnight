import Vue from "vue";
import Vuex from "vuex";
import LogInStatus from "./modules/LogInStatus";
import UserInfo from "./modules/UserInfo";
import Categories from "./modules/Categories";
import Locations from "./modules/Locations";
import Organizations from "./modules/Organizations";
import Times from "./modules/Times";
import Date from "./modules/Date";
import Event from "./modules/Event";

Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    LogInStatus,
    UserInfo,
    Categories,
    Locations,
    Organizations,
    Times,
    Date,
    Event
  }
});
