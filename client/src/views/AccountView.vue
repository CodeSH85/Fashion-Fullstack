<template>
  <AccountPageButtons />
    <div class="account_group">
      <div class="account_title">
        <h4>E-mail</h4>
      </div>
      <div class="account_email">
        <h4>example@test.com</h4>
      </div>
    </div>

    <div class="buttons_center">
      <div class="buttons_list">
        <router-link to="/">
          <div class="logOut_button">
            Log Out
          </div>
        </router-link>
        <router-link to="#">
          <div class="delete_button">
            DELETE ACCOUNT
          </div>
        </router-link>
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
<style scoped>
  .account_group {
    width: 380px;
    margin: 0 auto 154px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account_title h4 {
    font-size: 24px;
  }

  .account_email h4 {
    font-size: 24px;
  }

  .buttons_center {
    width: 100%;
  }

  .buttons_list {
    width: 500px;
    margin: 0 auto 120px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  a { 
    color: black;
    text-decoration: none;
  }

  .logOut_button {
    font-family: Arial;
    font-size: 24px;
    width: 210px;
    text-align: center;
    padding: 12px 54px;
    margin: 50px auto 165px auto;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
  }

  .delete_button {
    font-family: Arial;
    font-size: 24px;
    width: 350px;
    text-align: center;
    color: #CC0000;
    padding: 12px 54px;
    margin: 0 auto;
    border-top: solid 1px #CC0000;
    border-bottom: solid 1px #CC0000;
  }
</style>