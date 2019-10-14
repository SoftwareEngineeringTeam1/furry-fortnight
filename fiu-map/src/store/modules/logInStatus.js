const state = {
  logInState: false
};

const getters = {
  logInState: state => state.logInState
};

const actions = {
  changeLoginState({ commit }){
    commit("changeLoginState");
  }
};

const mutations = {
  changeLoginState: state => (state.logInState = !state.logInState)
};

export default {
  state,
  getters,
  actions,
  mutations
};
