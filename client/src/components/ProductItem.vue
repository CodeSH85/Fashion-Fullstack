<template>
    <div class="img_container px-0 py-2" @click="redirectProduct(id)">
      <img :src="imgUrl" :title="name">
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
    'specification':String,
    'clothesSize':String,
    'modelSize':String,
    'quantity':Number,
    'imgUrl':String,
  },
  methods:{
    redirectProduct: function(id){
      this.$router.push(`/shop/${id}`)
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