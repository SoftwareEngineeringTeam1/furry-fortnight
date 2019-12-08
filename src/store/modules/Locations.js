const state = {
  Locations: ["ECS", "PG6", "GC", "RB", "GL","DM","SIPA"]
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
