const state = {
  Categories: ["Sport", "tuturoing", "spc"]
};

const getters = {
  Categories: state => state.Categories
};

const actions = {
  updateCategories({ commit }) {
    commit("updateCategories");
  }
};

const mutations = {
  updateCategories: (state, Categories) => (state.Categories = Categories)
};

export default {
  state,
  getters,
  actions,
  mutations
};
