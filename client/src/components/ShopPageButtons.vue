<template>
  <!-- 商品總覽分類頁面上方的按鈕群組元件 -->
  <div class="container-fluid">
    <!-- 當判斷為登入狀態、切換成false時以下文字即會被隱藏，但還不清楚如何切換 -->
    <div class="unlogin_words h5 fw-bold text-center lh-lg" v-show="!isLogin">
      購買前請務必先加入會員並留下正資料，<br>
      會員將能夠檢查訂單狀態和歷史紀錄。
    </div>
    <div class="row w-50 mx-auto">
      <!-- 一般頁面的頁面按鈕 -->
      <div class="buttons_group h4 d-md-flex d-sm-none justify-content-center">
        <span class="px-3 fw-bold">/</span>
        <div class="shop_items col">
          <span href="" class="tabs_link link-dark fw-bold px-3"
          v-for="(item, index) in tab" :key="index" :tab="item" @click="onTabs(index)">
            {{ item }}
          </span>
        </div>
        <span class="px-3 fw-bold">/</span>
      </div>
      <!-- RWD頁面的頁面按鈕 -->
      <div class="dropdown d-md-none d-sm-flex justify-content-center mt-4">
        <button class="btn dropdown-toggle fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          ALL
        </button>
        <ul class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
          <li class="dropdown-item" v-for="(item, index) in tab" :key="index" 
          :tab="item" @click="onTabs(index)">
          {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import categoryData from "../../public/categories.json"

  export default {
    name: 'ShopPageButtons',
    data () {
      return {
        unlogin: true,
        tab: categoryData,
      }
    },
    methods: {
      loginStatus () {
        let status = this.$store.state.loginUser
        if (status === '') {
          this.unlogin = true;
        } else {
          this.unlogin = false;
          return;
        }
      },
      onTabs (index) {
        // 傳tab的字串值到外層ShopView
        this.$emit ('tabItem', this.tab[index])
      },
    },
    created () {
      this.loginStatus ();
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  .unlogin_words {
    margin-top: 80px;
  }
  .buttons_group {
    margin: 90px 0;
  }

  .tabs_link:hover {
    cursor: pointer;
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

  .dropdown-menu li:hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
</style>