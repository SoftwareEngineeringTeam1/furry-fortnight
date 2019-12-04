const state = {
  FilteredEventList: [
    {
      Id: 1,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Coordinates: [-80.372883, 25.756720],
      Location: "GC",
      Attending: 5,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-25",
      Comment: "COME TO THE ORIENTATION",
      Color: '#CC0000'
    },
    { 
      Id: 2,
      Name: "adfsd",
      User: "gagos007",
      Organization: "dsfa",
      Category: "af",
      Coordinates: [-80.373875, 25.759039],
      Location: "ECS",
      Attending: 49,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-25",
      Comment: "COME TO THE ORIENTATION",
      Color: '#CC0000'
    }
  ]
};

const getters = {
  FilteredEventList: state => state.FilteredEventList
};

const actions = {
  updateFilteredEventList({ commit }) {
    commit("updateFilteredEventList");
  }
};

const mutations = {
  updateFilteredEventList: (state, FilteredEventList) => (state.FilteredEventList = FilteredEventList)
};

export default {
  state,
  getters,
  actions,
  mutations
};
