<template>
  <!-- 相關商品推薦的元件 -->
  <div class="container-fluid">
    <div class="row">
      <div class="products_group col-9 mx-auto d-flex justify-content-evenly mb-5">
        <!-- 示意圖先放三張圖片，套{{}}之後留下一個即可；RWD時只顯示一張圖片的問題尚未解決 -->
          <div class="bottom_img_container" @click="redirectProduct(getRecommend.id)">
            <img :src="getRecommend.imgUrl" :title="getRecommend.name">
          </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default{

  methods: {
    redirectProduct: function (id) {
      this.$router.push(`/shop/${id}`)
    },
  },
  computed:{
    // 取得推薦商品的詳細資訊
    getRecommend () {
      return this.$store.getters.getRecommendedProducts
    },
  },
}

</script>
<style scoped>
  .bottom_img_container {
    width: 320px;
    height: 320px;
    cursor: pointer;
  }

  .bottom_img_container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>