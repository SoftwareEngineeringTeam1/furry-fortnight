const state = {
  FilteredEventList: []
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
  updateFilteredEventList: (state, FilteredEventList) => (state.FilteredEventList = FilteredEventList),
  pushFilteredEventList: (state, data) => {
    state.FilteredEventList.push(data);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
