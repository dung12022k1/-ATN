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
            <a-select placeholder ="Search by category" v-model="params.category" >
              <a-select-option :value='""'>Search by category</a-select-option>
              <a-select-option v-for="item in category" :key="item.Id" :value="item.Id" >
                {{item.Name}}
              </a-select-option>
            </a-select>
          </a-form-item>
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
          <a-form-item>
            <a-select placeholder ="Search by Duration" v-model="params.duration" >
              <a-select-option :value='""'>Search by duration</a-select-option>
              <a-select-option v-for="item in 11" :key="item" :value="item" >
                {{item}}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select placeholder ="Search by location" v-model="params.LocationId" >
              <a-select-option :value='""'>Search by LocationId</a-select-option>
              <a-select-option v-for="item in 11" :key="item" :value="item" >
                {{item}}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select placeholder ="Search by departure" v-model="params.rating" >
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
        <router-link to="/tours/create">
          <a-button type="primary" icon="plus">
            Add Tour
          </a-button>
        </router-link>
      </div>
      <a-table :columns="columns" :pagination="false" rowKey="id" :data-source="data">
         <span slot="category" slot-scope="text">
           {{ text.name }}
        </span>
        <span slot="Duration" slot-scope="text" >
            <span v-if="text ==1">
                {{text}} Day
            </span>
          <span v-else>
            {{text}} Days
          </span>
        </span>
<!--        <span slot="price" slot-scope="text">-->
<!--          {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(text)}}/Per-->
<!--        </span>-->
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
          <a class="button" :href="'/tours/edit/'+ record.Id ">
            <a-icon style="font-size: 25px" type="edit"/>
          </a> |
          <a class="button" :href="'/tours/detailtour/'+ record.Id ">
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
import TourService from "@/service/TourService";
import LocationService from "@/service/LocationService";
import TourCategoriesService from "@/service/TourCategoriesService";
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
    this.getTours()
    this.getLocations()
    this.getCategories()
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
     await TourCategoriesService.getAll(this.params).then(
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
    showDeleteConfirm(pId,value) {
      if(value ==1) {
        this.$confirm({
          title: 'Do you want enable this tour',
          onOk: () => {
            this.deleteTours(pId, value)
            this.onShowSizeChange()
            this.getTours()
            /* this.onShowSizeChange()*/
          },
          onCancel() {
            console.log("Cancel")
          }
        })
      }else {
        this.$confirm({
          title: 'Do you want disable this tour',
          onOk: () => {
            this.deleteTours(pId, value)
            this.onShowSizeChange()
            this.getTours()
            /* this.onShowSizeChange()*/
          },
          onCancel() {
            console.log("Cancel")
          }
        })
      }
    },
    deleteTours(pId,value) {
      TourService.delete(pId,value).then(
          response=>{
            console.log(response.data)
          }
      )
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