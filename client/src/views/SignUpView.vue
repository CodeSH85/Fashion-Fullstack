<template>
  <!-- 註冊頁面 -->
  <div class="container-fluid">
    <div class="row">
      <div class="h1_title d-flex justify-content-center">
        <h1 class="h3 col-md-8 fw-bolder col-sm-3 text-md-nowrap text-sm-wrap text-md-start text-sm-center">
          會員註冊 SIGN UP
        </h1>
      </div>
      <!-- 表格 -->
      <form>
        <div class="email_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="email" class="email_title h5 mb-2">E-mail</label>
          <input type="email" name="email" class="email_input form-control lh-lg"
           id="account" v-model="email" placeholder="輸入信箱" required>
        </div>
        <div class="col-md-8 col-sm-10 mx-auto mt-2" v-show="emailMsg">{{emailMsg}}</div>
        <div class="password_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="password" class="password_title h5 mb-2">Password</label>
          <input type="password" name="password" class="password_input form-control lh-lg"
           id="password" v-model="password" placeholder="輸入密碼" required>
        </div>
        <div class="col-md-8 col-sm-10 mx-auto mt-2">{{passwordMsg}}</div>
        <div class="confirm_password_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="confirm_password" class="confirm_password_title h5 mb-2">Confirm Password</label>
          <input type="password" class="confirm_password_input form-control lh-lg"
           id="confirm_password" v-model="rePassword" placeholder="確認密碼" required>
        </div>
        <div class="col-md-8 col-sm-10 mx-auto mt-2">{{rePasswordMsg}}</div>
      </form>
        <!-- 表格按鈕 -->
        <div class="button_group col-8 mx-auto d-flex justify-content-md-end mt-5">
          <button class="sign_up_button h4 fw-bold link-dark text-center py-3 mb-0" @click="signUp()">SIGN UP</button>
        </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  export default{
    data(){
      return{
        email: '',
        emailMsg: '',
        password: '',
        passwordMsg: '',
        rePassword: '',
        rePasswordMsg: '',
        passwordMatch: false,
      }
    },
    watch: {
      confirmPassword() {
        if (this.rePassword !== this.password){
          this.rePasswordMsg = '密碼不一致'
          console.log(this.rePasswordMsg)
        } else {
          this.passwordMatch == true
        }
      },
      
    },
    methods:{
      signUp() {
        // if( this.passwordMatch == true ){
          axios.post('http://localhost:3000/post/signup',{
            email: this.email,
            password: this.password
          })
          .then((res)=>{
            if( res.data.status == 0 ){
              alert('信箱已存在，請重新輸入');
              return this.$router.push('/account/signup');
            }else if( res.data.status == 1 ){
              alert('註冊成功');
              return this.$router.push('/login');
            }
          })
          .catch(function (error) {
            console.log(error);
          })
        // }
      }
    },
    mounted(){
    },
  }
</script>
