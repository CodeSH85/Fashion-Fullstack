<template>
  <AccountPageButtons />
    <div class="container-fluid">
      <div class="row">
        <div class="vw-100">
          <div class="w-75 h3 fw-bold mx-auto"><span>訂單編號：</span>1</div>
          <div class="w-75 h4 fw-bold mx-auto my-3 d-flex justify-content-md-start justify-content-sm-between">
          <div>
            <span>合計：</span><span class="py-0 px-4">3件商品</span>
          </div>
          <div class="ps-5 pe-3">
            <span>NT</span>27,600
          </div>
        </div>
      </div>
      <div class="order_list_border w-75 mx-auto">
        <ProductBox />
      </div>
    </div>
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
  .order_list_border{
    border-top: solid 2px #767676;
    border-bottom: solid 2px #767676;
    margin-bottom: 250px;
  }
</style>