import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import productsData from "../../public/data.json"
import pressInfo from "../../public/press.json"


export default createStore ({
  state: {
    data: productsData,
    productAllApi: "http://localhost:3000/api/getAllProducts",
    loginUser: '',
    cartList: [], // 購物車資料
    pressInfo,
    userOrder: [], // 使用者的已成立訂單資料
  },
  getters: {
    // 取得點選商品的詳細資訊
    getProduct: state => id => {
      return state.data.find ( product => product.id === id )
    },
    // 已經加總後的購物車商品數量
    currentQuantity (state) {
      let sum = 0;

      for(var i = 0; i < state.cartList.length; i++) {
        sum += state.cartList[i].number
        // sum = sum(0) + "cart裡面每一組資料API中的number數量[後來自己新加的API資料]"
      }
      return sum
    },
    // 隨機推薦一樣商品的功能
    getRecommendedProducts: state => {
      // 先取得尚有庫存的商品清單
      const unSoldoutList = state.data.filter (p => p.quantity > 0);
      // 取隨機數
      const random = Math.round (Math.random () * (unSoldoutList.length - 1));
      // 回傳隨機數的商品資料
      return unSoldoutList[random];
    }
  },
  mutations: {
    // 加入購物車功能
    addCart (state, data) {
      let isNewProduct = true
      state.cartList.map (function (product) {
        if (product.id == data.product.id) {
          product.number += data.number
          product.color = data.color
          product.clothesSize = data.clothesSize
          isNewProduct = false
        }
        return product
      })
      if (isNewProduct) {
        let newProduct = data.product
        state.cartList.push (newProduct)
      }
    },
    // 將儲存在localStorage裡的登入中User存放在上面state的通用資料(loginUser)
    getUser (state, data) {
      if (data) {
        state.loginUser = data
      }
    },
    // 紀錄已成立訂單到orderView使用 (目前只能記一組訂單)
    saveOrder (state, data) {
      if (data) {
        state.userOrder = data;

      }
    },
    // 訂單成立之後清空購物車功能
    resetCart (state, data) {
      if (data) {
        state.cartList = data;

      }
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState ()]
})
