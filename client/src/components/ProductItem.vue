<template>
    <div class="img_container px-0 py-2" @click="redirectProduct(id)">
      <img :src="imgUrl" :title="name">
    </div>
</template>
<script>
export default {
  // props: ["all"],
  props: {
    'id':Number,
    'name':String,
    'category':String,
    'series':String,
    'material':String,
    'price':Number,
    'description':String,
    'color':String,
    'specification':String,
    'clothesSize':String,
    'modelSize':String,
    'quantity':Number,
    'imgUrl':String,
  },
  methods:{
    redirectProduct: function(id){
      console.log('redirectProduct')
      this.$router.push(`/shop/${id}`) //推送指定字串(網址)到router資料夾，並被命名為:productId
      this.$emit('emit-text', this.id)
    }
  }
}
</script>
<style scoped>

  .img_container {
      width: 273px;
      height: 240px;
      cursor: pointer;
  }

  .img_container img {
      width: 100%;
      height: 100%;
      object-fit: none;
      object-position: 50% 33%;
  }

  @media screen and ( max-width: 768px ) {
    .img_container {
      width: 219px;
      height: 192px;
    }
  }
</style>