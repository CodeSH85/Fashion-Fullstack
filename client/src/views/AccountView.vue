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
          <h4>{{ email }}</h4>
        </div>
      </div>
      <!-- 按鈕 (buttons_center用來給寬度和置中) -->
      <div class="buttons_center col-md-12 my-sm-5">
        <div class="buttons_list mx-sm-auto d-flex flex-sm-wrap justify-content-sm-center 
        col-md-4 col-sm-6">
          <!-- <router-link to="/login" class="link-dark d-md-block"> -->
            <button class="log_out_button col-md-5 text-center my-sm-5 col-sm-10 h4 py-3 px-4 mx-auto mb-0" @click="logout()">
              Log Out
            </button>
          <!-- </router-link> -->
          <!-- <router-link to="#" class="link-dark d-md-block "> -->
            <button class="delete_account_button col-md-8 text-center my-5 h4 py-3 px-4 mx-auto mb-0">
              DELETE ACCOUNT
            </button>
          <!-- </router-link> -->
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
    },
    data () {
      return {
        email: '',
      }
    },
    methods: {
      // 在accountView上的email欄位後方顯示登入中user的帳號
      showAccount () {
        const loginUser = this.$store.state.loginUser.memoryAccount
        this.email = loginUser
      },
      logout () {
        localStorage.clear ();
        this.$router.push ('/');
      }
    },
    computed:{

    },
    // 用來監聽切換路由時自動刷新頁面，但刷新後的部分物件仍沒有異動(例如Navbar的login變account)
    watch:{
      '$route':"reload"
    },
    created () {
      this.showAccount ();
    }
  }
</script>
