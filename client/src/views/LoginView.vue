<template>
  <TopNavbar />
  <!-- 登入頁面 -->
  <div class="container-fluid">
    <div class="row">
      <div class="h1_title d-flex justify-content-center">
        <h1 class="h3 col-md-8 fw-bolder col-sm-3 text-md-nowrap text-sm-wrap text-md-start 
        text-sm-center">
          會員登入 SIGN IN
        </h1>
      </div>
      <!-- 表格 -->
      <form action="/login" method="post" class="">
        <div class="email_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="email" class="email_title h5 mb-2">E-mail</label>
          <input type="email" class="form-control lh-lg" id="account" placeholder="" required>
        </div>
        <div class="password_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="password" class="password_title h5 mb-2">Password</label>
          <input type="password" class="form-control lh-lg" id="password" placeholder="" required>
        </div>
        <!-- 表格按鈕 (large_group是最外面那層，middle_group是另外包申請帳號/忘記密碼的那層) -->
        <div class="buttons_large_group col-8 mx-auto d-flex justify-content-md-between mt-5 
        flex-md-row flex-sm-column-reverse flex-md-nowrap flex-sm-wrap">
          <div class="buttons_middle_group col-md-4 d-flex col-sm-6 flex-md-nowrap flex-sm-wrap 
          mx-md-0 mx-sm-auto mt-md-0 mt-sm-4">
            <div class="col-md-5 col-sm-12 h5 fw-bold my-3 mb-0 text-md-start text-sm-center">
              <router-link to="/account/signup" type="submit" class="new_account_button text-dark pb-1">
                申請帳號
              </router-link>
            </div>
            <div class="col-md-5 col-sm-12 h5 fw-bold my-3 mb-0 text-md-start text-sm-center">
              <router-link to="#" type="submit" class="forget_password_button text-dark pb-1">
                忘記密碼
              </router-link>
            </div>
          </div>
          <router-link to="/account" type="submit" class="d-block col-md-3 col-sm-7 
          mx-md-0 mx-sm-auto mt-md-0 mt-sm-3">
            <button class="sign_in_button h4 fw-bold link-dark text-center py-3 mb-0" type="submit">SIGN IN</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>
<script>


</script>
<!-- <style scoped lang="scss">
  @import "../assets/scss/main.scss";
  
  .h1_title {
    margin-top: 180px;
  }

  input {
    background-color: transparent;
    border: solid 1px black;
    border-radius: 0;
  }

  .buttons_large_group {
    margin-bottom: 100px;
  }

  .new_account_button {
    border: solid 2px transparent;
  }

  .new_account_button:hover {
    border-bottom: solid 2px $redColor;
  }

  .forget_password_button {
    border: solid 2px transparent;
  }

  .forget_password_button:hover {
    border-bottom: solid 2px $redColor;
  }

  /* 要對router-link超連結下任何css要使用a標籤 */
  a { 
    text-decoration: none;
  }

  .sign_in_button {
    border: solid 1px black;
    border-left: none;
    border-right: none;
    background-color: transparent;
  }

  .sign_in_button:hover {
    color: $redColor;
    border: solid 1px $redColor;
    border-left: none;
    border-right: none;
  }
</style> -->
