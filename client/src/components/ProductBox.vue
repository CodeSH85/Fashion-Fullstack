<template>
  <!-- 訂單相關的商品明細元件 -->
  <div class="container-fluid">
    <div class="row">
      <!-- 單項商品紅色外框 -->
      <div class="product_border col-md-12 my-3 px-0 d-flex justify-content-between flex-md-nowrap flex-sm-wrap">
        <div class="img_container col-3 mx-md-0 mx-sm-auto my-md-0 my-sm-4">
          <img :src="imgUrl" :title="name">
        </div>
        <!-- 商品右半部購買資訊 -->
        <div class="col-10 my-3 d-flex flex-md-nowrap flex-sm-wrap ms-md-4 me-md-0 mx-sm-auto">
          <!-- ⬆️上面這一行 的class="table"先拿掉，因為會有預設黑線條（top-border） -->
          <!-- 品項和單價 -->
          <div class="table_items col-md-4 col-sm-12">
            <div class="table_row h4 fw-bold py-2 pt-md-2 pt-sm-1 mx-md-2 mx-sm-3">
              <span class="me-3">{{ name }}</span>
              <span>{{ color }}</span>
            </div>
            <div class="table_cell py-3 mx-md-2 mx-sm-3">
              <span class="h5 fw-bold me-4">尺寸 {{ size }}</span>
              <span class="h4 fw-bold">NT$ {{ price }}</span>
            </div>
          </div>
          <!-- 購買數量 -->
          <div class="table_items col-md-2 col-sm-12 mx-2">
            <div class="table_row h5 fw-bold py-3 mx-md-2 mx-sm-2">
              數量
            </div>
            <div class="table_cell h5 fw-bold py-2 text-center mx-md-2 mx-sm-0">
              <slot name="amount">
                <!-- 插入OrderView的購買數量 -->
              </slot>
            </div>
          </div>
          <!-- 金額總計 -->
          <div class="table_items col-md-4 col-sm-10 d-md-block d-sm-flex">
            <div class="table_row h5 fw-bold py-3 mx-md-2 mx-sm-3">
              小計
            </div>
            <div class="table_cell_price h5 fw-bold py-md-2 text-center py-sm-3 px-md-0 px-sm-4 
            mx-md-2 mx-sm-0">
              <span>NT$ </span>{{ sum }}
            </div>
          </div>
          <!-- 刪除購物車商品按鈕 -->
          <div class="delete_button col-md-1 col-sm-2 d-md-block d-sm-flex align-items-center">
            <slot name="delete">
              <!-- 插入BagView的刪除按鈕 -->
            </slot>
          <div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  props: {
    'id':Number,
    'name':String,
    'category':String,
    'series':String,
    'material':String,
    'price':Number,
    'description':String,
    'color':String,
    'size':String,
    'specification':String,
    'clothesSize':String,
    'modelSize':String,
    'quantity':Number,
    'imgUrl':String,
    'sum': Number,
  },
  methods: {

  },
  computed: {
        
  }
}
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";
  
  .product_border {
    border: solid 2px $redColor; 
  }

  .img_container {
    width: 200px;
    height: 200px;
  }

  .img_container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .table{
    border-top: none!important
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    .img_container {
      width: 380px;
      height: 380px;
    }
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    .table_cell_price {
      font-size: 30px;
    }
  }
</style>