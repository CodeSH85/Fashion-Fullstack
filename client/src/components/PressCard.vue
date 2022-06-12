<template>
  <div :class="[{border: has_border},'press-card']">
    <div class="image-box">
      <img class="press-img" :src="img" alt="picture" />
    </div>
    <h3 class="press-title">{{ title }}</h3>
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
};
</script>
<style scoped>
.border{
    border: 3px solid #f30303;
  }
div.press-card .image-box {
  width: 100%;
  min-width: 275px;
  display: flex;
}
.press-img {
  width: 263px;
  display: block;
  margin: 1.5rem;
}

.press-card {
  /* width: 24%; */
  text-align: center;
  /* margin: 1px; */
  cursor: pointer;
  display: block;
}
.press-title{
  color:rgb(191, 182, 182);
}
</style>
