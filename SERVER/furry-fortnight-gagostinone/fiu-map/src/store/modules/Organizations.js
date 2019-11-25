/*const state = {
  Organizations: ["SPC", "UPE", "Honors College"]
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
*/

import axios from "axios";

const state = {
  organizations: []
};

const getters = {
  Organizations: state => state.organizations
};

const actions = {
  async fetchOrganizations({ commit }) {
    const response = await axios.get(
      "http://localhost:8084/organization"
    );

    commit("setOrganizations", response.data);
  }
};

const mutations = {
  setOrganizations(state, organizations) {
    var temp = organizations.Organizations;
    var newTemp = temp.map(element => element.FName);
    state.organizations = newTemp;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
