<template>
<div>
  <main>
    <div class="parallax-window" data-parallax="scroll"
             v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/slides/slide_home_3.jpg') + ')' }"
             data-natural-width="1400" data-natural-height="760">
      <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
        <div class="container">
          <div class="row justify-content-center justify-content-md-start">
            <div class="col-lg-12 static">
              <div class="slide-text text-center white">
                <h2 class="owl-slide-animated owl-slide-title">Going Inside<br>The Louvre Museum</h2>
                <p class="owl-slide-animated owl-slide-subtitle">
                  Discover hidden wonders on trips curated by Citytours Tours Experts
                </p>
                <div class="owl-slide-animated owl-slide-cta"><a class="btn_1" :href="'tours'" role="button">Read more</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--/carousel-->

    <div class="white_bg">
      <div class="container margin_60">
        <div class="row small-gutters categories_grid">
          <div class="col-sm-12 col-md-6">
            <a :href="'tours'">
              <img src="/assets/img/img_cat_home_1.jpg" alt="" class="img-fluid">
              <div class="wrapper">
                <h2>Special Offers</h2>
                <p>1150 Locations</p>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="row small-gutters mt-md-0 mt-sm-2">
              <div class="col-sm-6">
                <a :href="'flights'">
                  <img src="/assets/img/img_cat_home_2.jpg" alt="" class="img-fluid">
                  <div class="wrapper">
                    <h2>Flights</h2>
                    <p>800 Locations</p>
                  </div>
                </a>
              </div>
              <div class="col-sm-6">
                <a :href="'hotels'">
                  <img src="/assets/img/img_cat_home_3.jpg" alt="" class="img-fluid">
                  <div class="wrapper">
                    <h2>Hotels</h2>
                    <p>650 Locations</p>
                  </div>
                </a>
              </div>
              <div class="col-sm-12 mt-sm-2">
                <a :href="'tours'">
                  <img src="/assets/img/img_cat_home_4.jpg" alt="" class="img-fluid">
                  <div class="wrapper">
                    <h2>Tours</h2>
                    <p>1132 Locations</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--/categories_grid-->
      </div>
      <!-- /container -->
    </div>
    <!-- /white_bg -->


    <!-- End container -->

    <div class="white_bg">
      <div class="container margin_60">
        <div class="main_title">
          <h2>Plan <span>Your Tour</span> Easly</h2>
          <p>
            Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.
          </p>
        </div>
        <div class="row feature_home_2">
          <div class="col-md-4 text-center">
            <img src="/assets/img/adventure_icon_1.svg" alt="" width="75" height="75">
            <h3>Itineraries studied in detail</h3>
            <p>Suscipit invenire petentium per in. Ne magna assueverit vel. Vix movet perfecto facilisis in, ius ad maiorum corrumpit, his esse docendi in.</p>
          </div>
          <div class="col-md-4 text-center">
            <img src="/assets/img/adventure_icon_2.svg" alt="" width="75" height="75">
            <h3>Room and food included</h3>
            <p> Cum accusam voluptatibus at, et eum fuisset sententiae. Postulant tractatos ius an, in vis fabulas percipitur, est audiam phaedrum electram ex.</p>
          </div>
          <div class="col-md-4 text-center">
            <img src="/assets/img/adventure_icon_3.svg" alt="" width="75" height="75">
            <h3>Everything organized</h3>
            <p>Integre vivendo percipitur eam in, graece suavitate cu vel. Per inani persius accumsan no. An case duis option est, pro ad fastidii contentiones.</p>
          </div>
        </div>

        <div class="banner_2">
          <div class="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)" style="background-color: rgba(0, 0, 0, 0.3);">
            <div>
              <h3>Your Perfect<br>Tour Experience</h3>
              <p>Activities and accommodations</p>
              <a :href="'tours'" class="btn_1">Read more</a>
            </div>
          </div>
          <!-- /wrapper -->
        </div>
        <!-- /banner_2 -->

      </div>
      <!-- End container -->
    </div>
    <!-- End white_bg -->

    <div class="container margin_60">
      <div class="main_title">
        <h2>Newest <span>Blog</span> News</h2>
        <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <a class="box_news" :href="'/'">
            <figure><img src="/assets/img/news_home_1.jpg" alt="">
              <figcaption><strong>28</strong>Dec</figcaption>
            </figure>
            <ul>
              <li>Pham Tien Dung</li>
              <li>28.12.2022</li>
            </ul>
            <h4>Nha Trang Beach</h4>
            <p>Nha Trang beach city is well known for its pristine beaches and excellent scuba diving....</p>
          </a>
        </div>
        <!-- /box_news -->
        <div class="col-lg-6">
          <a class="box_news" :href="'/'">
            <figure><img src="/assets/img/news_home_2.jpg" alt="">
              <figcaption><strong>28</strong>Dec</figcaption>
            </figure>
            <ul>
              <li>Leo Messi</li>
              <li>28.12.2022</li>
            </ul>
            <h4>Buenos Aires</h4>
            <p>Buenos Aires is neither part of Buenos Aires Province nor the Province's capital; rather, it is an autonomous district....</p>
          </a>
        </div>
        <!-- /box_news -->
        <div class="col-lg-6">
          <a class="box_news" :href="'/'">
            <figure><img src="/assets/img/news_home_3.jpg" alt="">
              <figcaption><strong>28</strong>Dec</figcaption>
            </figure>
            <ul>
              <li>Hoang Vu Linh </li>
              <li>28.12.2022</li>
            </ul>
            <h4>Phu Quoc</h4>
            <p>Phu Quoc's 150-kilometer coastline, with gentle waves and transparent turquoise water. If you'd....</p>
          </a>
        </div>
        <!-- /box_news -->
        <div class="col-lg-6">
          <a class="box_news" :href="'/'">
            <figure><img src="/assets/img/news_home_4.jpg" alt="">
              <figcaption><strong>28</strong>Dec</figcaption>
            </figure>
            <ul>
              <li>Do Duy Anh</li>
              <li>28.12.2023</li>
            </ul>
            <h4>Mount Everest</h4>
            <p>Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas....</p>
          </a>
        </div>
        <!-- /box_news -->
      </div>
      <!-- /row -->
      <p class="btn_home_align"><a :href="'tours'" class="btn_1 rounded">View all news</a></p>
    </div>
    <!-- End container -->
  </main>
  <!-- End main -->

<!--  <footer class="revealed">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-md-4">-->
<!--          <h3>Need help?</h3>-->
<!--          <a href="tel://004542344599" id="phone">+45 423 445 99</a>-->
<!--          <a href="mailto:help@citytours.com" id="email_footer">help@citytours.com</a>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <h3>About</h3>-->
<!--          <ul>-->
<!--            <li><a href="#">About us</a></li>-->
<!--            <li><a href="#">FAQ</a></li>-->
<!--            <li><a href="#">Login</a></li>-->
<!--            <li><a href="#">Register</a></li>-->
<!--            <li><a href="#">Terms and condition</a></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <h3>Discover</h3>-->
<!--          <ul>-->
<!--            <li><a href="#">Community blog</a></li>-->
<!--            <li><a href="#">Tour guide</a></li>-->
<!--            <li><a href="#">Wishlist</a></li>-->
<!--            <li><a href="#">Gallery</a></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        <div class="col-md-2">-->
<!--          <h3>Settings</h3>-->
<!--          <div class="styled-select">-->
<!--            <select name="lang" id="lang">-->
<!--              <option value="English" selected>English</option>-->
<!--              <option value="French">French</option>-->
<!--              <option value="Spanish">Spanish</option>-->
<!--              <option value="Russian">Russian</option>-->
<!--            </select>-->
<!--          </div>-->
<!--          <div class="styled-select">-->
<!--            <select name="currency" id="currency">-->
<!--              <option value="USD" selected>USD</option>-->
<!--              <option value="EUR">EUR</option>-->
<!--              <option value="GBP">GBP</option>-->
<!--              <option value="RUB">RUB</option>-->
<!--            </select>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>&lt;!&ndash; End row &ndash;&gt;-->
<!--      <div class="row">-->
<!--        <div class="col-md-12">-->
<!--          <div id="social_footer">-->
<!--            <ul>-->
<!--              <li><a href="#"><i class="icon-facebook"></i></a></li>-->
<!--              <li><a href="#"><i class="icon-twitter"></i></a></li>-->
<!--              <li><a href="#"><i class="icon-google"></i></a></li>-->
<!--              <li><a href="#"><i class="icon-instagram"></i></a></li>-->
<!--              <li><a href="#"><i class="icon-pinterest"></i></a></li>-->
<!--              <li><a href="#"><i class="icon-vimeo"></i></a></li>-->
<!--              <li><a href="#"><i class="icon-youtube-play"></i></a></li>-->
<!--            </ul>-->
<!--            <p>© Citytours 2022</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>&lt;!&ndash; End row &ndash;&gt;-->
<!--    </div>&lt;!&ndash; End container &ndash;&gt;-->
<!--  </footer>&lt;!&ndash; End footer &ndash;&gt;-->

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
  <!-- /Sign In Popup -->
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "index",
    }
  },
  created() {
    localStorage.setItem('link',this.$route.fullPath);
    localStorage.setItem('nohead',true);
  }

}
</script>

<style scoped>

</style>