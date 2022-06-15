<template>
  <AccountPageButtons />
  <!-- 檢視訂單頁 -->
  <!-- 訂單紀錄內沒東西時的畫面 (透過v-if判斷做畫面切換) -->
  <div class="container-fluid" v-if="order.length === 0">
    <div class="row">
      <div class="empty_order col-6 mx-auto text-center">
        <div class="h3 fw-bold my-3">尚無訂單紀錄</div>
      </div>
    </div>
  </div>
  <!-- 訂單紀錄內有東西時的畫面 (透過v-if判斷做畫面切換) -->
    <div class="container-fluid" v-if="order.length !== 0">
      <div class="row">
        <!-- 使用OrderListForm元件 -->
        <OrderListForm>
          <!-- 在OrderListForm元件插入訂單編號、總金額等資訊 -->
          <template v-slot:orderInfo>
            <div class="row">
              <div class="col-10 h3 fw-bold mx-auto"><span>訂單編號：</span>{{ order.orderId }}</div>
              <div class="col-10 h4 fw-bold mx-auto my-3 d-flex justify-content-md-start 
          justify-content-sm-between">
                <div>
                  <span>合計：</span><span class="py-0 px-4">{{ order.allAmount }}件商品</span>
                </div>
                <div class="ps-5 pe-3">
                  <span>NT$ {{ order.total }}</span>
                </div>
              </div>
            </div>
          </template>
          <!-- 在OrderListForm元件插入訂購商品資訊(ProductBox) -->
          <template v-slot:productBox>
            <!-- 使用ProductBox元件 -->
            <template v-for="items in orderItems" :key="items">
              <ProductBox v-bind="items">
                <template v-slot:amount>
                  {{ items.number }}
                </template>
                <template v-slot:delete>
                  <!-- 檢視訂單頁不用顯示刪除按鈕，因此空白 (其實直接不寫也可以) -->
                </template>
              </ProductBox>
            </template>
          </template>
        </OrderListForm>
      </div>
    </div>
</template>
<script>
// 引入元件(component)
  import AccountPageButtons from "../components/AccountPageButtons.vue"
  import OrderListForm from "../components/OrderListForm.vue"
  import ProductBox from "../components/ProductBox.vue"

  export default {
    components: {
      AccountPageButtons,
      OrderListForm,
      ProductBox,
    },
    data () {
      return { // order是整個訂單的總資訊，orderItems是訂單當中訂購商品的資訊
        order: this.$store.state.userOrder,
        orderItems: this.$store.state.userOrder.orderItems,
      }
    },
  }
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  .empty_order {
    margin: 80px 0 180px 0;
  }
</style>
