<template>
  <ShopPageButtons />
  <!-- 商品總覽分類頁面 -->
  <div class="row col-10 mx-auto">
    <div class="d-flex flex-wrap justify-content-center">
    <!-- 使用ProductItem元件 -->
    <template v-for="product in data" :key="product.id">
      <ProductItem v-bind="product">
      </ProductItem>
    </template>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <!-- 一般頁面的頁面按鈕 -->
      <div class="page_buttons h4 text-center fw-bold mt-5 d-md-block d-sm-none">
        <a href="#" class="px-3 link-dark">＜</a>
        <a href="#" class="px-3 link-dark">1</a>
        <a href="#" class="px-3 link-dark">2</a>
        <a href="#" class="px-3 link-dark">3</a>
        <a href="#" class="px-3 link-dark">4</a>
        <a href="#" class="px-3 link-dark">＞</a>
      </div>
      <!-- RWD頁面的頁面按鈕 -->
      <div class="dropdown w-50 mx-auto d-md-none d-sm-flex justify-content-center my-4">
        <button class="btn dropdown-toggle fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          1
        </button>
        <ul class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">1</a></li>
          <li><a class="dropdown-item" href="#">2</a></li>
          <li><a class="dropdown-item" href="#">3</a></li>
          <li><a class="dropdown-item" href="#">4</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// 引入元件(component)
  // import axios from "axios";
  import ShopPageButtons from "../components/ShopPageButtons.vue"
  import ProductItem from "../components/ProductItem.vue"

  export default {
    components: {
      ShopPageButtons,
      ProductItem,
    },
    data () {
      return {
        data: this.$store.state.data,
      }
    }
  }
</script>
<!-- <style scoped lang="scss">
  @import "../assets/scss/main.scss";
  
  .page_buttons {
      margin-bottom: 50px;
  }

  .page_buttons a {
      text-decoration: none;
  }

  .page_buttons a:hover {
      color: $redColor;
  }

  .dropdown button {
    width: 100%;
    border: solid 1px black;
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 60px;
  }

  .dropdown-menu {
    width: 92%;
    border-radius: 0;
  }

  .dropdown-menu li > a:hover {
    color: white;
    background-color: black;
  }
</style> -->