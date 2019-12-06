const state = {
  viewEventDialog: false
};

const getters = {
  ViewEventDialog: state => state.viewEventDialog,
  isOpen () {
        return !!state.viewEventDialog
    }
};

const actions = {
  changeViewEventDialog({ commit }) {
    commit("changeViewEventDialog");
  },
  changeViewEventDialogT({ commit }) {
    commit("changeViewEventDialogT");
  },
  changeViewEventDialogF({ commit }) {
    commit("changeViewEventDialogF");
  },
  printIT: () => {
    console.log('hdfjdskh')
  }
};

const mutations = {
  changeViewEventDialog: state => (state.viewEventDialog = !state.viewEventDialog),
  changeViewEventDialogT: state => (state.viewEventDialog = true),
  changeViewEventDialogF: state => (state.viewEventDialog = false)
};

export default {
  state,
  getters,
  actions,
  mutations
};
