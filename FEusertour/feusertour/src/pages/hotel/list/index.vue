<template>
  <div>

    <section class="parallax-window" data-parallax="scroll" style="background: gray" data-natural-width="1400" data-natural-height="470">
      <div class="parallax-content-1 opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
        <div class="animated fadeInDown">
          <h1>Paris Hotels</h1>
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
                    <h6>Location</h6>
                    <a-form-item>
                      <a-select style="width: 100%" placeholder ="Search by LocationId" v-model="params.location" >
                        <a-select-option :value='""' >Search by location</a-select-option>
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
                        <a-select-option :value="10">
                          10$
                        </a-select-option>
                        <a-select-option :value="50">
                          50$
                        </a-select-option>
                        <a-select-option :value="100">
                          100$
                        </a-select-option>
                        <a-select-option :value="200">
                          200$
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item>
                      <a-select placeholder="Max price" v-model="params.price1">
                        <a-select-option :value='""'>
                          Max Price
                        </a-select-option>
                        <a-select-option :value="50">
                          50$
                        </a-select-option>
                        <a-select-option :value="100">
                          100$
                        </a-select-option>
                        <a-select-option :value="200">
                          200$
                        </a-select-option>
                        <a-select-option :value="500">
                          500$
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


            <template v-for="hotel in data">
              <div class="strip_all_tour_list wow fadeIn" v-bind:key="hotel.Id"  data-wow-delay="0.1s">
                <div class="row" >
                  <div class="col-lg-4 col-md-4 position-relative">
                    <div class="ribbon_3 popular"><span>Popular</span>
                    </div>
<!--                    <div class="wishlist">-->
<!--                      <a class="tooltip_flip tooltip-effect-1" href="javascript:void(0);">+<span class="tooltip-content-flip"><span class="tooltip-back">Add to wishlist</span></span></a>-->
<!--                    </div>-->
                    <div class="img_list">
                      <a :href="'/hoteldetail'+hotel.Id"><img :src="hotel.Thumbnail" alt="Image">
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="hotel_list_desc">
                      <div class="score">Superb<span>9.0</span>
                      </div>
                      <div class="tour_list_desc" >
                        <div class="rating" v-if="hotel.Rating ==1"><i class="icon-smile voted"></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile"></i> </div>
                        <div class="rating" v-if="hotel.Rating ==2"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile  "></i><i class="icon-smile  "></i><i class="icon-smile"></i></div>
                        <div class="rating" v-if="hotel.Rating ==3"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile voted  "></i><i class="icon-smile voted "></i><i class="icon-smile"></i></div>
                        <div class="rating" v-if="hotel.Rating ==4"><i class="icon-smile voted"></i><i class="icon-smile voted "></i><i class="icon-smile voted  "></i><i class="icon-smile voted  "></i><i class="icon-smile"></i></div>
                        <div class="rating" v-if="hotel.Rating ==5"><i class="icon-smile voted"></i><i class="icon-smile  voted"></i><i class="icon-smile  voted"></i><i class="icon-smile  voted"></i><i class="icon-smile voted"></i>
                        </div>
                      <h3><strong>{{hotel.Name}}</strong></h3>
                      <p>{{hotel.Description}}</p>
                      <ul class="add_info">
                        <li>
                          <a href="javascript:void(0);" class="tooltip-1" data-bs-placement="top" title="Free Wifi"><i class="icon_set_1_icon-86"></i></a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="tooltip-1" data-bs-placement="top" title="Plasma TV with cable channels"><i class="icon_set_2_icon-116"></i></a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="tooltip-1" data-bs-placement="top" title="Swimming pool"><i class="icon_set_2_icon-110"></i></a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="tooltip-1" data-bs-placement="top" title="Fitness Center"><i class="icon_set_2_icon-117"></i></a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="tooltip-1" data-bs-placement="top" title="Restaurant"><i class="icon_set_1_icon-58"></i></a>
                        </li>
                      </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-2 col-md-2" >
                    <div class="price_list">
                      <div style="padding-left:25px" v-if="hotel.Id == hotel.Id"><sup>${{hotel.Price}}</sup>
                        <p><a :href="'/hoteldetail'+hotel.Id" class="btn_1">Details</a></p>
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

import HotelService from "@/service/HotelService";
import LocationService from "@/service/LocationService";
const columns = [
  {
    title: 'ID',
    dataIndex: 'Id',
    key: 'Id',
  },
  {
    title: 'Hotel Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Image',
    dataIndex: 'Thumbnail',
    key: 'Thumbnail',
    ellipsis: true,
    scopedSlots: {customRender: 'thumbnail'}
  },
  // {
  //   title: 'DepartureId',
  //   dataIndex: 'DepartureId',
  //   key: 'DepartureId',
  //   ellipsis: true,
  //   scopedSlots: {customRender: 'DepartureId'}
  // },
  // {
  //   title: 'DestinationId',
  //   dataIndex: 'DestinationId',
  //   key: 'DestinationId',
  //   ellipsis: true,
  //   scopedSlots: {customRender: 'DestinationId'},
  // },
  // {
  //   title: 'Status',
  //   dataIndex: 'Status',
  //   key: 'Status',
  //   ellipsis: true,
  // },
  // {
  //   title:'Detail',
  //   dataIndex:'Detail',
  //   key:'Detail',
  //   ellipsis: true,
  //   scopedSlots: {customRender: 'detail'}
  // },
  // {
  //   title: 'Duration',
  //   dataIndex: 'Duration',
  //   key: 'Duration',
  //   ellipsis: true,
  //   scopedSlots: {customRender: 'Duration'},
  // },


  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address',
    ellipsis: true,
    scopedSlots: {customRender: 'Address'},
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
    ellipsis: true,
    scopedSlots: {customRender: 'Price'},
  },
  {
    title: 'Location',
    dataIndex: 'LocationId',
    key: 'LocationId',
    ellipsis: true,
    scopedSlots: {customRender: 'LocationId'}
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
      categories:[],
      params: {
        page: 1,
        limit: 10,
        search: "",
        name: "",
        categoryId: undefined,
        sortType: undefined,
        LocationId: undefined,
        price:"",
        price1:"",
        rating:"",
        location:"",
        Description:""

      }
    };
  },
  created() {
    localStorage.setItem('link',this.$route.fullPath);
    this.getHotel()
    this.getLocations()
  },
  methods: {
    async   getHotel() {
      await HotelService.getAll(this.params).then(
          rs => {
            try {
              this.data = rs.data.records;
              if(this.params.search !="" ||  this.params.price !=""|| this.params.price1 !=""|| this.params.rating !=""||this.params.Description !=""||this.params.location!="") {
                this.totalRecords = rs.data.filtered;
              }else {
                this.totalRecords = rs.data.totalrecords;
              }
              console.log((this.totalRecords))
              this.totalPages = rs.data.totalPages;
              console.log(this.totalPages);
              this.getLocations()
              for(let i=0;i<this.data.length;i++){
                this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0];
                //   if(this.data[i].Status==1){
                //     this.data[i].Status = "Active"
                //   }else {
                //     this.data[i].Status = "Inactive"
                //   }
                //   console.log(this.data[i].Thumbnail);
                // }

                // for(let i=0;i<this.data.length;i++){
                //   this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0];
                //   console.log(this.data[i].Thumbnail);
              }
            }
            catch (e){
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

            for(let i =0;i<this.data.length;i++){
              for(let j=0;j<this.location.length;j++){
                if(this.location[j].Id == this.data[i].LocationId){
                  this.data[i].LocationId = this.location[j].Name;
                }
              }
            }
          }

      )
    },

    onShowSizeChange(current, limit) {
      this.params.limit = limit;
      this.params.page = current;
      this.getHotel();
    },
    onChange(page, limit) {
      this.params.page = page;
      this.params.limit = limit;
      this.getHotel();
    },
    handleSearch(e){
      e.preventDefault();
      this.params.page = 1;
      console.log(this.params);
      this.getHotel(this.params);

    },
    resetButton(){
      this.params = {
        page: 1,
        limit: 10,
        search: "",
        location: "",
        price:"",
        price1:"",
        rating: ""
      }
      this.getHotel()
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