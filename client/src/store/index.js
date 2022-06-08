import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
// import data from "../../public/data.json"


export default createStore({
  state: {
    // productsData: data,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
