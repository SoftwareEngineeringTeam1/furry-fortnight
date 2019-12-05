/*const state = {
  Locations: ["ECS", "PG6", "GC"]
};

const getters = {
  Locations: state => state.Locations
};

const actions = {
  updateLocations({ commit }) {
    commit("updateLocations");
  }
};

const mutations = {
  updateLocations: (state, Locations) => (state.Locations = Locations)
};

export default {
  state,
  getters,
  actions,
  mutations
};
*/

import axios from "axios";

const state = {
  locations: []
};

const getters = {
  Locations: state => state.locations
};

const actions = {
  async fetchLocations({ commit }) {
    const response = await axios.get(
      "http://localhost:8084/location"
    );

    commit("setLocations", response.data);
  }
};

/*const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};*/

const mutations = {
  setLocations(state, locations) {
    var temp = locations.Locations;
    var newTemp = temp.map(element => element.LocationName);
    state.locations = newTemp;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

