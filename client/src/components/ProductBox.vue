<template>
  <div class="products_center">
    <div class="product_border">
      <div class="img_container">
        <img src="../../public/images/original.jpg" alt="">
      </div>
      <div class="product_details_container">
        <table>
          <tr>
            <th class="product_title">印花拼色拉鍊尖型洋裝</th>
            <th class="amount_title">數量</th>
            <th class="single_product_total_title">小計</th>
          </tr>
          <tr>
            <td class="product_price"><span>NT$ </span>9,200</td>
            <td>1</td>
            <td><span>NT$ </span>9,200</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .products_center {
    width: 100%;
  }

  .product_border {
    margin: 20px auto;
    width: 1000px;
    border: solid 2px #CC0000; 
    display: flex;
    /* justify-content: space-between; */
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

  .product_details_container table {
    width: 650px;
    margin: 10px;
    font-size: 22px;
    font-weight: bold;
  }

  .product_title {
    font-size: 28px;
    width: 700px;
    padding-left: 20px;
  }

  .amount_title {
    width: 280px;
  }

  .single_product_total_title {
    width: 320px;
  }

  .product_price {
    font-size: 28px;
    padding-left: 20px;
  }
</style>