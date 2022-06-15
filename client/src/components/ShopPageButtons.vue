<template>
  <!-- 商品總覽分類頁面上方的按鈕群組元件 -->
  <div class="container-fluid">
      <!-- 當判斷為登入狀態、切換成false時以下文字即會被隱藏 -->
      <div class="unlogin_words h5 fw-bold text-center lh-lg my-3" v-if="isShow">
        購買前請務必先加入會員並留下正資料，<br>
        會員將能夠檢查訂單狀態和歷史紀錄。
      </div>
    <div class="row w-50 mx-auto">
      <!-- 一般頁面的頁面按鈕 -->
      <div class="buttons_group h4 d-md-flex d-sm-none justify-content-center">
        <span class="px-3 fw-bold">/</span>
        <div class="shop_items col px-3">
          <router-link to="#" class="link-dark fw-bold active">ALL</router-link>
        </div>
        <div class="shop_items col px-3">
          <router-link to="#" class="link-dark fw-bold">TOP</router-link>
        </div>
        <div class="shop_items col px-3">
          <router-link to="#" class="link-dark fw-bold">BOTTOM</router-link>
        </div>
        <div class="shop_items col px-3">
          <router-link to="#" class="link-dark fw-bold">DRESS</router-link>
        </div>
        <div class="shop_items col px-3">
          <router-link to="#" class="link-dark fw-bold">JUMPSUIT</router-link>
        </div>
        <div class="shop_items col px-3">
          <router-link to="#" class="link-dark fw-bold">SALE</router-link>
        </div>
        <span class="px-3 fw-bold">/</span>
      </div>
      <!-- RWD頁面的頁面按鈕 -->
      <div class="dropdown d-md-none d-sm-flex justify-content-center my-4">
        <button class="btn dropdown-toggle fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          ALL
        </button>
        <ul class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">ALL</a></li>
          <li><a class="dropdown-item" href="#">TOP</a></li>
          <li><a class="dropdown-item" href="#">BOTTOM</a></li>
          <li><a class="dropdown-item" href="#">DRESS</a></li>
          <li><a class="dropdown-item" href="#">JUMPSUIT</a></li>
          <li><a class="dropdown-item" href="#">SALE</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ShopPageButtons',
    data(){
      return{
        isShow: true,
      }
    },
    methods: {

    },
  }
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  .buttons_group {
    margin: 90px 0;
  }

  .shop_items a:hover {
    color: $redColor;
  }

  a {
    text-decoration: none;
  }

  .dropdown button {
    width: 100%;
    border: solid 1px black;
    border-radius: 0;
    box-shadow: none;
  }

  .dropdown-menu {
    width: 93%;
    border-radius: 0;
  }

  .dropdown-menu li > a:hover {
    color: white;
    background-color: black;
  }
</style>