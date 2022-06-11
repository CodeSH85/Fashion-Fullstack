import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import productsData from "../../public/data.json"


export default createStore({
  state: {
    data: productsData,
    cart: [],
  },
  getters:{
    // 取得點選商品的詳細資訊
    getProduct : state => id => {
      return state.data.find(product => product.id === id)
    },
  },
  mutations: {
    // 加入購物車功能
    addCart (state, data){
      let isNewProduct = true
      state.cart.map( function (product) {
        if ( product.id == data.product.id ){
          product.number += data.number
          isNewProduct = false
        }
        return product
      })

      if ( isNewProduct ){
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push( newProduct )
      }
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
