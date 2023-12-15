<template>
  <div>
    <main>
      <section id="hero" class="login">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
              <div id="login">
                <div class="text-center"><img src="../../use/img/logo_sticky.png" alt="Image" width="160" height="34"></div>
                <hr>
                <form class="user" :model="form" @submit="handleSubmit" @submit.native.prevent>

                  <div class="form-group">
                    <input v-model="form.Username" class="form-control form-control-user"
                           id="exampleInputEmail" aria-describedby="emailHelp"
                           placeholder="Enter Username">
                    <span id="error-username" style="color: red"></span>
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="form.Password" class="form-control form-control-user"
                           id="exampleInputPassword" placeholder="Password">
                    <span id="error-password" style="color: red"></span>
                  </div>
                  <span id="error-role" style="color: red;margin-bottom: 20px"></span>
<!--                  <a href="index.html" class="btn_full" >Sign in</a>-->
                  <button style="margin-top: 20px" class="btn_full btn-primary btn-user btn-block" type="primary"
                          html-type="submit">
                    Sign in
                  </button>



                  <div class="text-center">
                    <p>Don't have an account?
                      <a class="small" :href="'register'">Sign up</a>
                    </p>
                    <p class="forgot-password text-right">
                      <router-link to="forgot">forgot password?</router-link>

                    </p>
<!--                  <a href="register.html" class="btn_full_outline">Register</a>-->
                  </div>
                  <div class="divider"><span>Or</span></div>
                  <a href="#0" class="social_bt facebook">Login with Facebook</a>
                  <a href="#0" class="social_bt google">Login with Google</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main><!-- End main -->
    <div id="toTop"></div><!-- Back to top button -->

    <!-- Search Menu -->
    <div class="search-overlay-menu">
      <span class="search-overlay-close"><i class="icon_set_1_icon-77"></i></span>
      <form role="search" id="searchform" method="get">
        <input value="" name="q" type="text" placeholder="Search..." />
        <button type="submit"><i class="icon_set_1_icon-78"></i>
        </button>
      </form>
    </div><!-- End Search Menu -->

    <!-- Sign In Popup -->
    <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
      <div class="small-dialog-header">
        <h3>Sign In</h3>
      </div>
      <form>
        <div class="sign-in-wrapper">
          <a href="#0" class="social_bt facebook">Login with Facebook</a>
          <a href="#0" class="social_bt google">Login with Google</a>
          <div class="divider"><span>Or</span></div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" name="email" id="email">
            <i class="icon_mail_alt"></i>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password" id="password" value="">
            <i class="icon_lock_alt"></i>
          </div>
          <div class="clearfix add_bottom_15">
            <div class="checkboxes float-start">
              <label class="container_check">Remember me
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="float-end"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
          </div>
          <div class="text-center"><input type="submit" value="Log In" class="btn_login"></div>
          <div class="text-center">
            Don’t have an account? <a href="javascript:void(0);">Sign up</a>
          </div>
          <div id="forgot_pw">
            <div class="form-group">
              <label>Please confirm login email below</label>
              <input type="email" class="form-control" name="email_forgot" id="email_forgot">
              <i class="icon_mail_alt"></i>
            </div>
            <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
            <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"></div>
          </div>
        </div>
      </form>
      <!--form -->
    </div>
  </div>
</template>

<script>
import LoginService from "../../../service/LoginService";
// import "../../../use/css/sb-admin-2.css"
// import "../../../use/vendor/fontawesome-free/css/all.min.css"
export default {
  data() {
    return {
      text:undefined,
      form: {
        Username: "",
        Password: "",
      },
    };
  },
  created() {
    localStorage.setItem('loginfrom','123')
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      if(!this.validate()){
        console.log("Lỗi validate")
        return
      }
      var errorrole = document.getElementById('error-role')
      /*document.getelementById là chung dùng được ở ngoài file khác*/
      const data = await LoginService.authenticate(this.form);
      console.log(data);
      console.log(data.data);
      if (data.status === 200) {
        console.log(data.status)
        localStorage.setItem('access_token', data.data.accessToken);
        let jwt = localStorage.getItem('access_token')
        let jwtData = jwt.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)
        console.log(decodedJwtData.data);
        let role = '';
        console.log("hello")
        if (decodedJwtData.data.user != undefined) {
          localStorage.setItem('userid', decodedJwtData.data.user.userid);
          localStorage.setItem('usermail', decodedJwtData.data.user.Email);
          localStorage.setItem('username', decodedJwtData.data.user.Username);
          localStorage.setItem('fname', decodedJwtData.data.user.Firstname);
          localStorage.setItem('lname', decodedJwtData.data.user.Lastname);
          localStorage.setItem('phonenumber', decodedJwtData.data.user.PhoneNumber);
          localStorage.setItem('address', decodedJwtData.data.user.Address);
          localStorage.setItem('name', decodedJwtData.data.user.Firstname + ' ' + decodedJwtData.data.user.Lastname);
          localStorage.setItem('avatar', decodedJwtData.data.user.Thumbnail);
          localStorage.setItem('password', decodedJwtData.data.user.Password);
          localStorage.setItem('role', decodedJwtData.data.user.role);
          console.log(localStorage.getItem('password'))
          role = decodedJwtData.data.user.role;
          console.log("hello")
          if (role == 'ADMIN' || role == 'USER') {
            let rou = localStorage.getItem('link');

            this.$router.push(rou)


          } else {
            errorrole.innerText = "Sai tài khoản hoặc mật khẩu"
            // this.$router.push({name: 'Login'})

          }
        }else {
          errorrole.innerText = "Sai tài khoản hoặc mật khẩu"
          return
        }
      }
      else
        {
          this.$message.error(data.message)
        }
    },
    validate(){
      var errorusername = document.getElementById('error-username')
      var errorpassword =document.getElementById('error-password')
      let checknumber =0;
      if(this.form.Username === ""){
        errorusername.innerText = "Xin mời nhập tài khoản"
        checknumber++;
      }else {
        errorusername.innerText=""
      }
      if(this.form.Password === ""){
        errorpassword.innerText = "Xin mời nhập mật khẩu"
        checknumber++;
      }else {
        errorpassword.innerText=""
      }
      var errorrole = document.getElementById('error-role')
      errorrole.innerText=""
      if(checknumber ==0){
        return true;
      }else {
        return false;
      }
    },



  },
  saveaccount(check){
    if(check ==1){
      this.text =1;
      this.form.Username =localStorage.getItem('username')
      this.form.Password = localStorage.getItem('password')
    }else {
      this.text=0;
      this.form.Username =""
      this.form.Password =""
    }
  }
};
</script>
<style>
</style>
