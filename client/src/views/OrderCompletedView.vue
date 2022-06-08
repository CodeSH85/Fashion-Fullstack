<template>
  <!-- 完成訂購頁面 -->
  <div class="container-fluid">
    <div class="row">
      <div class="order_completed_title h3 fw-bold d-flex justify-content-center my-5">
        <div>購買成功</div>
      </div>
      <!-- 使用OrderListForm元件 -->
      <OrderListForm>
        <!-- 使用ProductBox元件 -->
        <ProductBox>
          <template v-slot:amount>
            {{ number }}
          </template>
          <template v-slot:delete>
            <!-- 檢視訂單頁不用顯示刪除按鈕，因此空白 (其實直接不寫也可以) -->
          </template>
        </ProductBox>
      </OrderListForm>
      <div class="col-10 mx-auto d-flex justify-content-md-end justify-content-sm-center">
        <router-link to="/shop" type="submit" class="shopping_button col-md-3 link-dark d-block col-sm-12 mb-5">
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
    data(){
      return{
        number: 5,
      }
    },
  }
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  a {
    text-decoration: none;
  }

  a:hover {
    color: $redColor;
  }

  .shopping_button {
    border-top: solid 2px $redColor;
    border-bottom: solid 2px $redColor;
  }
</style>