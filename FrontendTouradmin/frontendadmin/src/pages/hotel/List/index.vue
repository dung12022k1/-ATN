<template>
  <div>
    <a-card>
      <div>
        <a-form @submit="handleSearch" class="product__search-form">
          <a-form-item>
            <a-input-search v-model="params.search" placeholder="Name/Description/Detail">
              <a-icon type="search"/>
            </a-input-search>
          </a-form-item>
          <a-form-item>
            <a-select placeholder ="Search by Location" v-model="params.LocationId" >
              <a-select-option :value='""'>Search by location</a-select-option>
              <a-select-option v-for="item in location" :key="item.Id" :value="item.Id" >
                {{item.Name}}
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item>
            <a-select placeholder ="Search by rating" v-model="params.rating" >
              <a-select-option :value='""'>Search by rating</a-select-option>
              <a-select-option v-for="item in 5" :key="item" :value="item" >
                {{item}}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select placeholder="Min price" v-model="params.price">
              <a-select-option :value='""'>
                Min Price
              </a-select-option>
              <a-select-option :value="100">
                100
              </a-select-option>
              <a-select-option :value="500">
                500
              </a-select-option>
              <a-select-option :value="1000">
                1000
              </a-select-option>
              <a-select-option :value="2000">
                2000
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select placeholder="Max price" v-model="params.price1">
              <a-select-option :value='""'>
                Max Price
              </a-select-option>
              <a-select-option :value="500">
                500
              </a-select-option>
              <a-select-option :value="1000">
                1000
              </a-select-option>
              <a-select-option :value="2000">
                2000
              </a-select-option>
              <a-select-option :value="5000">
                5000
              </a-select-option>
            </a-select>

          </a-form-item>
        </a-form>
        <a-button type="primary" html-type="submit" @click="handleSearch">
          Search
        </a-button>
        <a-button type="primary" html-type="submit" @click="resetButton" style="margin-left: 20px">
          Reset
        </a-button>
      </div>
      <div style="padding-bottom: 20px; padding-top: 20px">
        <router-link to="/hotels/create">
          <a-button type="primary" icon="plus">
            Add hotels
          </a-button>
        </router-link>
      </div>
      <a-table :columns="columns" :pagination="false" rowKey="id" :data-source="data">
         <span slot="category" slot-scope="text">
           {{ text.name }}
        </span>
        <span slot="Price" slot-scope="text">
                  {{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(text)}}
                </span>
        <span slot="thumbnail" slot-scope="text">
             <img :src="text" style="width: 70%">
         </span>
        <span slot="Rating" slot-scope="text">
             {{text}}
          <img src="https://img.icons8.com/emoji/512/star-emoji.png" style="width: 20px;height: 20px"/>
         </span>
        <span slot="Status" slot-scope="text">
          <span v-if="text==1">
            Active
          </span>
          <span v-else>Disable</span>
          </span>
        <!--        <span slot="detail" slot-scope="text" v-html="text">-->
        <!--        </span>-->
        <div slot="action" slot-scope="text,record">
          <a class="button" v-if="record.Status==1" @click="showDeleteConfirm(record.Id,0)">
            <a-icon style="font-size: 25px" type="delete"/>
          </a>
          <a class="button" v-else @click="showDeleteConfirm(record.Id,1)">
            <a-icon style="font-size: 25px" type="plus"/>
          </a>|
          <a class="button" :href="'/hotels/edit/'+ record.Id ">
            <a-icon style="font-size: 25px" type="edit"/>
          </a> |
          <a class="button" :href="'/hotels/detailhotel/'+ record.Id ">
            <a-icon style="font-size: 25px" type="info-circle"/>
          </a>
        </div>
      </a-table>
      <div style="padding-top: 15px">
        <a-pagination
            show-size-changer
            :default-current="this.params.limit"
            :total="this.totalRecords"
            @showSizeChange="onShowSizeChange"
            @change="onChange"
        />
      </div>
    </a-card>
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
        name: "",
        categoryId: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        sortType: undefined,
        LocationId: undefined
      }
    };
  },
  created() {
    this.getHotel()
    this.getLocations()
  },
  methods: {
    async   getHotel() {
      await HotelService.getAll(this.params).then(
          rs => {
            try {
              this.data = rs.data.records;
              if(this.params.search !="" ||  this.params.price !=""|| this.params.price1 !=""|| this.params.rating !=""||this.params.duration !=""||this.params.duration1 !=""||this.params.location!="") {
                this.totalRecords = rs.data.filtered;
              }else {
                this.totalRecords = rs.data.totalItems;
              }
              console.log((this.totalRecords))
              this.totalPages = rs.data.totalPages;
              console.log(this.totalPages);

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
    showDeleteConfirm(pId,value) {
      if(value ==1) {
        this.$confirm({
          title: 'Do you want enable this hotel',
          onOk: () => {
            this.deleteHotels(pId, value)
            this.onShowSizeChange()
            this.getHotel()
            /* this.onShowSizeChange()*/
          },
          onCancel() {
            console.log("Cancel")
          }
        })
      }else {
        this.$confirm({
          title: 'Do you want disable this hotel',
          onOk: () => {
            this.deleteHotels(pId, value)
            this.onShowSizeChange()
            this.getHotel()
            /* this.onShowSizeChange()*/
          },
          onCancel() {
            console.log("Cancel")
          }
        })
      }
    },
    deleteHotels(pId,value) {
      HotelService.delete(pId,value).then(
          response=>{
            console.log(response.data)
          }
      )
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
        price:"",
        price1:"",
        rating:"",
        location:""
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