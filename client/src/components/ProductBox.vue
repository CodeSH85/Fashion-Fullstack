<template>
<div class="container-fluid">
  <div class="row">
      <div class="product_border w-md-100 my-3 px-0 d-flex justify-content-between flex-md-nowrap flex-sm-wrap">
        <div class="img_container mx-md-0 mx-sm-auto my-md-0 my-sm-4">
          <img src="../../public/images/original.jpg" alt="">
        </div>
        <div class="table w-75 my-3 d-flex flex-md-nowrap flex-sm-wrap mx-md-0 mx-sm-auto">
          <div class="table_items col-md-6 col-sm-12">
            <div class="table_row h4 fw-bold py-2 pt-md-2 pt-sm-1 mx-md-2 mx-sm-0">
              印花拼色拉鍊尖型洋裝
            </div>
            <div class="table_cell h4 fw-bold py-3 mx-md-2 mx-sm-0">
              <span>NT$ </span>9,200
            </div>
          </div>
          <div class="table_items col-md-3 col-sm-12">
            <div class="table_row h5 fw-bold py-3 mx-md-2 mx-sm-0">
              數量
            </div>
            <div class="table_cell h5 fw-bold py-2 text-center mx-md-2 mx-sm-0">
              1
            </div>
          </div>
          <div class="table_items col-md-3 col-sm-12 d-md-block d-sm-flex">
            <div class="table_row h5 fw-bold py-3 mx-md-2 mx-sm-0">
              小計
            </div>
            <div class="table_cell_price h5 fw-bold py-md-2 text-center py-sm-3 px-md-0 px-sm-4 mx-md-2 mx-sm-0">
              <span>NT$ </span>9,200
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .product_border {
    border: solid 2px #CC0000; 
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