<template>
  <AccountPageButtons />
    <div class="order_information">
      <div class="order_number"><span>訂單編號：</span>1</div>
      <div class="total_details">
        <div class="products_amount">
          <span>合計：</span><span class="items_total">3件商品</span>
        </div>
        <div class="order_total">
          <span>NT</span>27,600
        </div>
      </div>
    </div>

    <div class="order_list_border">
      <ProductBox />
    </div>

</template>
<script>
// 引入元件(component)
  import AccountPageButtons from "../components/AccountPageButtons.vue"
  import ProductBox from "../components/ProductBox.vue"

  export default {
    components: {
      AccountPageButtons,
      ProductBox,
    }
  }
</script>
<style scoped>
  .order_information {
    width: 100%;
  }

  .order_number {
    width: 1000px;
    font-size: 28px;
    font-weight: bold;
    margin: 0 auto;
  }

  .total_details {
    width: 1000px;
    font-size: 22px;
    font-weight: bold;
    margin: 10px auto;
    display: flex;
  }

  .items_total {
    padding: 0 50px;
  }

  .order_total {
    padding-left: 30px;
  }

  .order_list_border{
    width: 1000px;
    border-top: solid 2px #767676;
    border-bottom: solid 2px #767676;
    margin: 0 auto 250px auto;
  }
</style>