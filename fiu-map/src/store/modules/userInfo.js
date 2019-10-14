const state = {
  userInfo: { username: "", password: "" }
};

const getters = {
  userInfo: state => state.userInfo
};

const actions = {
  updateUserInfo({ commit }) {
    commit("updateUserInfo");
  }
};

const mutations = {
  updateUserInfo(state, username, password) {
    state.userInfo = { username, password };
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
