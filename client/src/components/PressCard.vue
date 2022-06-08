<template>
     <div :class="[{border: has_border}, 'press-card']">
         <div class="image-box">
           <img class="card-img-top" :src="img"  alt="picture">
         </div>
            <!-- <h5 class="card-title">{{ title }}</h5> -->
           <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    'id': Number,
    'title': String,
    'img': String,
  },
  methods: {
    parseImgPath: function(){
      return this.$store.state.pressInfo.img
    }
  }
}
</script>
<style scoped>
  .border{
    border: 5px solid #f3c303;
  }
  div.press-card{
    min-width: 350px;
    width: 24%;
    text-align: center;
    margin: 1px;
    cursor: pointer;
    display: block;
  }
  div.press-card .image-box{
    width: 100%;
    height: 250px;
    display: flex;
  }
 img{
    display: block;
    width: 50%;
    margin: auto;
  }
  small{
    color: #bc0f0f
  }
</style>
