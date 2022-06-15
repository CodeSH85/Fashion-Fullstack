<template>
  <AccountPageButtons />
  <!-- 檢視訂單頁 -->
    <div class="container-fluid">
      <div class="row">
        <!-- 使用OrderListForm元件 -->
        <OrderListForm>
          <!-- 在OrderListForm元件插入訂單編號、總金額等資訊 -->
          <template v-slot:orderInfo>
            <div class="row">
              <div class="col-10 h3 fw-bold mx-auto"><span>訂單編號：</span>1</div>
              <div class="col-10 h4 fw-bold mx-auto my-3 d-flex justify-content-md-start 
          justify-content-sm-between">
                <div>
                  <span>合計：</span><span class="py-0 px-4">3件商品</span>
                </div>
                <div class="ps-5 pe-3">
                  <span>NT</span>27,600
                </div>
              </div>
            </div>
          </template>
          <!-- 在OrderListForm元件插入訂購商品資訊(ProductBox) -->
          <template v-slot:productBox>
            <!-- 使用ProductBox元件 -->
            <ProductBox>
              <template v-slot:amount>
                {{ number }}
              </template>
              <template v-slot:delete>
                <!-- 檢視訂單頁不用顯示刪除按鈕，因此空白 (其實直接不寫也可以) -->
              </template>
            </ProductBox>
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
    data(){
      return{
        number: 5,
      }
    },
  }
</script>
