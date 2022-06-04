<template>
  <div class="container-fluid">
    <div class="row w-50 mx-auto">
      <div class="buttons_group">
        <div class="h4 d-flex justify-content-center">
          <span class="px-3 fw-bold">/</span>
          <div class="shop_items col px-3">
            <router-link to="#" class="link-dark fw-bold">ALL</router-link>
          </div>
          <div class="shop_items col px-3">
            <router-link to="#" class="link-dark fw-bold">TOP</router-link>
          </div>
          <div class="shop_items col px-3">
            <router-link to="#" class="link-dark fw-bold">BOTTOM</router-link>
          </div>
          <div class="shop_items col px-3">
            <router-link to="#" class="link-dark fw-bold">DRESS</router-link>
          </div>
          <div class="shop_items col px-3">
            <router-link to="#" class="link-dark fw-bold">JUMPSUIT</router-link>
          </div>
          <div class="shop_items col px-3">
            <router-link to="#" class="link-dark fw-bold">SALE</router-link>
          </div>
          <span class="px-3 fw-bold">/</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .buttons_group {
    margin-top: 95px;
    margin-bottom: 127px;
  }

  .shop_items a:hover {
    color: #CC0000;
  }

  a {
    text-decoration: none;
  }
</style>