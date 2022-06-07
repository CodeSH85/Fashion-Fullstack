<template>
  <!-- 購物清單確認頁面 -->
  <!-- 購物車內沒東西時的畫面 (預設應為true) -->
  <div class="container-fluid" v-show="emptyCart">
    <div class="row">
      <div class="empty_cart col-6 mx-auto text-center">
        <div class="h3 fw-bold my-3">購物車中尚無商品</div>
        <router-link to="/shop" type="submit" class="go_shopping h5 fw-bold link-dark my-3">前往購物</router-link>
      </div>
    </div>
  </div>
  <!-- 購物車內有商品時的顯示畫面 (預設應為false) -->
  <div class="container-fluid" v-show="unemptyCart">
    <div class="row">
      <div class="d-flex justify-content-center my-5">
          <div class="h3 fw-bold"><span>購物車內共 3 件商品</span></div>
      </div>
      <!-- 使用OrderListForm元件 -->
      <OrderListForm>
        <!-- 使用ProductBox元件 -->
        <ProductBox>
          <template v-slot:amount>
            <div class="amount_button d-flex justify-content-between align-items-center p-0 mx-md-0 mx-sm-4">
              <button class="mark h3 fw-bold p-md-0 p-sm-2 m-0" @click="removeNum()">－</button>
              <div class="amount"> {{ number }} </div>
              <button class="mark h3 fw-bold p-md-0 p-sm-2 m-0" @click="addNum()">＋</button>
            </div>
          </template>
          <template v-slot:delete>
            <button class="h4 fw-bold text-center p-md-0 px-sm-4 m-md-0 mx-sm-0">
              X
            </button>
          </template>
        </ProductBox>
      </OrderListForm>
      <div class="cart_total col-md-10 h3 fw-bold mx-auto d-flex justify-content-md-end px-md-3 mb-4 justify-content-sm-center">
        <span class="me-3">合計：</span><span class="ms-3">NT 27,600</span>
      </div>
      <div class="col-10 mx-auto d-flex justify-content-md-end justify-content-sm-center">
        <router-link to="/bag/completed" type="submit" class="col-md-3 link-dark d-block col-sm-12">
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
    data(){
      return{
        number: 1,
        emptyCart: false,
        unemptyCart: true,
      }
    },
    methods: {
      removeNum: function() {
        this.number -= 1;
      },
      addNum: function() {
        this.number += 1;
      },
    },
  }
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  .empty_cart {
    margin: 245px 0;
  }

  .go_shopping {
    margin-bottom: 0;
  }

  .amount_button {
    border: solid 2px black;
  }

  .mark {
    border: none;
    background-color: $bgColor;
  }

  button {
    border: none;
  }

  .cart_total {
    margin-top: -100px;
  }

  a {
    text-decoration: none;
    margin-bottom: 180px;
  }

  a:hover {
    color: $redColor;
  }

  .check_button {
    border-top: solid 2px $redColor;
    border-bottom: solid 2px $redColor;
  }
</style>
