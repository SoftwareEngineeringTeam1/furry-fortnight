import axios from 'axios';

const state = {
    token: window.localStorage.getItem('token')
    // token: null
};

const getters = {
    isLoggedIn () {
        return !!state.token
    }
};

const actions =  {
    login: () => {
        window.localStorage.token = state.token;
    },
    async fetchSample({ commit }) {
        // const response = await axios.get(
        //   "http://localhost:8085/sample"
        // );
        commit("setToken", "true");
        window.localStorage.token = state.token;
    },
    logout: ({ commit }) => {
        // 'commit' is used to call the mutation 'setToken'
        commit('setToken', null);
        window.localStorage.removeItem('token');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}