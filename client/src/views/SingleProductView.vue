<template>
  <ShopPageButtons @backToPage="backToCategoryPage"></ShopPageButtons>
  <!-- 商品單一詳情頁面 -->
  <div class="singleproduct container-fluid">
    <div class="row">
      <!-- 商品主資訊 -->
      <div class="main_information col-10 mx-auto d-flex justify-content-evenly 
      flex-md-nowrap flex-sm-wrap">
        <!-- Vue.js 的 transition 用法 -->
        <transition-group tag="div" name="right-in" class="img_container my-md-0 my-sm-3"
        v-for="(image, index) in getProduct.imgUrl" :key="index" v-show="index === showImg">
          <img :src="image">
        </transition-group>
        <form action="/bag" method="post" class="product_add_cart col-md-6 col-sm-12">
          <div class="name h1 fw-bold my-3">
            {{ getProduct.name }}
          </div>
          <div class="price h3 fw-bold my-3">
            <span>NT$ </span>{{ getProduct.price }}
          </div>
          <hr class="my-4 mx-0">
          <!-- 加入購物車前的選單群組 -->
          <div class="selection">
            <div class="items_title h5 fw-bold">
              顏色
            </div>
            <!-- 下拉式選單 -->
            <div class="dropdown justify-content-center mt-2 mb-3">
              <select v-model="color" name="" id="" class="dropdown-list text-start fw-bold py-md-2 py-sm-3">
                <option :value="''" class="d-none">請選擇</option>
                <option :value="color" v-for="(color, key) in getProduct.color" :key="key">
                {{ color }}
                </option>
              </select>
            </div>
            <div class="items_title h5 fw-bold">
              尺寸
            </div>
            <!-- 下拉式選單 -->
            <div class="dropdown justify-content-center mt-2 mb-3">
              <select v-model="size" name="" id="" class="dropdown-list text-start fw-bold py-md-2 py-sm-3">
                <option :value="''" class="d-none">請選擇</option>
                <option :value="size" v-for="(size, key) in getProduct.clothesSize" :key="key">
                {{ size }}
                </option>
              </select>
            </div>
            <div class="items_title h5 fw-bold">
              數量
            </div>
            <!-- 下拉式選單 -->
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
            </div>
          </div>
          <router-link to="" type="submit" class="link-dark w-75 d-block mx-md-0 mx-sm-auto" @click="addCart(getProduct)">
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
  // import axios from "axios"
  export default {
    components: {
      ShopPageButtons,
      SuggestedProduct,
    },
    data () {
      return {
        color: '',
        size: '',
        selectedNumber: '',
        showImg: 0,
      }
    },
    mounted () {
        // axios.post("http://localhost:3000/api/getProduct/:productId")
        // .then(async(res)=>{
        //   await function(item){
        //     if(item.id == this.productId){
        //       this.productInfo.number = item.productentry.number
        //       this.productInfo.url = item.url
        //     }
        //   }
        // })

      // 圖片輪播器定時
      setInterval (this.setShowImg, 3000);
    },
    methods: {
      // 判斷存貨、是否選擇規格之防呆提醒
      addCart: function (product) {
        
        product.color = this.color;
        product.size = this.size;
        product.number = this.selectedNumber;
        
        if (product.color === '' && product.size === '' && product.number === '') {
          alert ('請選擇顏色、尺寸和數量')
          return;
        } else if (product.color === '' && product.size === '') {
          alert ('請選擇顏色和尺寸')
          return;
        } else if (product.number === '') {
          alert ('請選擇數量')
          return;
        } else if (product.color === '') {
          alert ('請選擇顏色')
          return;
        } else if (product.size === '') {
          alert ('請選擇尺寸')
          return;
        } else if (product.quantity - product.number < 0) {
          alert ('存貨不足')
          return;
        } else {
          this.$store.commit ('addCart', {
            product: product,
            color: this.color,
            size: this.size,
            number: this.selectedNumber,
        })
          alert ('已加入購物車')
        }
      },
      // 圖片輪播器函式
      setShowImg (changeIdx = 1) {
        switch (true) {
          case changeIdx === 1 && this.showImg === this.getProduct.imgUrl.length - 1:
            this.showImg = 0;
            break;
          case changeIdx === -1 && this.showImg === 0:
            this.showImg = this.getProduct.imgUrl.length - 1;
            break;
          default:
            this.showImg = this.showImg + changeIdx;
            break;
        }
      },
    },
    computed: {
      // 取得點選商品的詳細資訊
      getProduct () {
        return this.$store.getters.getProduct (parseInt(this.$route.params.productId))
      },
    },
  }
</script>
    mounted(){
        axios.post("http://localhost:3000/api/getProduct/:productId", data)
        .then(async(res)=>{
          await function(item){
            if(item.id == this.productId){
              this.productInfo.number = item.productentry.number
              this.productInfo.url = item.url
            }
          }
        }) 
    }
  }
</script>
