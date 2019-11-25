import axios from "axios";

const state = {
  eventList: []
};

const getters = {
  EventList: state => state.eventList
};

const actions = {
  async fetchEvent({ commit }) {
    const response = await axios.get(
      "http://localhost:8084/events"
    );

    commit("setEvent", response.data);
  }
};

const mutations = {
  setEvent(state, eventList) {
    var temp = eventList.EventList;
    //var newTemp = temp.map(element => element.EventInfo);
    //state.eventList = newTemp;
    state.eventList = temp;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};


