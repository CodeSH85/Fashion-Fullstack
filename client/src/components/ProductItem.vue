<template>
  <!-- 商品總覽分類頁面的商品圖片元件 -->
  <div class="container-fluid">
    <div class="row w-75 mx-auto d-flex flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-4">
      <router-link to="/shop/:id" class="img_container col px-0 py-2">
        <div>
          <img src="../../public/images/original-3.jpg" alt="">
        </div>
      </router-link>
      <!-- 示意圖先放兩張圖片，套{{}}之後留下一個即可 -->
      <router-link to="/shop/:id" class="img_container col px-0 py-2">
        <div>
          <img src="../../public/images/original-3.jpg" alt="">
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .img_container {
      width: 25%;
      height: 25%;
  }

  .img_container img {
      width: 100%;
      height: 100%;
  }

  @media screen and ( max-width: 768px ) {
    .img_container {
      width: 50%;
      height: 50%;
    }
  }
</style>