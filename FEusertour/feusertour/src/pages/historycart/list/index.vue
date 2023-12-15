<template>
  <div>
    <section class="parallax-window" data-parallax="scroll" style="background: gray" data-natural-width="1400"
      data-natural-height="470">

      <div class="parallax-content-1 opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.4)">
        <div class="animated fadeInDown">
          <h1>Hello!</h1>
          <p>Cursus neque cursus curae ante scelerisque vehicula.</p>
        </div>
      </div>
    </section>
    <!-- End section -->

    <main>
      <div id="position">
        <div class="container">
          <ul>
            <li><a href="#">Home</a>
            </li>
            <li><a href="#">Category</a>
            </li>
            <li>Page active</li>
          </ul>
        </div>
      </div>
      <!-- End Position -->

      <div class="margin_60 container">
        <div id="tabs" class="tabs">
          <nav>
            <ul>
              <li> <a v-scroll-to="'#section-1'" class="icon-booking"><span>Bookings</span></a>
              </li>
              <li> <a v-scroll-to="'#section-4'" class="icon-profile"><span>Profile</span></a>
              </li>
            </ul>
          </nav>
          <div id="section-1" style="margin-top: 100px">
            <div class="content">

              <div class="container margin_60">

                <div class="main_title">

                  <h2> <span>BOOKINGS</span> </h2>

                </div>

                <div>
                  <div v-for="order in data" v-bind:key="order.orderid" class="strip_booking">
                    <div class="row">
                      <div class="col-lg-2 col-md-2">
                        <div class="date">
                          <span class="month">{{ order.DepartureAt.split("-")[0] }}</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 1"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>JAN</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 2"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>FEB</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 3"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>MAR</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 4"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>APR</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 5"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>MAY</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 6"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>JUN</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 7"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>JUL</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 8"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>AUG</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 9"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>SEP</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 10"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>OCT</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 11"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>NOV</span>
                          <span class="day" v-if="order.DepartureAt.split('-')[1] == 12"><strong>{{
                            order.DepartureAt.split("T")[0].split("-")[2]
                          }}</strong>DEC</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <h3 class="tours_booking">{{ order.nametour }}<span>{{ order.Quantity }} people</span></h3>
                      </div>
                      <div class="col-lg-2 col-md-3">
                        <ul class="info_booking">
                          <li><strong>Booking id</strong>{{ order.orderid }}</li>
                        </ul>
                      </div>
                      <div class="col-lg-2 col-md-2">
                        <div v-if="order.status ==0" class="booking_buttons">

                          <a :href="'/invoice'+order.orderid" class="btn_2">Payment</a>
                          <a href=""  type="primary" @click.stop.prevent="updatestatus(order.orderid,2)" style="background-color: brown" class="btn_3">Cancel</a>
                        </div>
                        
                        <div v-else-if="order.status == 2" class="booking_buttons">
                          <a :href="'/invoice' + order.orderid" style="background-color: brown" class="btn_3">Canceled</a>
                        </div>
                        <div v-else class="booking_buttons">
                          <a :href="'/invoice' + order.orderid" class="btn_2" style="background-color: green">Paid</a>
                          <!--                        <a href="#0" class="btn_2">Payment</a>-->
                          <!--                        <a href="#0" class="btn_3">Cancel</a>-->
                        </div>
                      </div>
                    </div>
                    <!-- End row -->
                  </div>
                  <!-- End strip booking -->

                </div>
              </div>
            </div>
            <!-- End section 1 -->
            <div id="section-4" style="margin-top: 100px">
              <div class="white_bg">
                <div class="container margin_60">

                  <div class="main_title">
                    <h2> <span>PROFILE</span> </h2>
                  </div>

                  <div>
                    <div class="row">
                      <div class="col-md-6">
                        <h4>Your profile</h4>
                        <ul id="profile_summary">
                          <li>Username <span>{{ this.params1.username }}</span>
                          </li>
                          <li>Email <span>{{ this.params1.email }}</span>
                          </li>
                          <li>First name <span>{{ this.params1.fname }}</span>
                          </li>
                          <li>Last name <span>{{ this.params1.lname }}</span>
                          </li>
                          <li>Phone number <span>{{ this.params1.phonenumber }}</span>
                          </li>
                          <li>Address <span>{{ this.params1.address }}</span>
                          </li>
                          <li>Country <span>Viet Nam</span>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <p>
                          <img :src="this.params1.avatar" style="width: 40%;height: 40%" alt="Image"
                            class="img-fluid styled profile_pic">
                        </p>
                      </div>
                    </div>
                    <!-- End row -->

                    <div class="divider"></div>
                  </div>
                  <!-- End section 4 -->
                </div>
              </div>
              <!-- End content -->
            </div>
          </div>
        </div>
        <!-- End tabs -->
      </div>
      <!-- end container -->
    </main>
    <!-- End main -->



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
// import axios from "axios";
import OrderService from "../../../service/OrderService";
export default {

  data() {
    return {
      data: [],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      checked: false,
      datastatus: [],
      form: {
        id: undefined,
        quantity: 1
      },
      price: undefined,
      price1: undefined,
      price2: undefined,
      price3: undefined,
      body: {
        id: undefined,
        quantity: 1
      },
      totalRecords: undefined,
      params: {
        page: undefined,
        limit: 1000,
        search: "",
        orderby: "orderId",
      },
      params1: {
        username: '',
        email: undefined,
        fname: undefined,
        lname: undefined,
        phonenumber: undefined,
        address: undefined,
        avatar: undefined
      },
      params2: {
        page: undefined,
        limit: 1000,
        orderby: "orderId",
      },
      params3: {
        pageSize: 10,
        page: undefined,
        name: ""
      },
    };
  },
  created() {
    localStorage.setItem('link', this.$route.fullPath);
    let token = localStorage.getItem('access_token');
    if (!token) {
      console.log(token)
      this.$router.push("/login");
    } else {
      this.getprofile();
      this.getOrder();
      this.updatestatus()
    }
  },
  methods: {
    async getOrder() {
      localStorage.getItem('access_token')
      await OrderService.getAll(this.params).then(
        rs => {
          try {
            let price2 = 0;
            let price3 = 0;
            console.log(rs.data)

            this.data = rs.data.records;
            this.totalRecords = rs.data.totalItems;
            for (let i = 0; i < this.data.length; i++) {
              console.log(this.data[i].status)
              price2 = price2 + this.data[i].TotalPrice;
              console.log(price2);
            }
            this.price2 = price2;
            for (let i = 0; i < this.data.length; i++) {
              if (this.data[i].status == "1") {
                price3 = price3 + this.data[i].TotalPrice;
              }
            }
            this.price3 = price3
            console.log(this.price3)
          } catch (e) {
            console.log(e)
          }
        }
      )

    },
    // clickOpenVNPay(data) {
    //   console.log(data);
    //   // const totalPrice = data.TotalPrice * data.Quantity;
    //   // const token = localStorage.getItem("access_token");

    //   // axios.post("http://localhost:3000/api/v1/create_payment_url",
    //   //   { amount: totalPrice }
    //   //   , {
    //   //     headers: {
    //   //       accept: 'application/json',
    //   //       'x-access-token': token
    //   //     }
    //   //   }).then((res) => console.log(res));
    // },
    getprofile() {
      // let jwt = localStorage.getItem('access_token')
      // let jwtData = jwt.split('.')[1]
      // let decodedJwtJsonData = window.atob(jwtData)
      // let decodedJwtData = JSON.parse(decodedJwtJsonData)
      // console.log(decodedJwtData)
      console.log(localStorage.getItem('access_token'))
      console.log(localStorage.getItem('userid'))
      console.log(localStorage.getItem('username'))
      console.log(localStorage.getItem('usermail'))
      this.params.search = localStorage.getItem('username')
      console.log(this.params.search)
      this.params1.username = localStorage.getItem('username')
      this.params1.fname = localStorage.getItem('fname')
      this.params1.lname = localStorage.getItem('lname')
      this.params1.address = localStorage.getItem('address')
      this.params1.avatar = localStorage.getItem('avatar')
      this.params1.phonenumber = localStorage.getItem('phonenumber')
      this.params1.email = localStorage.getItem('usermail')


    },
    updatestatus(id, status) {
      if (status == 2) {
        OrderService.updateStatus(id, '2').then(
        ).catch(error => {
          console.log(error)
        })
        this.getOrder();
        this.getprofile();
        this.$toast.success('Canceled Success', {
          position: "bottom-right"
        })
      }
    }
  }
}
</script>

<style scoped>
.tabs {
  position: relative;
  width: 100%;
  overflow: hidden
}

.tabs nav {
  text-align: center;
  margin-top: 0;
  padding-top: 0
}

.tabs nav ul {
  padding: 0;
  margin: 0;
  margin-bottom: -6px;
  list-style: none;
  display: inline-block;
  border-bottom: 1px solid #fff
}

.tabs nav ul li {
  border: 1px solid transparent;
  border-bottom: none;
  margin: 0 .25em;
  display: block;
  float: left;
  position: relative
}

.tabs nav li.tab-current {
  border: 1px solid #e2e2e2;
  box-shadow: inset 0 2px #e2e2e2;
  border-bottom: none;
  z-index: 100;
  -webkit-border-top-left-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  -moz-border-radius-topleft: 3px;
  -moz-border-radius-topright: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px
}

.tabs nav li.tab-current:after,
.tabs nav li.tab-current:before {
  content: '';
  position: absolute;
  height: 1px;
  right: 100%;
  bottom: 0;
  width: 1000px;
  background: #e2e2e2
}

.tabs nav li.tab-current:after {
  right: auto;
  left: 100%;
  width: 4000px
}

.tabs nav li.tab-current a {
  color: #444
}

.tabs nav a {
  color: #999;
  display: block;
  font-size: 13px;
  text-transform: uppercase;
  line-height: 3.5;
  padding: 0 1.25em;
  white-space: nowrap;
  background-color: #fff;
  -webkit-border-top-left-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  -moz-border-radius-topleft: 3px;
  -moz-border-radius-topright: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px
}

.tabs nav a:hover {
  color: #333
}

.tabs nav a:before {
  display: inline-block;
  vertical-align: middle;
  text-transform: none;
  font-size: 15px;
  font-weight: 400;
  font-variant: normal;
  font-family: fontello;
  color: #f90;
  line-height: 1;
  speak: none;
  -webkit-font-smoothing: antialiased;
  margin: -.25em .4em 0 0
}

.icon-dashboard:before {
  content: "\e839"
}

.icon-profile:before {
  content: "\ee7e"
}

.icon-settings:before {
  content: "\e835"
}

.icon-booking:before {
  content: "\eea9"
}

.icon-wishlist:before {
  content: "\ee78"
}

.content section {
  padding: 45px;
  display: none;
  max-width: 1230px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  border-top: none;
  -webkit-border-bottom-right-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-radius-bottom-right: 5px;
  -moz-border-radius-bottom-left: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px
}

.content section h4 {
  text-transform: uppercase;
  margin-top: 0
}

.content section:after,
.content section:before {
  content: '';
  display: table
}

.content section:after {
  clear: both
}

.no-js .content section {
  display: block;
  padding-bottom: 2em;
  border-bottom: 1px solid #47a3da
}

.content section.content-current {
  display: block
}

.wishlist_close_admin {
  position: absolute;
  top: 20px;
  right: 10px;
  width: 36px;
  height: 36px;
  z-index: 2;
  font-size: 20px;
  line-height: 36px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  color: #f66 !important
}

.wishlist_close_admin:before {
  font-style: normal;
  font-weight: 400;
  font-family: icon_set_1;
  font-size: 36px;
  content: "\72";
  color: #f66;
  position: absolute;
  left: 0;
  top: 3px
}

ul#profile_summary {
  margin: 10px 0 20px 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  font-weight: 600
}

ul#profile_summary li {
  padding: 4px 0;
  position: relative
}

ul#profile_summary li span {
  text-transform: none;
  font-weight: 400;
  position: absolute;
  left: 200px
}

.profile_pic {
  float: right;
  margin-bottom: 15px
}

.divider {
  background-color: #ededed;
  height: 2px;
  width: 100%;
  margin: 15px 0
}

ul#profile_summary li:nth-child(even) {
  background-color: #f8f8f8
}

ul#profile_summary li:nth-child(odd) {
  background-color: #fff
}

.upload-drop-zone {
  height: 200px;
  border-width: 2px;
  margin-bottom: 20px
}

.upload-drop-zone {
  color: #ccc;
  border-style: dashed;
  border-color: #ccc;
  line-height: 200px;
  text-align: center
}

.upload-drop-zone.drop {
  color: #222;
  border-color: #222
}

.upload_1 {
  margin: 20px 0
}

.strip_booking {
  border-bottom: 1px solid #ededed;
  padding-bottom: 15px;
  margin-bottom: 15px
}

.strip_booking h3 {
  font-size: 16px;
  text-transform: uppercase;
  position: relative;
  top: 10px;
  padding-left: 65px
}

.strip_booking h3 span {
  color: #999;
  display: block;
  font-size: 11px !important
}

.strip_booking h3.hotel_booking:before,
.strip_booking h3.tours_booking:before,
.strip_booking h3.transfers_booking:before {
  font-style: normal;
  font-weight: 400;
  font-family: icon_set_1;
  font-size: 24px;
  color: #e04f67;
  position: absolute;
  border: 1px solid #ededed;
  width: 50px;
  height: 50px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  left: 0;
  top: -10px;
  text-align: center;
  line-height: 50px
}

.strip_booking h3.hotel_booking:before {
  content: "\26"
}

.strip_booking h3.tours_booking:before {
  content: "\3e"
}

.strip_booking h3.transfers_booking:before {
  content: "\39"
}

.strip_booking .date {
  line-height: 20px;
  background-color: #f8f8f8;
  text-align: center
}

.strip_booking .date .month {
  background-color: #e04f67;
  display: block;
  color: #fff;
  text-transform: uppercase
}

.strip_booking .date .day {
  padding: 15px;
  margin-top: 1px;
  color: #999;
  text-transform: uppercase;
  display: block
}

.strip_booking .date .day strong {
  font-size: 36px;
  font-weight: 400;
  display: block;
  color: #e04f67;
  margin-bottom: 3px
}

ul.info_booking {
  list-style: none;
  margin: 0;
  padding: 15px 25px 15px 0;
  font-size: 11px;
  color: #999;
  line-height: 12px;
  border-right: 1px solid #ededed;
  text-align: right
}

ul.info_booking li {
  margin-bottom: 5px
}

ul.info_booking li strong {
  text-transform: uppercase;
  display: block;
  color: #555
}

.booking_buttons {
  margin-top: 20px
}

.btn_2,
.btn_3,
a.btn_2,
a.btn_3 {
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: #fff;
  background: #51bce6;
  cursor: pointer;
  padding: 7px 8px;
  font-size: 11px;
  line-height: 9px;
  display: block;
  outline: 0;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  text-align: center
}

.btn_3,
a.btn_3 {
  color: #999;
  background: #eee;
  min-width: 60px;
  text-align: center;
  margin-top: 3px
}

.btn_2:hover,
.btn_3:hover,
a.btn_2:hover,
a.btn_3:hover {
  background: #333;
  color: #fff
}

@media screen and (max-width:52.375em) {
  .tabs nav a span {
    display: none
  }

  .tabs nav a:before {
    margin-right: 0
  }

  ul.info_booking {
    padding: 30px 0 15px 0;
    border-right: none;
    text-align: left
  }

  .booking_buttons {
    margin-top: 0
  }

  .content section {
    padding: 25px
  }

  .profile_pic {
    float: none
  }
}
</style>