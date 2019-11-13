/*const state = {
  Categories: ["Club", "Study Group", "Sports", "Religious Studies"]
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
};*/

import axios from "axios";

const state = {
  categories: []
};

const getters = {
  Categories: state => state.categories
};

const actions = {
  async fetchCategories({ commit }) {
    const response = await axios.get(
      "http://localhost:8084/categories"
    );

    commit("setCategories", response.data);
  }
};

/*const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};*/

const mutations = {
  setCategories(state, categories) {
    var temp = categories.Categories;
    var newTemp = temp.map(element => element.CategoryName);
    state.categories = newTemp;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

