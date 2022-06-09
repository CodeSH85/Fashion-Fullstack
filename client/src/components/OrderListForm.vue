<template>
  <!-- 放置購物車/訂單商品明細的表格外框 -->
  <div class="container-fluid">
    <div class="row">
      <div class="vw-100">
        <slot name="orderInfo">
          <!-- 插入OrderView/OrderCompletedView當中的訂單編號、總金額等資訊 -->
        </slot>
        <div class="order_list_border col-10 mx-auto px-0">
          <slot name="productBox">
            <!-- 插入OrderView/BagView/OrderCompletedView當中的ProductBox -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";
  
  .row {
    margin-bottom: 180px;
  }

  .order_list_border{
    border-top: solid 2px $grayColor;
    border-bottom: solid 2px $grayColor;
  }
</style>