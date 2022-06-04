<template>
  <TopNavbar />
  <div class="container-fluid">
    <div class="row">
      <div class="h1_title d-flex justify-content-center">
        <h1 class="h3 col-md-8 fw-bolder col-sm-3 text-md-nowrap text-sm-wrap text-md-start text-sm-center">
          會員登入 SIGN IN
        </h1>
      </div>
      <form action="" class="">
        <div class="email_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="email" class="email_title h5 mb-2">E-mail</label>
          <input type="email" class="form-control lh-lg" id="account" placeholder="" required>
        </div>
        <div class="password_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="password" class="password_title h5 mb-2">Password</label>
          <input type="password" class="form-control lh-lg" id="password" placeholder="" required>
        </div>
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
          <router-link to="/account" type="submit" class="d-block col-md-3 col-sm-7 mx-md-0 mx-sm-auto mt-md-0 mt-sm-3">
            <div class="sign_in_button h4 fw-bold text-dark text-center py-3 mb-0">SIGN IN</div>
          </router-link>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>
<script>


</script>
<style scoped>
  .h1_title {
    margin-top: 180px;
  }

  input {
    background-color: #EEEEEE;
    border: solid 1px black;
    border-radius: 0;
  }

  .buttons_large_group {
    margin-bottom: 180px;
  }

  .new_account_button {
    border: solid 2px transparent;
  }

  .new_account_button:hover {
    border-bottom: solid 2px #CC0000;
  }

  .forget_password_button {
    border: solid 2px transparent;
  }

  .forget_password_button:hover {
    border-bottom: solid 2px #CC0000;
  }

  /* 要對router-link超連結下任何css要使用a標籤 */
  a { 
    text-decoration: none;
  }

  .sign_in_button {
    border: solid 1px black;
    border-left: none;
    border-right: none;
    background-color: #EEEEEE;
  }

</style>
