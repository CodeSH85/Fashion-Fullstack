<template>
  <ShopPageButtons v-on:tabItem="getTab"></ShopPageButtons>
  <!-- 商品總覽分類頁面 -->
  <CategoryAll v-if=" status === 'ALL' "></CategoryAll>
  <CategoryTop v-if=" status === 'TOP' "></CategoryTop>
  <CategoryBottom v-if=" status === 'BOTTOM' "></CategoryBottom>
  <CategoryDress v-if=" status === 'DRESS' "></CategoryDress>
  <CategoryJumpsuit v-if=" status === 'JUMPSUIT' "></CategoryJumpsuit>
  <CategorySale v-if=" status === 'SALE' "></CategorySale>
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
      <div class="dropdown mx-auto d-md-none d-sm-flex justify-content-center my-4">
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
  import CategoryAll from "../components/CategoryAll.vue"
  import CategoryTop from "../components/CategoryTop.vue"
  import CategoryBottom from "../components/CategoryBottom.vue"
  import CategoryDress from "../components/CategoryDress.vue"
  import CategoryJumpsuit from "../components/CategoryJumpsuit.vue"
  import CategorySale from "../components/CategorySale.vue"
  export default {
    components: {
      ShopPageButtons,
      CategoryAll,
      CategoryTop,
      CategoryBottom,
      CategoryDress,
      CategoryJumpsuit,
      CategorySale,
    },
    data () {
      return {
        data: this.$store.state.data,
        productData: [],
        status: 'ALL',
      }
    },
    methods: {
      getTab (status) {
        this.status = status
      },
    },
    mounted(){
      // axios.get("http://localhost:3001/api/getAllProducts")
      // .then( res => (this.productData = res.data) )
      // .catch(function (error) { 
      //   console.log(error)
      // });
    }
  }
</script>
