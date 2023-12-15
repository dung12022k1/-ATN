<template>
  <div>
    <section class="parallax-window" data-parallax="scroll" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/banner_bg_desktop.jpg') + ')' }" data-natural-width="1400" data-natural-height="470">
      <div class="parallax-content-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h1>
                <strong>{{currentData.DepartureId}}</strong>
                <strong> → </strong>
                <strong>{{ currentData.DestinationId }}</strong>
              </h1>
              <!--              <span>{{currentData.SummarySchedule}}</span>-->
              <!--              <span v-if="currentData.Rating ==4" class="rating"><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><small>(75)</small></span>-->
              <!--              <span v-else-if="currentData.Rating ==3" class="rating"><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i><small>(75)</small></span>-->
              <!--              <span v-else-if="currentData.Rating ==2" class="rating"><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i><i class="icon-smile"></i><small>(75)</small></span>-->
              <!--              <span v-else-if="currentData.Rating ==1" class="rating"><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i><i class="icon-smile"></i><i class="icon-smile"></i><small>(75)</small></span>-->
              <!--              <span v-else class="rating"><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><small>(75)</small></span>-->


            </div>
            <div class="col-md-4">
              <div id="price_single_main">
                from/per person <span><sup>$</sup>{{ currentData.Price }}</span>
              </div>
            </div>
          </div>
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

      <div class="collapse" id="collapseMap">
        <div id="map" class="map"></div>
      </div>
      <!-- End Map -->

      <div class="container margin_60">
        <div class="row">
          <div class="col-lg-8" id="single_tour_desc">

            <div id="single_tour_feat">
              <ul>
                <li><i class="icon_set_1_icon-4"></i>Museum</li>
                <li><i class="icon_set_1_icon-83"></i>3 Hours</li>
                <li><i class="icon_set_1_icon-13"></i>Accessibiliy</li>
                <li><i class="icon_set_1_icon-82"></i>144 Likes</li>
                <li><i class="icon_set_1_icon-22"></i>Pet allowed</li>
                <li><i class="icon_set_1_icon-97"></i>Audio guide</li>
                <li><i class="icon_set_1_icon-29"></i>Tour guide</li>
              </ul>
            </div>

            <p class="d-block d-lg-none"><a class="btn_map" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a></p>
            <!-- Map button for tablets/mobiles -->
            <agile :initial-slide="0">
              <img class="slide" :src="currentData.Thumbnail.split(',')[0]"/>

              <template slot="prevButton"><a-icon style="font-size: 25px" type="left"/></template>
              <template slot="nextButton"><a-icon style="font-size: 25px" type="right"/></template>

            </agile>

            <hr>
            <div class="row">
              <div class="col-lg-3">
                <h3>Description</h3>
              </div>
              <div class="col-lg-9">
                {{currentData.Description}}
                <!-- End row  -->
              </div>
            </div>

            <hr>

            <div class="row">
              <div class="col-lg-3">
                <h3>Detail</h3>
              </div>
              <div class="col-lg-9">
                {{currentData.Detail}}

                <!-- End row  -->
              </div>
            </div>

            <!--            <hr>-->
            <!--            <div class="row">-->
            <!--              <div class="col-lg-3">-->
            <!--                <h3>Schedule</h3>-->
            <!--              </div>-->
            <!--              <div  class="col-lg-9">-->
            <!--                <div v-for="item in scheduleData" :key="item.Id" class="table-responsive">-->
            <!--                  <table class="table table-striped">-->
            <!--                    <thead>-->
            <!--                    <tr>-->
            <!--                      <th colspan="2">-->
            <!--                        {{item.Name}}-->
            <!--                      </th>-->
            <!--                    </tr>-->
            <!--                    </thead>-->
            <!--                    <tbody>-->
            <!--                    <tr v-html="item.Detail">-->
            <!--                    </tr>-->
            <!--                    </tbody>-->
            <!--                  </table>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->

            <hr>

            <div class="row">
              <div class="col-lg-3">
                <h3>Reviews </h3>
                <a href="#" class="btn_1 add_bottom_30" data-bs-toggle="modal" data-bs-target="#myReview">Leave a review</a>
              </div>
              <div class="col-lg-9">
                <div id="general_rating">11 Reviews
                  <div class="rating">
                    <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                  </div>
                </div>
                <!-- End general_rating -->
                <div class="row" id="rating_summary">
                  <div class="col-md-6">
                    <ul>
                      <li>Position
                        <div class="rating">
                          <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                        </div>
                      </li>
                      <li>Tourist guide
                        <div class="rating">
                          <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul>
                      <li>Price
                        <div class="rating">
                          <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                        </div>
                      </li>
                      <li>Quality
                        <div class="rating">
                          <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- End row -->
                <hr>
                <div class="review_strip_single">
                  <img src="/assets/img/avatar1.jpg" alt="Image" class="rounded-circle">
                  <small> - 10 March 2015 -</small>
                  <h4>Jhon Doe</h4>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                  </p>
                  <div class="rating">
                    <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                  </div>
                </div>
                <!-- End review strip -->

                <div class="review_strip_single">
                  <img src="/assets/img/avatar3.jpg" alt="Image" class="rounded-circle">
                  <small> - 10 March 2015 -</small>
                  <h4>Jhon Doe</h4>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                  </p>
                  <div class="rating">
                    <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                  </div>
                </div>
                <!-- End review strip -->

                <div class="review_strip_single last">
                  <img src="/assets/img/avatar2.jpg" alt="Image" class="rounded-circle">
                  <small> - 10 March 2015 -</small>
                  <h4>Jhon Doe</h4>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                  </p>
                  <div class="rating">
                    <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                  </div>
                </div>
                <!-- End review strip -->
              </div>
            </div>
          </div>
          <!--End  single_tour_desc-->

          <aside class="col-lg-4">
            <p class="d-none d-xl-block d-lg-block">
              <a class="btn_map" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
            </p>
<!--            <div class="box_style_1 expose">-->
<!--              <h3 class="inner">- Booking -</h3>-->
<!--              <div class="row">-->
<!--                <div class="col-sm-6">-->
<!--                  <div class="form-group">-->
<!--                    <label><i class="icon-calendar-7"></i> Date</label>-->
<!--                    &lt;!&ndash;                  <input class="date-pick form-control" type="date">&ndash;&gt;-->
<!--                    <a-date-picker-->
<!--                        format="DD-MM-YYYY"-->
<!--                        :disabled-date="disabledDate"-->
<!--                    />-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-6">-->
<!--                  <div class="form-group">-->
<!--                    <label>Person</label>-->
<!--                    <div class="numbers-row">-->
<!--                      <div class="dec button_inc" @click="changeCounter('-1')">-</div>-->
<!--                      <input type="text" value="1" id="adults" class="qty2 form-control" name="quantity">-->
<!--                      <div class="inc button_inc" @click="changeCounter('1')">+</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <br>-->
<!--              <table class="table table_summary">-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                  <td>-->
<!--                    Person-->
<!--                  </td>-->
<!--                  <td class="text-end">-->
<!--                    3-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td>-->
<!--                    Total amount-->
<!--                  </td>-->
<!--                  <td class="text-end">-->
<!--                    3x {{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format((currentData.Price *(100))/100)}}-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr class="total">-->
<!--                  <td>-->
<!--                    Total cost-->
<!--                  </td>-->
<!--                  <td class="text-end">-->
<!--                    {{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(3*(currentData.Price *(100))/100)}}-->
<!--                  </td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--              </table>-->
<!--              <a class="btn_full" href="cart.html">Book now</a>-->
<!--              <a class="btn_full_outline" href="#"><i class=" icon-heart"></i> Add to whislist</a>-->
<!--            </div>-->
            <!--/box_style_1 -->

            <div class="box_style_4">
              <i class="icon_set_1_icon-90"></i>
              <h4><span>Book</span> by phone</h4>
              <a href="tel://004542344599" class="phone">+45 423 445 99</a>
              <small>Monday to Friday 9.00am - 7.30pm</small>
            </div>

          </aside>
        </div>
        <!--End row -->
      </div>
      <!--End container -->

      <div id="overlay"></div>
      <!-- Mask on input focus -->
    </main>
  </div>
</template>
<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/common_scripts_min.js"></script>
<script src="js/functions.js"></script>

<!-- Date and time pickers -->

<script>
import moment from 'moment';
import LocationService from "@/service/LocationService";
import FlightService from "@/service/FlightService";

export default {
  name:"example1",
  data(){
    return{
      location:[],
      currentData:{
        Id:undefined,
        IsRoundTicket:undefined,
        DepartureId:undefined,
        DepartureAt:undefined,
        ReturnAt:undefined,
        DestinationId:undefined,
        Description: undefined,
        Detail:undefined,
        Thumbnail: undefined,
        Duration: undefined,
        Price:undefined,
        Status:undefined,
        CreatedAt:undefined,
        UpdatedAt:undefined,
        DeletedAt:undefined,
      },
    };
  },
  created() {
    localStorage.setItem('link',this.$route.fullPath);
    this.getFlights(this.$route.params.id)
    this.getLocations()
  },
  methods: {
    moment,
    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },

    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },

    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    },

    disabledRangeTime(_, type) {
      if (type === 'start') {
        return {
          disabledHours: () => this.range(0, 60).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      }
      return {
        disabledHours: () => this.range(0, 60).splice(20, 4),
        disabledMinutes: () => this.range(0, 31),
        disabledSeconds: () => [55, 56],
      };
    },
    getFlights(id) {
      FlightService.detail(id).then(
          res => {
            this.currentData = res.data.result.recordset[0];
            console.log(this.currentData);
            console.log(res.data.result.recordset[0]);
          }
      )
    }, getLocations() {
      LocationService.getAll().then(
          res => {
            this.location = res.data.records;
            for (let j = 0; j < this.location.length; j++) {
              if (this.location[j].Id == this.currentData.DepartureId) {
                this.currentData.DepartureId = this.location[j].Name;
              }
            }
            for (let j = 0; j < this.location.length; j++) {
              if (this.location[j].Id == this.currentData.DestinationId) {
                this.currentData.DestinationId = this.location[j].Name;
              }
            }
          }
      )
    },
  }
};


</script>
<style lang="css">

.agile__nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}
.agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;
  height: 500px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
</style>



