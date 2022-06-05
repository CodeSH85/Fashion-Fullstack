<template>
  <!-- 相關商品推薦的元件 -->
  <div class="container-fluid">
    <div class="row">
      <div class="products_group col-9 mx-auto d-flex justify-content-evenly mb-5">
        <!-- 示意圖先放三張圖片，套{{}}之後留下一個即可；RWD時只顯示一張圖片的問題尚未解決 -->
        <a href="">
          <div class="bottom_img_container">
            <img src="../../public/images/original-2.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="bottom_img_container">
            <img src="../../public/images/original-2.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="bottom_img_container">
            <img src="../../public/images/original-2.jpg" alt="">
          </div>
        </a>
      </div> 
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .bottom_img_container {
    width: 320px;
    height: 320px;
  }

  .bottom_img_container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>