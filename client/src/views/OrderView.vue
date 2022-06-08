<template>
  <AccountPageButtons />
  <!-- 檢視訂單頁 -->
    <div class="container-fluid">
      <div class="row">
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
<style scoped lang="scss">
  @import "../assets/scss/main.scss";
</style>