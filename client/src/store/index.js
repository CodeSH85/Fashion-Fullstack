import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import pressInfo from "../../public/press.json"

export default createStore({
  state: {
    pressInfo,
    id: 6,
    cart: []
  },
  getters: {
    getProduct : state => id => {
      return state.pressInfo.find(press => press.id === id)
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
