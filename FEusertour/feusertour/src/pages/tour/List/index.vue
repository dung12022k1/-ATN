<template>
  <div>

    <section class="parallax-window" data-parallax="scroll" style="background: gray" data-natural-width="1400" data-natural-height="470">
      <div class="parallax-content-1 opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
        <div class="animated fadeInDown">
          <h1>Paris tours</h1>
          <p>Cursus neque cursus curae ante scelerisque vehicula</p>
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
                  <h6>Name/Description/Detail</h6>
                  <a-form-item>
                    <a-input-search v-model="params.search" placeholder="Name/Description/Detail">
                      <a-icon type="search"/>
                    </a-input-search>
                  </a-form-item>
                </div>
                <div class="filter_type">
                  <h6>Category</h6>
                  <a-form-item>
                    <a-select style="width: 100%" placeholder ="Search by category" v-model="params.category" >
                      <a-select-option :value='""' >Search by category</a-select-option>
                      <a-select-option v-for="item in category" :key="item.Id" :value="item.Id" >
                        <span v-if="item.Id =='TOURC_1'"><i class="icon_set_1_icon-3"></i>{{item.Name}}</span>
                        <span v-else-if="item.Id =='TOURC_2'"><i class="icon_set_1_icon-44"></i>{{item.Name}}</span>
                        <span v-else-if="item.Id =='TOURC_3'"><i class="icon_set_1_icon-4"></i>{{item.Name}}</span>
                        <span v-else-if="item.Id =='TOURC_4'"><i class="icon_set_1_icon-37"></i>{{item.Name}}</span>
                        <span v-else-if="item.Id =='TOURC_5'"><i class="icon_set_1_icon-14"></i>{{item.Name}}</span>
                        <span v-else-if="item.Id =='TOURC_6'"><i class="icon_set_1_icon-43"></i>{{item.Name}}</span>
                        <span v-else-if="item.Id =='TOURC_7'"><i class="icon_set_1_icon-51"></i>{{item.Name}}</span>
                        <span v-else><i class="icon_set_1_icon-28"></i>{{item.Name}}</span>
                      </a-select-option>
                    </a-select>
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
                  <h6>Duration</h6>
                  <a-form-item>
                    <a-select placeholder ="Search by Duration" v-model="params.duration" >
                      <a-select-option :value='""'>Search by duration</a-select-option>
                      <a-select-option v-for="item in 11" :key="item" :value="item" >
                        {{item}}
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
                <div class="filter_type">
                  <h6>Rating</h6>
                  <a-form-item>
                    <a-select placeholder ="Search by departure" v-model="params.rating" >
                      <a-select-option :value='""'>Search by rating</a-select-option>
                      <a-select-option v-for="item in 5" :key="item" :value="item" >
                        {{item}}<img src="https://img.icons8.com/emoji/512/star-emoji.png" style="width: 20px;height: 20px"/>
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </div>

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

<!--            <div id="tools">-->
<!--              <div class="row justify-content-between">-->
<!--                <div class="col-md-3 col-sm-4">-->
<!--                  <div class="styled-select-filters">-->
<!--                    <select name="sort_price" id="sort_price">-->
<!--                      <option value="" selected>Sort by price</option>-->
<!--                      <option value="lower">Lowest price</option>-->
<!--                      <option value="higher">Highest price</option>-->
<!--                    </select>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-sm-4 d-none d-sm-block text-end">-->
<!--                  <a href="all_tours_grid.html" class="bt_filters"><i class="icon-th"></i></a> <a href="#" class="bt_filters"><i class=" icon-list"></i></a>-->
<!--                </div>-->

<!--              </div>-->
<!--            </div>-->
            <!--/tools -->
            <template v-for="tour in data">
            <div class="strip_all_tour_list wow fadeIn" v-bind:key="tour.Id"  data-wow-delay="0.1s">
              <div class="row" >
                <div class="col-lg-4 col-md-4 position-relative">
                  <div class="ribbon_3 popular"><span>Popular</span>
                  </div>
<!--                  <div class="wishlist">-->
<!--                    <a class="tooltip_flip tooltip-effect-1" href="javascript:void(0);">+<span class="tooltip-content-flip"><span class="tooltip-back">Add to wishlist</span></span></a>-->
<!--                  </div>-->
                  <div class="img_list">
                    <a :href="'/detail'+tour.Id"><img :src="tour.Thumbnail" alt="Image">
                    </a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="tour_list_desc" >
                    <div class="rating" v-if="tour.Rating ==1"><i class="icon-smile voted"></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile"></i> </div>
                    <div class="rating" v-if="tour.Rating ==2"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile"></i></div>
                    <div class="rating" v-if="tour.Rating ==3"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile voted  "></i><i class="icon-smile voted "></i><i class="icon-smile"></i></div>
                    <div class="rating" v-if="tour.Rating ==4"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile voted  "></i><i class="icon-smile voted  "></i><i class="icon-smile"></i></div>
                    <div class="rating" v-if="tour.Rating ==5"><i class="icon-smile voted"></i><i class="icon-smile  voted"></i><i class="icon-smile  voted"></i><i class="icon-smile  voted"></i><i class="icon-smile voted"></i>
                    </div>
                    <h3><strong>{{ tour.Name }}</strong></h3>
                    <p>{{ tour.Description }}</p>
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
                    <div v-for="detail in data1" v-bind:key="detail.Id">
                      <div style="padding-left:25px" v-if="detail.TourId == tour.Id"><sup>${{detail.Price * (100-detail.Discount)/100}}</sup><span class="normal_price_list">${{detail.Price}}</span><small>*Per person</small>
                      <p><a :href="'/detail'+ detail.TourId" class="btn_1">Details</a></p>
                      </div>
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
import TourService from "@/service/TourService";
import LocationService from "@/service/LocationService";
import TourCategoriesService from "@/service/TourCategoriesService";
import TourDetailService from "@/service/TourDetailService";
const columns = [
  {
    title: 'ID',
    dataIndex: 'Id',
    key: 'Id',
  },
  {
    title: 'Tour Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Category',
    dataIndex: 'TourCategoryId',
    key: 'TourCategoryId',
    ellipsis: true,
    scopedSlots: {customRender: 'TourCategoryId'}
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
    title: 'Duration',
    dataIndex: 'Duration',
    key: 'Duration',
    ellipsis: true,
    scopedSlots: {customRender: 'Duration'},
  },
  {
    title: 'Rating',
    dataIndex: 'Rating',
    key: 'Rating',
    ellipsis: true,
    scopedSlots: {customRender: 'Rating'},
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
      category:[],
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
      categories:[],
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
        duration1:"",
        rating:"",
        category:""
      }
    };
  },
  created() {
    localStorage.setItem('link',this.$route.fullPath);
    this.getTours()
    this.getLocations()
    this.getCategories()
    this.getTourDetails()
  },
  methods: {
    async   getTours() {
      await TourService.getAll(this.params).then(
          rs => {
            try {

              this.data = rs.data.records;
              if(this.params.search !="" || this.params.departure !="" || this.params.destination !="" || this.params.orderby !=""||this.params.orderDir !="" || this.params.price !=""|| this.params.price1 !=""|| this.params.rating !=""||this.params.duration !=""||this.params.duration1 !=""||this.params.category!="") {
                this.totalRecords = rs.data.filtered;
              }else {
                this.totalRecords = rs.data.totalItems;
              }

              console.log(this.totalPages);
              this.getLocations()
              this.getCategories()
              this.getTourDetails()
              for(let i=0;i<this.data.length;i++){
                  this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0];
                  // console.log(this.data[i].Thumbnail);
                  // if(this.data[i].Status==1){
                  //   this.data[i].Status ="Active"
                  // }else {
                  //   this.data[i].Status ="Disable"
                  // }
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
   async getCategories(){
     await TourCategoriesService.getAll().then(
          res => {
            this.category = res.data.result;
            for(let i =0;i<this.data.length;i++){
              for(let j=0;j<this.category.length;j++){
                if(this.category[j].Id == this.data[i].TourCategoryId){
                  this.data[i].TourCategoryId = this.category[j].Name;
                }
              }
            }
          }

      )
    },
    async   getTourDetails() {
      // this.params.limit = 100
      await TourDetailService.getAll(this.params).then(
          rs => {
            try {
              this.data1 = rs.data.records;
              this.totalPages = rs.data.totalPages;
              console.log(this.totalPages);
              console.log(this.data)
              // for(let i=0;i<this.data.length;i++){
              //   // this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0];
              //   this.data[i].DepartureDay = this.data[i].DepartureDay.split("T")[0];
              //   this.data[i].CreatedAt = this.data[i].CreatedAt.split("T")[0];
              //   // if(this.data[i].Status==1){
              //   //   this.data[i].Status = "Active"
              //   // }else {
              //   //   this.data[i].Status = "Inactive"
              //   // }
              //
              //   console.log(this.data[i].Thumbnail);
              // }
              this.getLocations();
              this.params.limit =10;
            }catch (e){
              console.log(e);
              console.log("có lỗi");
            }
          }
      )
    },
    onShowSizeChange(current, limit) {
      this.params.limit = limit;
      this.params.page = current;
      this.getTours();
    },
    onChange(page, limit) {
      this.params.page = page;
      this.params.limit = limit;
      this.getTours();
    },
    handleSearch(e){
      e.preventDefault();
      this.params.page = 1;
      console.log(this.params);
      this.getTours(this.params);

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
        duration1:"",
        rating:"",
        category:""
      }
      this.getTours()
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