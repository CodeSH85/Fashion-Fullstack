<template>
  <!-- 放置購物車/訂單商品明細的表格外框 -->
  <div class="container-fluid">
    <div class="row">
      <div class="vw-100">
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
        <div class="order_list_border col-10 mx-auto px-0">
          <slot>
            <!-- 插入OrderView/BagView當中的ProductBox -->
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