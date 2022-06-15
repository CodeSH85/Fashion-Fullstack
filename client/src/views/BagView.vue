<template>
  <!-- 購物清單確認頁面 -->
  <!-- 購物車內沒東西時的畫面 (透過v-if判斷做畫面切換) -->
  <div class="container-fluid" v-if="productsInCart.length === 0">
    <div class="row">
      <div class="empty_cart col-6 mx-auto text-center">
        <div class="h3 fw-bold my-3">購物車中尚無商品</div>
        <router-link to="/shop" type="submit" class="go_shopping h5 fw-bold link-dark my-3">
          前往購物
        </router-link>
      </div>
    </div>
  </div>
  <!-- 購物車內有商品時的顯示畫面 (透過v-if判斷做畫面切換) -->
  <div class="container-fluid" v-if="productsInCart.length !== 0">
    <div class="row">
      <div class="d-flex justify-content-center">
          <div class="all_amount h3 fw-bold">
            <span>購物車內共 {{ currentQuantity }} 件商品</span>
          </div>
      </div>
      <!-- 使用OrderListForm元件 -->
      <OrderListForm>
        <!-- 在OrderListForm元件插入訂購商品資訊(ProductBox) -->
        <template v-slot:productBox>
          <!-- 使用ProductBox元件 -->
          <template v-for="products in productsInCart" :key="products">
            <ProductBox v-bind="products">
              <template v-slot:amount>
                <div class="amount_button d-flex justify-content-between align-items-center p-0 mx-md-0 mx-sm-4">
                  <button class="mark h3 fw-bold p-md-0 p-sm-2 m-0" @click="editCart('minus', products)">－</button>
                  <div class="amount"> {{ products.number }} </div>
                  <button class="mark h3 fw-bold p-md-0 p-sm-2 m-0" @click="editCart('add', products)">＋</button>
                </div>
              </template>
              <template v-slot:delete>
                <button class="h4 fw-bold text-center p-md-0 px-sm-4 m-md-0 mx-sm-0" @click="remove(products)">
                  X
                </button>
              </template>
            </ProductBox>
          </template>
        </template>
      </OrderListForm>
      <div class="cart_total col-md-10 h3 fw-bold mx-auto d-flex justify-content-md-end px-md-3 mb-4 justify-content-sm-center">
        <span class="me-3">合計：</span><span class="ms-3">NT$ {{ total }}</span>
      </div>
      <div class="button_space col-10 mx-auto d-flex justify-content-md-end justify-content-sm-center">
        <router-link to="" type="submit" class="col-md-3 link-dark d-block col-sm-12" @click="check()">
          <div class="check_button h4 fw-bold text-center py-3 px-5">
            確認結帳
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// 引入元件(component)
  import OrderListForm from "../components/OrderListForm.vue"
  import ProductBox from "../components/ProductBox.vue"

  export default {
    components: {
      OrderListForm,
      ProductBox,
    },
    data () {
      return {
        products: this.$store.state.cart,
      }
    },
    methods: {
      // 加減修改商品數量及狀態
      editCart (type, product) {
        if (type === 'add') {
          product.number++
          // 判斷所選數量是否比庫存多，是的話顯示庫存量，不是的話顯示所選數量
          product.number = (product.number > product.quantity) ? product.quantity : product.number
          if (product.number === product.quantity) {
            alert('已達庫存上限')
            return;
          }
        }
        else if (type === 'minus') {
          if (product.number == 0) return
          product.number--
        }
      },
      // 移除商品
      remove (product) {
        product.number = 0
      },
      // 結帳功能
      check () {
        if (this.productsInCart.length == 0) {
          alert('購物車目前是空的，請先選擇商品');
          return;
        } else {
          this.products.orderId = new Date().getTime();
          this.$router.push (`/bag/${this.products.orderId}`);
        }
      },
    },
    computed: {
      // 從store的getters取得currentQuantity已經加總後的購物車商品數量 (老師寫法)
      currentQuantity () {
        return this.$store.getters.currentQuantity
      },
      // 計算購物車內是哪些商品、各項商品小計
      productsInCart () {
        return this.products
        // 只顯示購買數量 > 0 的項目
          .filter (p => p.number)
          // 算出每個產品的小計
          .map (p => {
            p.sum = p.number * p.price
            return p
          }
        )
      },
      // 目前購物車中所有商品的總金額
      total () {
        return this.productsInCart
        .reduce ((sum, p) => (sum + p.sum), 0)
      },
    },
  }
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  .empty_cart {
    margin: 220px 0;
  }

  .go_shopping {
    margin-bottom: 0;
  }

  .all_amount {
    margin: 120px 0 80px 0;
  }

  .amount_button {
    border: solid 2px black;
  }

  .mark {
    border: none;
    background-color: transparent;
  }

  button {
    border: none;
    background-color: transparent;
  }

  // .cart_total {
  //   margin-top: -100px;
  // }

  a {
    text-decoration: none;
    margin-bottom: 100px;
  }

  a:hover {
    color: $redColor;
  }

  .button_space {
    margin-top: 40px;
  }

  .check_button {
    border-top: solid 2px $redColor;
    border-bottom: solid 2px $redColor;
  }
</style>
