<template>
  <TopNavbar />

  <div class="container-fluid">
    <div class="row">
      <div class="login_box">
        <div class = "h1_title">
          <h1>
            <span>會員登入 </span><span>SIGN IN</span>
          </h1>
        </div>
        <div class="inputs_group col">
          <div class="email_block">
            <label for="email">E-mail</label>
            <input type="email" required>
          </div>
          <div class="password_block">
            <label for="password">Password</label>
            <input type="password" required>
          </div>
        </div>

      <div class="buttons_large_group">
        <div class="buttons_middle_group">
          <div class="new_account_button">
            <router-link to="/account/signup">申請帳號</router-link>
          </div>
          <div class="forget_password_button">
            <router-link to="#">忘記密碼</router-link>
          </div>
        </div>
        <router-link to="/account">
          <div class="login_button">
            SIGN IN
          </div>
        </router-link>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
<script>

</script>
<style scoped>
  .login_box {
    margin-top: 180px;
    width: 100%;
  }

  h1 {
    font-family: Arial Black;
    font-size: 32px;
    font-weight: bold;
    width: 800px;
    margin: 0 auto;
    display: flex;
  }

  span {
    display: block;
    width: 150px;
  }

  .inputs_group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .email_block {
    margin-top: 40px;
  }

  .password_block {
    margin-top: 50px;
  }

  label {
    display: block;
    font-family: Archivo;
    font-size: 24px;
  }

  input {
    display: block;
    width: 800px;
    height: 45px;
    background-color: #EEEEEE;
    border: solid 1px black;
    padding: 10px;
  }

  .buttons_large_group {
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 208px auto;
  }

  .buttons_middle_group {
    display: flex;
  }

  .new_account_button {
    font-family: Archivo;
    font-size: 24px;
    width: 100px;
    height: 26px;
    padding-bottom: 35px;
    margin-top: 60px;
    margin-right: 50px;
  }

  .new_account_button:hover {
    border-bottom: solid 2px #CC0000;
  }

  .forget_password_button {
    font-family: Archivo;
    font-size: 24px;
    width: 100px;
    height: 26px;
    margin-top: 60px;
    padding-bottom: 35px;
  }

  .forget_password_button:hover {
    border-bottom: solid 2px #CC0000;
  }

  /* 要對router-link超連結下任何css要使用a標籤 */
  a { 
    color: black;
    text-decoration: none;
  }

  .login_button {
    font-family: Arial;
    font-size: 24px;
    width: 210px;
    text-align: center;
    padding: 12px 54px;
    margin-top: 60px;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
  }

</style>
