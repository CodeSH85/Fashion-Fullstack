<template>
  <div class="container-fluid">
    <div class="row w-75 mx-auto d-flex flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="img_container col px-0 py-2">
        <a href="#" class="">
          <img src="../../public/images/original-3.jpg" alt="">
        </a>
      </div>
      <!-- 示意圖先放兩張圖片，套{{}}之後留下一個即可 -->
      <div class="img_container col px-0 py-2">
        <a href="#" class="">
          <img src="../../public/images/original-3.jpg" alt="">
        </a>
      </div>
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