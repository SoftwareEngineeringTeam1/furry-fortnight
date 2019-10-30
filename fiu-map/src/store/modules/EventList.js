const state = {
  EventList: [
    {
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Capacity: 50,
      StartTime: "09:00",
      EndTime: "13:30",
      Date: "10-21-19",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Capacity: 50,
      StartTime: "12:00",
      EndTime: "13:30",
      Date: "10-21-19",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Study Group",
      Location: "GC",
      Capacity: 50,
      StartTime: "09:00",
      EndTime: "13:30",
      Date: "10-21-19",
      Comment: "COME TO THE ORIENTATION"
    },
  ]
};

const getters = {
  EventList: state => state.EventList
};

const actions = {
  updateEventList({ commit }) {
    commit("updateEventList");
  }
};

const mutations = {
  updateEventList: (state, EventList) => (state.EventList = EventList)
};

export default {
  state,
  getters,
  actions,
  mutations
};
