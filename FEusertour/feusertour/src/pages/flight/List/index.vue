<template>
  <div>

    <section class="parallax-window" data-parallax="scroll" style="background: gray" data-natural-width="1400" data-natural-height="470">
      <div class="parallax-content-1 opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
        <div class="animated fadeInDown">
          <h1>Brand Flights</h1>
          <p>Muchas gracias afición, esto es para vosotros Siuuu</p>
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
      <!-- Position -->

      <div class="collapse" id="collapseMap">
        <div id="map" class="map"></div>
      </div>
      <!-- End Map -->


      <div class="container margin_60">

        <div class="row">
          <aside class="col-lg-3">
            <p>
              <a class="btn_map" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
            </p>

            <a-form @submit="handleSearch" class="product__search-form">
              <a-button type="primary" html-type="submit" @click="handleSearch">
                Search
              </a-button>
              <div id="filters_col">
                <a data-bs-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt"><i class="icon_set_1_icon-65"></i>Filters</a>
                <div class="collapse show" id="collapseFilters">
                  <div class="filter_type">
                    <h6>Description/Detail</h6>
                    <a-form-item>
                      <a-input-search v-model="params.search" placeholder="Description/Detail">
                        <a-icon type="search"/>
                      </a-input-search>
                    </a-form-item>
                  </div>
                  <div class="filter_type">
                    <h6>Departure - Destination</h6>
                    <a-form-item>
                      <a-select placeholder ="Search by departure" v-model="params.departure" >
                        <a-select-option :value='""'>Search by departure</a-select-option>
                        <a-select-option v-for="item in location" :key="item.Id" :value="item.Id" >
                          {{item.Name}}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item>
                      <a-select placeholder ="Search by departure" v-model="params.destination" >
                        <a-select-option :value='""'>Search by destination</a-select-option>
                        <a-select-option v-for="item in location" :key="item.Id" :value="item.Id" >
                          {{item.Name}}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </div>
                  <div class="filter_type">
                    <h6>Price</h6>
                    <a-form-item>
                      <a-select placeholder="Min price" v-model="params.price">
                        <a-select-option :value='""'>
                          Min Price
                        </a-select-option>
                        <a-select-option :value="100">
                          100$
                        </a-select-option>
                        <a-select-option :value="500">
                          500$
                        </a-select-option>
                        <a-select-option :value="1000">
                          1000$
                        </a-select-option>
                        <a-select-option :value="2000">
                          2000$
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item>
                      <a-select placeholder="Max price" v-model="params.price1">
                        <a-select-option :value='""'>
                          Max Price
                        </a-select-option>
                        <a-select-option :value="500">
                          500$
                        </a-select-option>
                        <a-select-option :value="1000">
                          1000$
                        </a-select-option>
                        <a-select-option :value="2000">
                          2000$
                        </a-select-option>
                        <a-select-option :value="5000">
                          5000$
                        </a-select-option>
                      </a-select>

                    </a-form-item>
                  </div>
<!--                  <div class="filter_type">-->
<!--                    <h6>Is Round Ticket</h6>-->
<!--                    <input type="checkbox" id="checkbox" v-model="checked" />-->
<!--                    <label for="checkbox">{{ checked }}</label>-->
<!--                  </div>-->

                </div>
                <!--End collapse -->
              </div>
              <a-button type="primary" html-type="submit" @click="resetButton">
                Reset
              </a-button>
              <!--End filters col-->
              <div class="box_style_2 d-none d-sm-block">
                <i class="icon_set_1_icon-57"></i>
                <h4>Need <span>Help?</span></h4>
                <a href="tel://004542344599" class="phone">+45 423 445 99</a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>

            </a-form>
          </aside>
          <!--End aside -->
          <div class="col-lg-9">
            <template v-for="flight in data">
              <div class="strip_all_tour_list wow fadeIn" v-bind:key="flight.Id"  data-wow-delay="0.1s">
                <div class="row" >
                  <div class="col-lg-4 col-md-4 position-relative">
                    <div class="ribbon_3 popular"><span>Popular</span>
                    </div>
<!--                    <div class="wishlist">-->
<!--                      <a class="tooltip_flip tooltip-effect-1" href="javascript:void(0);">+<span class="tooltip-content-flip"><span class="tooltip-back">Add to wishlist</span></span></a>-->
<!--                    </div>-->
                    <div class="img_list">
                      <a :href="'/flightdetail'+flight.Id"><img :src="flight.Thumbnail" alt="Image">
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="tour_list_desc" >
<!--                      <div class="rating" v-if="tour.Rating ==1"><i class="icon-smile voted"></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile"></i> </div>-->
<!--                      <div class="rating" v-if="tour.Rating ==2"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile"></i></div>-->
<!--                      <div class="rating" v-if="tour.Rating ==3"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile voted  "></i><i class="icon-smile voted "></i><i class="icon-smile"></i></div>-->
<!--                      <div class="rating" v-if="tour.Rating ==4"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile voted  "></i><i class="icon-smile voted  "></i><i class="icon-smile"></i></div>-->
<!--                      <div class="rating" v-if="tour.Rating ==5"><i class="icon-smile voted"></i><i class="icon-smile  voted"></i><i class="icon-smile  voted"></i><i class="icon-smile  voted"></i><i class="icon-smile voted"></i>-->
<!--                      </div>-->
                      <h3><strong>{{ flight.DepartureId }}</strong>
                        <strong> → </strong>
                        <strong>{{ flight.DestinationId }}</strong></h3>
                      <p>{{ flight.Description }}</p>
                      <ul class="add_info">
                        <li>
                          <div class="tooltip_styled tooltip-effect-4">
                            <span class="tooltip-item"><i class="icon_set_1_icon-83"></i></span>
                            <div class="tooltip-content">
                              <h4>Schedule</h4>
                              <strong>Monday to Friday</strong> 09.00 AM - 5.30 PM
                              <br>
                              <strong>Saturday</strong> 09.00 AM - 5.30 PM
                              <br>
                              <strong>Sunday</strong> <span class="label label-danger">Closed</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="tooltip_styled tooltip-effect-4">
                            <span class="tooltip-item"><i class="icon_set_1_icon-41"></i></span>
                            <div class="tooltip-content">
                              <h4>Address</h4> Musée du Louvre, 75058 Paris - France
                              <br>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="tooltip_styled tooltip-effect-4">
                            <span class="tooltip-item"><i class="icon_set_1_icon-97"></i></span>
                            <div class="tooltip-content">
                              <h4>Languages</h4> English - French - Chinese - Russian - Italian
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="tooltip_styled tooltip-effect-4">
                            <span class="tooltip-item"><i class="icon_set_1_icon-27"></i></span>
                            <div class="tooltip-content">
                              <h4>Parking</h4> 1-3 Rue Elisée Reclus
                              <br> 76 Rue du Général Leclerc
                              <br> 8 Rue Caillaux 94923
                              <br>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="tooltip_styled tooltip-effect-4">
                            <span class="tooltip-item"><i class="icon_set_1_icon-25"></i></span>
                            <div class="tooltip-content">
                              <h4>Transport</h4>
                              <strong>Metro: </strong>Musée du Louvre station (line 1)
                              <br>
                              <strong>Bus:</strong> 21, 24, 27, 39, 48, 68, 69, 72, 81, 95
                              <br>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-2" >
                    <div class="price_list">
                      <div style="padding-left:25px" v-if="flight.Id == flight.Id"><sup>${{flight.Price}}</sup>
                        <p><a :href="'/flightdetail'+flight.Id" class="btn_1">Details</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--End strip -->
            </template>

            <nav aria-label="Page navigation">
              <a-pagination
                  show-size-changer
                  :default-current="this.params.limit"
                  :total="this.totalRecords"
                  @showSizeChange="onShowSizeChange"
                  @change="onChange"
              />
            </nav>
            <!-- end pagination-->

          </div>
          <!-- End col lg-9 -->
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </main>
    <!-- End main -->
  </div>

</template>
<script>
import LocationService from "@/service/LocationService";
import FlightService from "@/service/FlightService";
const columns = [
  {
    title: 'ID',
    dataIndex: 'Id',
    key: 'Id',
  },
  {
    title: 'Image',
    dataIndex: 'Thumbnail',
    key: 'Thumbnail',
    ellipsis: true,
    scopedSlots: {customRender: 'thumbnail'}
  },
  {
    title: 'Departure',
    dataIndex: 'DepartureId',
    key: 'DepartureId',
    ellipsis: true,
    scopedSlots: {customRender: 'DepartureId'}
  },
  {
    title: 'Destination',
    dataIndex: 'DestinationId',
    key: 'DestinationId',
    ellipsis: true,
    scopedSlots: {customRender: 'DestinationId'},
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
    ellipsis: true,
    scopedSlots: {customRender: 'Price'},
  },
  {
    title: 'Duration',
    dataIndex: 'Duration',
    key: 'Duration',
    ellipsis: true,
    scopedSlots: {customRender: 'Duration'},
  },
  {
    title: 'Detail',
    dataIndex: 'Detail',
    key: 'Detail',
    ellipsis: true,
    scopedSlots: {customRender: 'Detail'},
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
    ellipsis: true,
    scopedSlots: {customRender: 'Description'},
  },
  {
    title: 'Departure At',
    dataIndex: 'DepartureAt',
    key: 'DepartureAt',
    ellipsis: true,
    scopedSlots: {customRender: 'DepartureAt'}
  },
  {
    title: 'Return At',
    dataIndex: 'ReturnAt',
    key: 'ReturnAt',
    ellipsis: true,
    scopedSlots: {customRender: 'ReturnAt'}
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    ellipsis: true,
    scopedSlots: {customRender: 'Status'},
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    ellipsis: true,
    scopedSlots: {customRender: 'action'},
  },
];
export default {
  data() {
    return {
      data: [],
      data1:[],
      location:[],
      form: {
        productId: undefined,
        quantity: 1
      },
      statuschange:{
        Status:undefined
      },
      columns,
      checkstatus:[],
      body:{
        productId:undefined,
        quantity: 1
      },
      totalRecords: undefined,
      totalPages:undefined,
      limitdt:100,
      params: {
        page: 1,
        limit: 10,
        search: "",
        orderby:"",
        orderDir:"",
        departure:"",
        destination:"",
        price:"",
        price1:"",
        duration:"",
        duration1:""
      }
    };
  },
  created() {
    localStorage.setItem('link',this.$route.fullPath);
    this.getFlights()
    this.getLocations()
  },
  methods: {
    async   getFlights() {
      await FlightService.getAll(this.params).then(
          rs => {
            try {
              this.data = rs.data.records;
              if(this.params.search !="" || this.params.departure !="" || this.params.destination !="" || this.params.orderby !=""||this.params.orderDir !="" || this.params.price !=""|| this.params.price1 !=""||this.params.duration !=""||this.params.duration1 !="") {
                this.totalRecords = rs.data.filtered;
              }else {
                this.totalRecords = rs.data.totalrecords;
              }
              console.log(this.data)
              console.log(this.totalPages);
              this.getLocations();
              for(let i=0;i<this.data.length;i++){
                if(this.data[i].IsRoundTicket ==true){
                  this.data[i].IsRoundTicket = "Yes"
                }else {
                  this.data[i].IsRoundTicket = "No"
                }
              }
              for(let i=0;i<this.data.length;i++){
                this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0]; //FLIGHT khong can dong nay :)
                this.data[i].DepartureAt = this.data[i].DepartureAt.split("T")[0];
                this.data[i].ReturnAt = this.data[i].ReturnAt.split("T")[0];
                // console.log(this.data[i].Thumbnail);
              }
            }catch (e){
              console.log(e);
              console.log("có lỗi");
            }
          }
      )
    },
    async getLocations(){
      await  LocationService.getAll().then(
          res => {
            this.location = res.data.records;
            for(let i =0;i<this.data.length;i++){
              for(let j=0;j<this.location.length;j++){
                if(this.location[j].Id == this.data[i].DepartureId){
                  this.data[i].DepartureId = this.location[j].Name;
                }
              }
            }
            for(let i =0;i<this.data.length;i++){
              for(let j=0;j<this.location.length;j++){
                if(this.location[j].Id == this.data[i].DestinationId){
                  this.data[i].DestinationId = this.location[j].Name;
                }
              }
            }
          }

      )
    },
    onShowSizeChange(current, limit) {
      this.params.limit = limit;
      this.params.page = current;
      this.getFlights();
    },
    onChange(page, limit) {
      this.params.page = page;
      this.params.limit = limit;
      this.getFlights();
    },
    handleSearch(e){
      e.preventDefault();
      this.params.page = 1;
      console.log(this.params);
      this.getFlights(this.params);

    },
    resetButton(){
      this.params = {
        page: 1,
        limit: 10,
        search: "",
        orderby:"",
        orderDir:"",
        departure:"",
        destination:"",
        price:"",
        price1:"",
        duration:"",
        duration1:""
      }
      this.getFlights()
    },
    uppercase1(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
<style scoped>
.product__search-form{
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
}

</style>