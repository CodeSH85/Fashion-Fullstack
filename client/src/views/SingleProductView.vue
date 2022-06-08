<template v-on:emit-text="getData">
  <ShopPageButtons />
  <!-- 商品單一詳情頁面 -->
  <div class="container-fluid">
    <div class="row">
      <!-- 商品主資訊 -->
      <div class="main_information col-10 mx-auto d-flex justify-content-evenly 
      flex-md-nowrap flex-sm-wrap">
        <div class="img_container my-md-0 my-sm-3">
          <img src="../../public/images/original.jpg" alt="">
        </div>
        <div class="product_add_cart col-md-6 col-sm-12">
          <div class="name h1 fw-bold my-3">
            印花尖形背心洋裝
          </div>
          <div class="price h3 fw-bold my-3">
            <span>NT$ </span>9,200
          </div>
          <hr class="my-4">
          <!-- 加入購物車前的選單群組 -->
          <div class="selection">
            <div class="items_title h5 fw-bold">
              顏色
            </div>
            <div class="dropdown justify-content-center mt-2 mb-3">
              <button class="btn dropdown-toggle text-start h5 fw-bold py-md-2 py-sm-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                黑
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item my-0" href="#">黑</a></li>
                <li><a class="dropdown-item my-0" href="#">**</a></li>
              </ul>
            </div>
            <div class="items_title h5 fw-bold">
              尺寸
            </div>
            <div class="dropdown justify-content-center mt-2 mb-3">
              <button class="btn dropdown-toggle text-start h5 fw-bold py-md-2 py-sm-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                38
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item my-0" href="#">38</a></li>
                <li><a class="dropdown-item my-0" href="#">**</a></li>
              </ul>
            </div>
            <div class="items_title h5 fw-bold">
              數量
            </div>
            <div class="dropdown justify-content-center mt-2 mb-3">
              <button class="btn dropdown-toggle text-start h5 fw-bold py-md-2 py-sm-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                1
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item my-0" href="#">1</a></li>
                <li><a class="dropdown-item my-0" href="#">2</a></li>
                <li><a class="dropdown-item my-0" href="#">3</a></li>
                <li><a class="dropdown-item my-0" href="#">4</a></li>
                <li><a class="dropdown-item my-0" href="#">5</a></li>
                <li><a class="dropdown-item my-0" href="#">6</a></li>
                <li><a class="dropdown-item my-0" href="#">7</a></li>
                <li><a class="dropdown-item my-0" href="#">8</a></li>
                <li><a class="dropdown-item my-0" href="#">9</a></li>
                <li><a class="dropdown-item my-0" href="#">10</a></li>
              </ul>
            </div>
          </div>
          <router-link to="/bag" type="submit" class="link-dark w-75 d-block mx-md-0 mx-sm-auto">
            <div class="add_cart_button h3 fw-bold text-center py-3 px-3">
              加入購物車
            </div>
          </router-link>
        </div>
      </div>
      <hr class="col-10 mx-auto my-5 d-md-block d-sm-none">
      <!-- 商品副資訊 (商品描述、Model size等) -->
      <div class="second_information col-10 mx-auto my-4 d-flex flex-md-nowrap flex-sm-wrap">
        <div class="description col-md-6 pe-3 col-sm-10 mx-md-0 mx-sm-auto">
          <div class="items_title h3 fw-bold mt-2 mb-4">
            商品描述
          </div>
          <div class="items_content fw-bold my-md-0 my-sm-4">
            高彈性的貼身面料，展露身材曲線，透氣不黏身，版型合身超顯身體曲線，前側尖銳裙擺點綴腿部曲線，展露屬於你的線條。
            印花加入封膠質感印花增加視覺層次，由圖像創作者以邪惡氣味的頑皮風格呈現。
            如您有其他尺寸需求，請選擇「其他」，並於備註欄說明您的胸圍/腰圍(肚臍上方三公分最細處)/肩寬以及身高體重，我們將為您服務。
          </div>
        </div>
        <div class="specification col-md-3 px-5 col-sm-6 mx-md-0 mx-sm-auto">
          <div class="items_title h5 fw-bold my-3">
            商品規格(公分)
          </div>
          <div class="items_content col-6 fw-bold my-md-0 my-sm-4">
            長度：77-95
            胸圍：82
            腰圍：70
            袖長：19.5
          </div>
        </div>
        <div class="material_and_size col-md-3 px-4 col-sm-6 mx-md-0 mx-sm-auto">
          <div class="material">
            <div class="items_title h5 fw-bold my-3">
              商品成分
            </div>
            <div class="items_content col-6 fw-bold pe-5 my-md-0 my-sm-4">
              96% POLY 
              4% Op
            </div>
          </div>
          <div class="size">
            <div class="items_title h5 fw-bold my-3">
              Model Size
            </div>
            <div class="items_content col-6 fw-bold my-md-0 my-sm-4">
              高度：169 cm
              Model is wearing 38
            </div>
          </div>
        </div>
      </div>
      <hr class="col-10 mx-auto my-5">
      <!-- 相關商品推薦 -->
      <div class="suggested_products">
        <div class="title col-10 mx-auto h3 fw-bold mt-2 mb-5">
          相關商品
        </div>
        <!-- 使用SuggestedProduct元件 -->
        <SuggestedProduct />
      </div>
    </div>
  </div>
</template>
<script>
// 引入元件(component)
  import ShopPageButtons from "../components/ShopPageButtons.vue"
  import SuggestedProduct from "../components/SuggestedProduct.vue"

  export default {
    components: {
      ShopPageButtons,
      SuggestedProduct,
    },
    data() {
      return {
        text: '',
      }
    },
    methods: {
      getData(text) {
        console.log('getData');
        this.text=text;
      } 
    }
  }

</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";
  
  .img_container {
    width: 500px;
  }

  .img_container img {
    width: 100%;
  }

  @media screen and ( max-width: 768px ) {
    .img_container {
      width: 90%;
    }

    .price {
      font-size: 32px;
    }
  }

  hr {
    height: 2px;
    background-color: $grayColor;
  }

  .dropdown button {
    width: 30%;
    border: solid 2px $redColor;
    border-left: none;
    border-right: none;
    border-radius: 0;
    box-shadow: none;
  }

  .dropdown-menu {
    width: 30%;
    border-radius: 0;
  }

  .dropdown-menu li > a:hover {
    color: white;
    background-color: black;
  }

  .product_add_cart a {
      text-decoration: none;
      margin: 90px 0;
  }

  .add_cart_button {
    border-top: solid 2px $redColor;
    border-bottom: solid 2px $redColor;
  }

  .add_cart_button:hover {
    color: $redColor;
  }

  @media screen and ( max-width: 768px ) {
    .dropdown button {
      width: 100%;
      font-size: 20px;
    }

    .dropdown-menu {
      width: 100%;
    }
  }
</style>