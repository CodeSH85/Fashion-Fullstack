<template>
  <ShopPageButtons />
  <!-- 商品單一詳情頁面 -->
  <div class="singleproduct container-fluid">
    <div class="row">
      <!-- 商品主資訊 -->
      <div class="main_information col-10 mx-auto d-flex justify-content-evenly 
      flex-md-nowrap flex-sm-wrap">
        <div class="img_container my-md-0 my-sm-3">
          <img :src="getProduct.imgUrl" :title="getProduct.name">
        </div>
        <form action="/bag" method="post" class="product_add_cart col-md-6 col-sm-12">
          <div class="name h1 fw-bold my-3">
            {{ getProduct.name }}
          </div>
          <div class="price h3 fw-bold my-3">
            <span>NT$ </span>{{ getProduct.price }}
          </div>
          <hr class="my-4">
          <!-- 加入購物車前的選單群組 -->
          <div class="selection">
            <div class="items_title h5 fw-bold">
              顏色
            </div>
            <!-- 下拉式選單 (Bootstrap) -->
            <div class="dropdown justify-content-center mt-2 mb-3">
              <button class="btn dropdown-toggle text-start h5 fw-bold py-md-2 py-sm-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {{ getProduct.color[0] }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item my-0" href="#">{{ getProduct.color }}</a></li>
              </ul>
            </div>
            <div class="items_title h5 fw-bold">
              尺寸
            </div>
            <!-- 下拉式選單 (Bootstrap) -->
            <div class="dropdown justify-content-center mt-2 mb-3">
              <button class="btn dropdown-toggle text-start h5 fw-bold py-md-2 py-sm-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                38
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item my-0" href="#">{{ getProduct.clothesSize }}</a></li>
              </ul>
            </div>
            <div class="items_title h5 fw-bold">
              數量
            </div>
            <!-- 下拉式選單 (select) -->
            <div class="dropdown justify-content-center mt-2 mb-3">
              <select v-model.number="selectedNumber" class="dropdown-list text-start fw-bold py-md-2 py-sm-3" name="" id="">
                <option class="d-none" value="">請選擇</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <!-- 原Bootstrap的下拉式選單 -->
              <!-- <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item my-0" type="number" href="#">1</a></li>
                <li><a class="dropdown-item my-0" type="number" href="#">2</a></li>
                <li><a class="dropdown-item my-0" type="number" href="#">3</a></li>
                <li><a class="dropdown-item my-0" type="number" href="#">4</a></li>
                <li><a class="dropdown-item my-0" type="number" href="#">5</a></li>
                <li><a class="dropdown-item my-0" href="#">6</a></li>
                <li><a class="dropdown-item my-0" href="#">7</a></li>
                <li><a class="dropdown-item my-0" href="#">8</a></li>
                <li><a class="dropdown-item my-0" href="#">9</a></li>
                <li><a class="dropdown-item my-0" href="#">10</a></li>
              </ul> -->
            </div>
          </div>
          <router-link to="/bag" type="submit" class="link-dark w-75 d-block mx-md-0 mx-sm-auto" @click="addCart(getProduct)">
            <div class="add_cart_button h3 fw-bold text-center py-3 px-3">
              加入購物車
            </div>
          </router-link>
        </form>
      </div>
      <hr class="col-10 mx-auto my-5 d-md-block d-sm-none">
      <!-- 商品副資訊 (商品描述、Model size等) -->
      <div class="second_information col-10 mx-auto my-4 d-flex flex-md-nowrap flex-sm-wrap">
        <div class="description col-md-6 pe-3 col-sm-10 mx-md-0 mx-sm-auto">
          <div class="items_title h3 fw-bold mt-2 mb-4">
            商品描述
          </div>
          <div class="items_content fw-bold my-md-0 my-sm-4">
            {{ getProduct.description }}
          </div>
        </div>
        <div class="specification col-md-3 px-5 col-sm-6 mx-md-0 mx-sm-auto">
          <div class="items_title h5 fw-bold my-3">
            商品規格(公分)
          </div>
          <div class="items_content col-6 fw-bold my-md-0 my-sm-4">
            {{ getProduct.specification }}
          </div>
        </div>
        <div class="material_and_size col-md-3 px-4 col-sm-6 mx-md-0 mx-sm-auto">
          <div class="material">
            <div class="items_title h5 fw-bold my-3">
              商品成分
            </div>
            <div class="items_content col-6 fw-bold pe-5 my-md-0 my-sm-4">
              {{ getProduct.material }}
            </div>
          </div>
          <div class="size">
            <div class="items_title h5 fw-bold my-3">
              Model Size
            </div>
            <div class="items_content col-6 fw-bold my-md-0 my-sm-4">
              {{ getProduct.modelSize }}
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
        selectedNumber: '',
      }
    },
    methods: {
      // 判斷存貨
      addCart: function(product){
      product.number = this.selectedNumber;

      if(product.quantity - product.number < 0){
        alert('存貨不足')
        return;
      }
      this.$store.commit('addCart', {
        product: product,
        number: this.selectedNumber,
      })
      alert('已加入購物車')
      console.log(product)
      }
    },
    computed:{
      getProduct (){
        return this.$store.getters.getProduct(parseInt(this.$route.params.productId))
      }
    },
  }

</script>