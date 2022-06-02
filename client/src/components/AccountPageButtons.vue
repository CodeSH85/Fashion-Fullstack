<template>
  <div class="buttons_group">
    <div class="account_data_button">
      <span>/</span><router-link to="/account">會員資料</router-link><span>/</span>
    </div>
    <div class="order_confirm_button">
      <router-link to="/account/order">檢視訂單</router-link><span>/</span>
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

  span {
    margin: 0 60px;
    font-size: 24px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    font-size: 24px;
    color: black;
    font-weight: bold;
  }

  a:hover {
    color: #CC0000;
  }
</style>