<template>
  <!-- 完成訂購頁面 -->
  <div class="container-fluid">
    <div class="row">
      <div class="order_completed_title h3 fw-bold d-flex justify-content-center">
        <div>購買成功</div>
      </div>
      <!-- 使用OrderListForm元件 -->
      <OrderListForm>
        <!-- 在OrderListForm元件插入訂單編號、總金額等資訊 -->
        <template v-slot:orderInfo>
          <div class="row">
            <div class="col-10 h3 fw-bold mx-auto"><span>訂單編號：</span>{{ orderId }}</div>
            <div class="col-10 h4 fw-bold mx-auto my-3 d-flex justify-content-md-start 
          justify-content-sm-between">
              <div>
                <span>合計：</span><span class="py-0 px-4">{{ allAmount }}件商品</span>
              </div>
              <div class="ps-5 pe-3">
                <span>NT$ {{ total }}</span>
              </div>
            </div>
          </div>
        </template>
        <!-- 在OrderListForm元件插入訂購商品資訊(ProductBox) -->
        <template v-slot:productBox>
          <!-- 使用ProductBox元件 -->
          <template v-for="products in checkList" :key="products">
          <ProductBox v-bind="products">
            <template v-slot:amount>
              {{ products.number }}
            </template>
            <template v-slot:delete>
              <!-- 檢視訂單頁不用顯示刪除按鈕，因此空白 (其實直接不寫也可以) -->
            </template>
          </ProductBox>
          </template>
        </template>
      </OrderListForm>
      <div class="col-10 mx-auto d-flex justify-content-md-end justify-content-sm-center">
        <router-link to="/shop" type="submit" class="shopping_button col-md-3 link-dark d-block col-sm-12" @click="saveOrder(checkList)">
          <div class="h4 fw-bold text-center py-3 px-5 m-0">
            繼續購物
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
        orderId: '',
        products: this.$store.state.cart,
        checkList: [],
      }
    },
    methods: {
      // 取得商品數量不為0的商品資訊並放入checkList
      getOrder () { 
        var checkItems = this.products.filter (function (p) {
          return p.number > 0
        });
        this.checkList = checkItems
        // console.log(checkItems)
      },
      // 結帳之後清空原購物車商品
      cleanCart () {
        this.$store.commit ('resetCart', [])
      },
      // 紀錄已成立訂單
      saveOrder: function (products) {
      this.$store.commit ('saveOrder', {
        orderItems: products,
        orderId: this.orderId,
        allAmount: this.allAmount,
        total: this.total,
      })
      }
    },
    computed: {
      // 計算訂單中的商品總數 (從陣列中取出資料，並使用for迴圈做加總)
      allAmount () {
        let checkedAmount = this.checkList.length;
        // console.log(productsAmount);
        let itemsTotal = 0;
        for (var i = 0; i < checkedAmount; i++ ) {
          itemsTotal += this.checkList[i].number;
        }
        return itemsTotal
      },
      // 此訂單中所有商品的總金額
      total () {
        return this.checkList
        .reduce ((sum, p) => (sum + p.sum), 0)
      },
    },
    created () { // 產生訂單編號及分別執行getOrder和cleanCart
      this.orderId = this.$route.params.orderId;
      this.getOrder();
      this.cleanCart();
    }
  }
</script>
