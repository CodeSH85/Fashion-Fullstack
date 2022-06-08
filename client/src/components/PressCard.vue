<template>
  <div :class="[{ border: has_border }, 'press-card']">
    <div class="image-box">
      <img class="press-img" :src="img" alt="picture" />
    </div>
    <!-- <h5 class="card-title">{{ title }}</h5> -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    id: Number,
    title: String,
    img: String,
  },
  methods: {
    parseImgPath: function () {
      return this.$store.state.pressInfo.img;
    },
  },
};
</script>
<style scoped>
div.press-card {
  /* width: 24%; */
  text-align: center;
  /* margin: 1px; */
  cursor: pointer;
  display: block;
}
div.press-card .image-box {
  width: 100%;
  min-width: 275px;
  /* height: 380px; */
  display: flex;
}
img {
  width: 263px;
  height: 329px;
  display: block;
  margin: auto;
}
small {
  color: #bc0f0f;
}
</style>
