const state = {
  viewEventDialog: false
};

const getters = {
  ViewEventDialog: state => state.viewEventDialog,
};

const actions = {
  changeViewEventDialog({ commit }) {
    commit("changeViewEventDialog");
  }
};

const mutations = {
  changeViewEventDialog: state => (state.viewEventDialog = !state.viewEventDialog)
};

export default {
  state,
  getters,
  actions,
  mutations
};
