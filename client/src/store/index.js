import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import pressInfo from "../../public/press.json"

export default createStore({
  state: {
    pressInfo,
    id: 6,
    cart: [],
    productsInfo: 'http://localhost:3000/api/getImgs',
  },
  getters: {
    getPress : state => id => {
      return state.pressInfo.find(press => press.id === id)
    },
    getProduct : state => id => {
      return state.productsInfo.find(product => product.id === id)
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
