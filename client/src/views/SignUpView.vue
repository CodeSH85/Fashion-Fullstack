<template>
  <TopNavbar />
  <!-- 註冊頁面 -->
  <div class="container-fluid">
    <div class="row">
      <div class="h1_title d-flex justify-content-center">
        <h1 class="h3 col-md-8 fw-bolder col-sm-3 text-md-nowrap text-sm-wrap text-md-start text-sm-center">
          會員註冊 SIGN UP
        </h1>
      </div>
      <!-- 表格 -->
      <form action="/login" method="post" class="">
        <div class="email_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="email" class="email_title h5 mb-2">E-mail</label>
          <input type="email" class="email_input form-control lh-lg" id="account" placeholder="" required>
        </div>
        <div class="password_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="password" class="password_title h5 mb-2">Password</label>
          <input type="password" class="password_input form-control lh-lg" id="password" placeholder="" required>
        </div>
        <div class="confirm_password_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="confirm_password" class="confirm_password_title h5 mb-2">Confirm Password</label>
          <input type="password" class="confirm_password_input form-control lh-lg" id="confirm_password" placeholder="" required>
        </div>
        <!-- 表格按鈕 -->
        <div class="button_group col-8 mx-auto d-flex justify-content-md-end mt-5">
          <router-link to="/login" type="submit" class="d-block col-md-3 col-sm-7 
          mx-md-0 mx-sm-auto mt-md-0 mt-sm-3">
            <div class="sign_up_button h4 fw-bold link-dark text-center py-3 mb-0"
            @click="singUp()"
            >SIGN UP</div>
          </router-link>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>
<script>
  import axios from "axios";
  export default{
    data(){
      return{
        email:'',
        password:'',
      }
    },
    methods:{
      singUp: () => {
        axios.post('/signup')
      }
    },
    mounted(){
      
    }
  }

</script>
