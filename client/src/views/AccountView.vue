<template>
  <AccountPageButtons />
  <!-- 會員資料頁 -->
  <div class="container-fluid">
    <div class="row">
      <div class="account_group col-md-4 mx-sm-auto mb-md-4 d-flex justify-content-sm-between 
      align-items-sm-center col-sm-8">
        <div class="account_title">
          <h4>E-mail</h4>
        </div>
        <div class="account_email">
          <h4>example@test.com</h4>
        </div>
      </div>
      <!-- 按鈕 (buttons_center用來給寬度和置中) -->
      <div class="buttons_center col-md-12 my-sm-5">
        <div class="buttons_list mx-sm-auto d-flex flex-sm-wrap justify-content-sm-center 
        col-md-4 col-sm-6">
          <router-link to="/login" class="link-dark d-md-block col-md-5 text-center my-sm-5 col-sm-10">
            <div class="log_out_button h4 py-3 px-4 mx-auto mb-0">
              Log Out
            </div>
          </router-link>
          <router-link to="#" class="link-dark d-md-block col-md-8 text-center my-5">
            <div class="delete_button h4 py-3 px-4 mx-auto mb-0">
              DELETE ACCOUNT
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入元件(component)
  import AccountPageButtons from "../components/AccountPageButtons.vue"

  export default {
    components: {
      AccountPageButtons,
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";
  
  .log_out_button {
  border-top: solid 1px black;
  border-bottom: solid 1px black;
}

.log_out_button:hover {
  color: $redColor;
  border: solid 1px $redColor;
  border-left: none;
  border-right: none;
}

.delete_button {
  color: $redColor;
  border-top: solid 1px $redColor;
  border-bottom: solid 1px $redColor;
}

.delete_button:hover {
  text-decoration: underline;
}
  
</style>