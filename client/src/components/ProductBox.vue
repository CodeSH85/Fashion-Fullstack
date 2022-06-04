<template>
<div class="container-fluid">
  <div class="row">
    <!-- <div class="products_center"> -->
      <div class="product_border w-md-100 h-25 my-3 px-0 w-sm-25">
        <div class="img_container float-md-start mx-md-0 mx-sm-auto my-md-0 my-sm-4">
          <img src="../../public/images/original.jpg" alt="">
        </div>
        <div class="d-flex justify-content-end">
          <table class="w-100 mx-3 my-2">
            <tr class="d-md-table-row d-sm-flex flex-md-row">
              <th class="w-50 h4 fw-bold py-3">印花拼色拉鍊尖型洋裝</th>
              <th class="w-25 fw-bold">數量</th>
              <th class="w-25 fw-bold">小計</th>
            </tr>
            <tr class="d-md-table-row d-sm-flex flex-md-row">
              <td class="h4 fw-bold py-3"><span>NT$ </span>9,200</td>
              <td class="h5 fw-bold py-3 text-center">1</td>
              <td class="h5 fw-bold py-3 text-center"><span>NT$ </span>9,200</td>
            </tr>
          </table>
        </div>
      </div>
    <!-- </div> -->
    <!-- flex-md-row flex-sm-column -->
    <!-- d-md-table-row d-sm-block -->
    <!-- d-md-table-row d-sm-flex flex-md-nowrap flex-sm-wrap -->
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
</style>