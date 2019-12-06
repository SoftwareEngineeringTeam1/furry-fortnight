import Vue from "vue";
import Vuex from "vuex";
import UserInfo from "./modules/UserInfo";
import Categories from "./modules/Categories";
import Locations from "./modules/Locations";
import Organizations from "./modules/Organizations";
import Date from "./modules/Date";
import Event from "./modules/Event";
import EventList from "./modules/EventList";
import FilteredEventList from "./modules/FilteredEventList";
import ShowList from "./modules/ShowList";
import Todos from "./modules/Todos";
import NewEventDialog from "./modules/NewEventDialog";
import Auth from "./modules/Auth";
import ViewEventDialog from "./modules/ViewEventDialog";

Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    UserInfo,
    Categories,
    Locations,
    Organizations,
    Date,
    Event,
    EventList,
    FilteredEventList,
    ShowList,
    Todos,
    NewEventDialog,
    Auth,
    ViewEventDialog
  }
});
