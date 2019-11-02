import Vue from "vue";
import Vuex from "vuex";
import LogInStatus from "./modules/logInStatus";
import UserInfo from "./modules/userInfo";
import Categories from "./modules/Categories";
import Locations from "./modules/Locations";
import Organizations from "./modules/Organizations";
import Date from "./modules/Date";
import Event from "./modules/Event";
import EventList from "./modules/EventList";
import FilteredEventList from "./modules/FilteredEventList"

Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    LogInStatus,
    UserInfo,
    Categories,
    Locations,
    Organizations,
    Date,
    Event,
    EventList,
    FilteredEventList
  }
});
