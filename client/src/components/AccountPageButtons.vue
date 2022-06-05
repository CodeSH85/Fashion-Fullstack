<template>
  <!-- 會員資料頁/檢視訂單頁上方的按鈕群組元件 -->
  <div class="container-fluid">
    <div class="row mx-md-0 mx-sm-auto">
      <div class="buttons_group d-flex justify-content-center">
        <div class="account_data_button col-md-6 col-sm-6 text-end">
          <span class="h4 fw-bold my-0 mx-5">/</span>
          <router-link to="/account" class="h4 link-dark fw-bold">會員資料</router-link>
        </div>
        <span class="h4 d-block fw-bold my-0 mx-5">/</span>
        <div class="order_confirm_button col-md-6 col-sm-6">
          <router-link to="/account/order" class="h4 link-dark fw-bold">檢視訂單</router-link>
          <span class="h4 fw-bold my-0 mx-5">/</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  .buttons_group {
    margin-top: 95px;
    margin-bottom: 110px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: $redColor;
  }
</style>