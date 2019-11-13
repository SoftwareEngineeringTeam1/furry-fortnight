import axios from "axios";

const state = {
  todos: []
};

const getters = {
  Todos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "http://localhost:8084/categories"
    );

    commit("setTodos", response.data);
  }
};

/*const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};*/

const mutations = {
  setTodos(state, todos) {
    var temp = todos.Categories;
    var newTemp = temp.map(element => element.CategoryName);
    state.todos = newTemp;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
