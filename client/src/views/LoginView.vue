<template>
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
      <div>
        <div class="email_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="email" class="email_title h5 mb-2">E-mail</label>
          <input type="email" v-model="email" class="email_input form-control lh-lg" id="account" placeholder="" required>
        </div>
        <div class="password_block col-md-8 col-sm-10 mx-auto mt-5">
          <label for="password" class="password_title h5 mb-2">Password</label>
          <input type="password" v-model="password" class="password_input form-control lh-lg" id="password" placeholder="" required>
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
<<<<<<< HEAD
          <div to="/account" type="submit" class="d-block col-md-3 col-sm-7 mx-md-0 mx-sm-auto mt-md-0 mt-sm-3">
            <button class="sign_in_button h4 fw-bold link-dark text-center py-3 mb-0"
              @click="login()">SIGN IN</button>
          </div>
=======
            <button class="sign_in_button col-md-3 col-sm-7 h4 fw-bold link-dark text-center py-3 mb-0 mx-md-0 mx-sm-auto" 
            type="submit" @click.prevent="signIn">SIGN IN</button>
>>>>>>> ed0714ed322c074154b67777f4bd9e7d2f64d3ca
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import axios from "axios"

  export default {
    data () {
      return {
        email:'',
        password:'',
      }
    },
    methods:{
<<<<<<< HEAD
      login() {
        axios.post('http://localhost:3000/post/login',{
          email: this.email,
          password: this.password
        })
        .then((res)=>{
          if( res.data.status == 1 ){
            alert('登入成功')
            return this.$router.push('/shop')
          } else if( res.data.status == 0 ) {
            alert('帳號或密碼錯誤')
            return this.$router.push('/login')
          }
        })
        .catch(function (error) {
          console.log(error);
        }) 
      }
=======
      // async login(){
      //   let result = await axios.post("http://localhost:3001/post/login")
      // }

    // 傳值到store和導向到accountView頁面
      signIn: function() {
        this.$store.commit ('saveAccount', {
          email: this.email,
        })
        this.$router.push('/account');
      },
    },
    mounted() {
    
>>>>>>> ed0714ed322c074154b67777f4bd9e7d2f64d3ca
    }
  }

</script>
