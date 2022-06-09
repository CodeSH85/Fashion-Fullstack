import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import productsData from "../../public/data.json"


export default createStore({
  state: {
    data: productsData,
    cart: [],
    //购物车数据，数组形式，数据元素为对象（商品id，购买数量count）
    checkCart: [],
  },
  getters:{
    getProduct : state => id => {
      return state.data.find(product => product.id === id)
    },
  },
//   actions: {
//     addCartQty (context, item) {
//       context.state.cart.carts.forEach((cartItem) => {
//         if (item.id === cartItem.id) {
//           context.commit('ADDCARTQTY', cartItem);
//         }
//       })
//   },
//   minusCartQty (context, item) {
//     context.state.cart.carts.forEach((cartItem) => {
//       if (item.id === cartItem.id) {
//         if (cartItem.number > 1) {
//           context.commit('MINUSCARTQTY', cartItem);
//         }
//       }
//     })
// }
//   },
  mutations: {
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

    checkout (state, data){
      state.checkCart.push(data)
    },
    // //修改购物车商品数量
    // editCartCount(state, payload){
    //   const product = state.cart.find(item => item.id === payload.id);
    //   product.number += payload.number;
    // },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
