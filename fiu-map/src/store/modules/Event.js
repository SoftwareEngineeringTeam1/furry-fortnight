const state = {
  Event: {
    Name: "SPC Orientation",
    User: "gagos007",
    Organization: "SPC",
    Category: "Club",
    Location: "GC",
    Capacity: 50,
    Time: "12:00 AM - 4:00 PM",
    Date: "10-21-19",
    Comment: "COME TO THE ORIENTATION"
  }
};

const getters = {
  Event: state => state.Event
};

const actions = {
  updateEvent({ commit }) {
    commit("updateEvent");
  }
};

const mutations = {
  updateEvent: (state, Event) => (state.Event = Event)
};

export default {
  state,
  getters,
  actions,
  mutations
};
