<template>
  <div class="buttons_group">
    <div class="shop_items">
      <span>/</span><router-link to="#">ALL</router-link>
    </div>
    <div class="shop_items">
      <router-link to="#">TOP</router-link>
    </div>
    <div class="shop_items">
      <router-link to="#">BOTTOM</router-link>
    </div>
    <div class="shop_items">
      <router-link to="#">DRESS</router-link>
    </div>
    <div class="shop_items">
      <router-link to="#">JUMPSUIT</router-link>
    </div>
    <div class="shop_items">
      <router-link to="#">SALE</router-link><span>/</span>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .buttons_group {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 95px;
    margin-bottom: 127px;
  }

  .shop_items {
    padding: 0 20px;
  }

  .shop_items a:hover {
    color: #CC0000;
  }

  span {
    margin: 0 30px;
    font-size: 24px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    font-size: 24px;
    color: black;
    font-weight: bold;
  }
</style>