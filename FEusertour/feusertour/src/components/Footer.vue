<template>
  <footer class="revealed">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Need help?</h3>
          <a href="tel://004542344599" id="phone">+45 423 445 99</a>
          <a href="mailto:help@citytours.com" id="email_footer">help@citytours.com</a>
        </div>
        <div class="col-md-3">
          <h3>About</h3>
          <ul>
            <li><a :href="'about'">About us</a></li>
            <li><a :href="'/'">FAQ</a></li>
            <li><a :href="'login'">Login</a></li>
            <li><a :href="'register'">Register</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3>Discover</h3>
          <ul>
            <li><a :href="'/'">Community blog</a></li>
            <li><a :href="'tours'">Tour guide</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h3>Settings</h3>
          <div class="styled-select">
            <select name="lang" id="lang">
              <option value="English" selected>English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
          <div class="styled-select">
            <select name="currency" id="currency">
              <option value="USD" selected>USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="RUB">RUB</option>
            </select>
          </div>
        </div>
      </div><!-- End row -->
      <div class="row">
        <div class="col-md-12">
          <div id="social_footer">
            <ul>
              <li><a href="#"><i class="icon-facebook"></i></a></li>
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="#"><i class="icon-google"></i></a></li>
              <li><a href="#"><i class="icon-instagram"></i></a></li>
              <li><a href="#"><i class="icon-pinterest"></i></a></li>
              <li><a href="#"><i class="icon-vimeo"></i></a></li>
              <li><a href="#"><i class="icon-youtube-play"></i></a></li>
            </ul>
            <p> Pham Tien Dung</p>
          </div>
        </div>
      </div><!-- End row -->
    </div><!-- End container -->
  </footer><!-- End footer -->
</template>

<script>
export default {
  name: "Footer"
}
</script>
<style>
</style>

