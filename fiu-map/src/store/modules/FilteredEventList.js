const state = {
  FilteredEventList: [
    {
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Attending: 5,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-04",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "UPE",
      Category: "Club",
      Location: "GC",
      Attending: 49,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-10-31",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "UPE",
      Category: "Club",
      Location: "GC",
      Attending: 0,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-10-31",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Capacity: 50,
      StartTime: "12:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-01",
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
