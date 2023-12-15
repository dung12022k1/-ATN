<template>
  <div>
    <main>
      <section id="hero" class="login">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
              <div id="login">
                <div class="text-center"><img class="my-img" :src="imageSrc" alt="My Image" style="width: 160px; height: 34px; object-fit: cover;" :style="{ filter: 'brightness(' + brightness + '%)' }"></div>
                <hr>
                <a-form :form="form">
                  <a-form-item label="Username">
                    <a-input v-model="form.Username"/>
                    <span id="error-username" style="color: red"></span>
                  </a-form-item>
<!--                  <div class="form-group">-->
<!--                    <label>Username</label>-->
<!--                    <input type="text" class=" form-control"  placeholder="Username">-->
<!--                  </div>-->
                  <a-form-item label="Firstname">
                    <a-input v-model="form.Firstname"/>
                    <span id="error-firstname" style="color: red"></span>
                  </a-form-item>
<!--                  <div class="form-group">-->
<!--                    <label>Firstname</label>-->
<!--                    <input type="text" class=" form-control"  placeholder="Firstname">-->
<!--                  </div>-->
                  <a-form-item label="Last Name">
                    <a-input v-model="form.Lastname"/>
                    <span id="error-lastname" style="color: red"></span>
                  </a-form-item>
<!--                  <div class="form-group">-->
<!--                    <label>Lastname</label>-->
<!--                    <input type="text" class=" form-control"  placeholder="Lastname">-->
<!--                  </div>-->
                  <a-form-item label="Email">
                    <a-input v-model="form.Email"/>
                    <span id="error-email" style="color: red"></span>
                  </a-form-item>


                  <a-form-item label="Phone Number">
                    <a-input v-model="form.PhoneNumber"/>
                    <span id="error-phone" style="color: red"></span>
                  </a-form-item>
<!--                  <div class="form-group">-->
<!--                    <label>Email</label>-->
<!--                    <input type="email" class=" form-control" placeholder="Email">-->
<!--                  </div>-->
                  <a-form-item label="Address">
                    <a-input v-model="form.Address"/>
                    <span id="error-Address" style="color: red"></span>
                  </a-form-item>
<!--                  <div class="form-group">-->
<!--                    <label>Address</label>-->
<!--                    <input type="text" class=" form-control" placeholder="Address">-->
<!--                  </div>-->
                  <a-form-item label="Password">
                    <a-input :type="passwordVisible ? 'text' : 'password'" :suffixIcon="eye-icon" v-model="form.Password">
                      <template slot="suffix">
                        <a-icon
                            :type="passwordVisible ? 'eye' : 'eye-invisible'"
                            @click="togglePasswordVisibility"
                        />
                      </template>
                    </a-input>
                    <span id="error-password" style="color: red"></span>
                  </a-form-item>
<!--                  <div class="form-group">-->
<!--                    <label>Password</label>-->
<!--                    <input type="password" class=" form-control" id="password1" placeholder="Password">-->
<!--                  </div>-->
                  <a-form-item label="Confirm Password">
                    <a-input :type="passwordVisible1 ? 'text' : 'password'" :suffixIcon="eye-icon" v-model="form.confirmPassword">
                      <template slot="suffix">
                        <a-icon
                            :type="passwordVisible1 ? 'eye' : 'eye-invisible'"
                            @click="togglePasswordVisibility1"
                        />
                      </template>
                    </a-input>
                    <span id="error-password" style="color: red"></span>
                  </a-form-item>
<!--                  <div class="form-group">-->
<!--                    <label>Confirm password</label>-->
<!--                    <input type="password" class=" form-control" id="password2" placeholder="Confirm password">-->
<!--                  </div>-->
                  <div id="pass-info" class="clearfix"></div>

                  <a-button class="btn_full" type="primary" @click.stop.prevent="handleSubmit">
                    Create an account
                  </a-button>
<!--                  <button class="btn_full">Create an account</button>-->
                </a-form>
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
import AccountService from "@/service/AccountService";
export default {
  data() {
    return {
      name: "index",
      imageSrc: '../../../assets/img/logo_sticky.png',
      brightness: 100,
      editorData: '',
      passwordVisible: false,
      passwordVisible1: false,
      editorConfig: {
        language: 'vi',
        defaultLanguage: 'vi'
      },
      data: [],

      form: {
        Username: undefined,
        Firstname: undefined,
        Lastname: undefined,
        Email: undefined,
        PhoneNumber: '',
        Address: undefined,
        Password: undefined,
        Thumbnail: null,
        Description: null,
        Status: 1,
        CreatedAt: undefined,
        confirmPassword: '',
      },
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    togglePasswordVisibility1() {
      this.passwordVisible1 = !this.passwordVisible1;
    },
    checkrealnumber(n){
      let flag = true;
      if(Math.ceil(n) != Math.floor(n)){
        flag =false;
      }
      return flag;
    },
    validURL(str) {
      var check= true;
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      for(let i=0;i<str.split(',').length;i++){
        if(!pattern.test(str.split(',')[i])){
          check= false;
          return check;
        }
      }
      return check;
    },



    validate(){
      var errorUsername = document.getElementById('error-username')
      var errorFirstname = document.getElementById('error-firstname')
      var errorLastname = document.getElementById('error-lastname')
      var erroremail = document.getElementById('error-email')
      var errorpassword = document.getElementById('error-password')
      var errorAddress = document.getElementById('error-Address')
      var errorPhone = document.getElementById('error-phone')
      // eslint-disable-next-line no-unused-vars
      let checkNumber =0;

      if(this.form.PhoneNumber === undefined ||this.form.PhoneNumber === ""){
        errorPhone.innerText = 'Please enter your phone number'
      }
          else if(!/^0\d{9,10}$/.test(this.form.PhoneNumber)){
        errorPhone.innerText = 'Phone number must start with 0 & 10 or 11 digits long'
            checkNumber++;
      }
      else {
        errorPhone.innerText = ''
      }

      if(this.form.Username === undefined ||this.form.Username === ""){
        errorUsername.innerText = 'Please enter your Username'
      }
      // else if(this.form.Username.length<7 ||this.form.Username.length >20){
      //   errorUsername.innerText = 'The name of your username must between 7 and 20 characters'
      //   checkNumber++;
      // }
      else {
        errorUsername.innerText = ''
      }

      if(this.form.Firstname === undefined ||this.form.Firstname === ""){
        errorFirstname.innerText = 'Please enter your Firstname'
      }
      // else if(this.form.Firstname.length<7 ||this.form.Firstname.length >20){
      //   errorFirstname.innerText = 'The name of your username must between 7 and 20 characters'
      //   checkNumber++;
      // }
      else {
        errorFirstname.innerText = ''
      }

      if(this.form.Lastname === undefined ||this.form.Lastname === "") {
        errorLastname.innerText = 'Please enter your Lastname'
      }
      // else if(this.form.Lastname.length<7 ||this.form.Lastname.length >20){
      //   errorLastname.innerText = 'The name of your username must between 7 and 20 characters'
      //   checkNumber++;
      // }
      else {
        errorLastname.innerText = ''
      }

      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (this.form.Email == undefined || this.form.Email == "") {
        erroremail.innerText = 'Please enter Email';
        checkNumber++;
      } else if (!emailRegex.test(this.form.Email)) {
        erroremail.innerText = 'Please enter a valid email address';
        checkNumber++;
      } else {
        erroremail.innerText = '';
      }

      if (this.form.Address == undefined ||this.form.Address == "") {
        errorAddress.innerText = 'Please enter Address'
        checkNumber++;
      }else {
        errorAddress.innerText=''
      }

      if (this.form.Password !== this.form.confirmPassword) {
        errorpassword.innerText = 'Password and Confirm Password do not match'
        checkNumber++;
      }else {
        errorpassword.innerText=''
      }

      if (checkNumber == 0) {
        return true;
      } else {
        return false;
      }
    },
    async  handleSubmit(e){
      e.preventDefault()
      if(!this.validate()){
        console.log("lỗi ở đây")
        return
      }
      await AccountService.save(this.form).then(
      ).catch(error => {
        console.log(error)
      })
      await   AccountService.saverole().then(
          this.$router.push("/login")
      ).catch(error=>{
        console.log(error)
      })


    }

  },
};
</script>

<style scoped>

</style>