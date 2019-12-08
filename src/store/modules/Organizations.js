const state = {
  Organizations: ["SPC", "UPE", "Honors College","CAPS","Student","Faculty","WiCS"]
};

const getters = {
  Organizations: state => state.Organizations
};

const actions = {
  updateOrganizations({ commit }) {
    commit("updateOrganizations");
  }
};

const mutations = {
  updateOrganizations: (state, Organizations) =>
    (state.Organizations = Organizations)
};

export default {
  state,
  getters,
  actions,
  mutations
};
