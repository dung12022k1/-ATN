<template>
  <div>
    <a-card>
      <div>
        <a-form @submit="handleSearch" class="product__search-form">
          <a-form-item>
            <a-input-search v-model="params.name" placeholder="Search by name">
              <a-icon type="search"/>
            </a-input-search>
          </a-form-item>
          <a-form-item>
            <a-select placeholder="Search by category" v-model="params.categoryId">
              <a-select-option v-for="item in categories" :key="item.id" :value="item.id">
                {{item.name}}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select placeholder="Min price" v-model="params.maxPrice">
              <a-select-option :value="10000">
                10000
              </a-select-option>
              <a-select-option :value="20000">
                20000
              </a-select-option>
              <a-select-option :value="30000">
                30000
              </a-select-option>
              <a-select-option :value="40000">
                40000
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select placeholder="Max price" v-model="params.minPrice">
              <a-select-option :value="100000">
                100000
              </a-select-option>
              <a-select-option :value="200000">
                200000
              </a-select-option>
              <a-select-option :value="300000">
                300000
              </a-select-option>
              <a-select-option :value="400000">
                400000
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
            Add tours
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
        <span slot="Price" slot-scope="text">
          {{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(text)}}
        </span>
        <span slot="Discount" slot-scope="text">
          {{text}}%
        </span>
        <span slot="DepartureDay" slot-scope="text">
            {{text.split("-")[2]}}-{{text.split("-")[1]}}-{{text.split("-")[0]}}
        </span>
        <span slot="CreatedAt" slot-scope="text">
            {{text.split("-")[2]}}-{{text.split("-")[1]}}-{{text.split("-")[0]}}
        </span>
        <span slot="thumbnail" slot-scope="text">
             <img :src="text" style="width: 70%">
         </span>
        <!--        <span slot="detail" slot-scope="text" v-html="text">-->
        <!--        </span>-->
        <div slot="action" slot-scope="text,record">
          <a class="button" @click="showDeleteConfirm(record.id)">
            <a-icon style="font-size: 25px" type="delete"/>
          </a> |
          <a class="button" :href="'/products/edit/'+ record.id ">
            <a-icon style="font-size: 25px" type="edit"/>
          </a> |
          <a class="button" :href="'/products/detail/'+ record.id ">
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
import TourDetailService from "@/service/TourDetailService";
const columns = [
  {
    title: 'ID',
    dataIndex: 'Id',
    key: 'Id',
  },
  {
    title: 'Tour Id',
    dataIndex: 'TourId',
    key: 'TourId',
  },
  {
    title: 'Departure Day',
    dataIndex: 'DepartureDay',
    key: 'DepartureDay',
    ellipsis: true,
    scopedSlots: {customRender: 'DepartureDay'}
  },
  {
    title: 'Available Seat',
    dataIndex: 'AvailableSeat',
    key: 'AvailableSeat',
    ellipsis: true,
    scopedSlots: {customRender: 'AvailableSeat'}
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
    ellipsis: true,
    scopedSlots: {customRender: 'Price'},
  },
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
  {
    title: 'Discount',
    dataIndex: 'Discount',
    key: 'Discount',
    ellipsis: true,
    scopedSlots: {customRender: 'Discount'},
  },
  {
    title: 'Created At',
    dataIndex: 'CreatedAt',
    key: 'CreatedAt',
    ellipsis: true,
    scopedSlots: {customRender: 'CreatedAt'},
  },
  // {
  //   title: 'Action',
  //   dataIndex: 'action',
  //   key: 'action',
  //   ellipsis: true,
  //   scopedSlots: {customRender: 'action'},
  // },
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
      columns,
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
        sortType: undefined
      }
    };
  },
  created() {
    this.getTours()
    this.getLocations()
  },
  methods: {
    async   getTours() {
      await TourDetailService.getAll(this.params).then(
          rs => {
            try {
              this.data = rs.data.records;
              this.totalRecords = rs.data.totalItems;
              console.log((this.totalRecords))
              this.totalPages = rs.data.totalPages;
              console.log(this.totalPages);

              for(let i=0;i<this.data.length;i++){
                // this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0];
                this.data[i].DepartureDay = this.data[i].DepartureDay.split("T")[0];
                this.data[i].CreatedAt = this.data[i].CreatedAt.split("T")[0];
                // if(this.data[i].Status==1){
                //   this.data[i].Status = "Active"
                // }else {
                //   this.data[i].Status = "Inactive"
                // }

                console.log(this.data[i].Thumbnail);
              }
              this.getLocations();
            }catch (e){
              console.log(e);
              console.log("có lỗi");
            }
          }
      )
    },
    // getLocations(){
    //   LocationService.getAll().then(
    //       res => {
    //         this.location = res.data.records;
    //         for(let i =0;i<this.data.length;i++){
    //           for(let j=0;j<this.location.length;j++){
    //             if(this.location[j].Id == this.data[i].DepartureId){
    //               this.data[i].DepartureId = this.location[j].Name;
    //             }
    //           }
    //         }
    //         for(let i =0;i<this.data.length;i++){
    //           for(let j=0;j<this.location.length;j++){
    //             if(this.location[j].Id == this.data[i].DestinationId){
    //               this.data[i].DestinationId = this.location[j].Name;
    //             }
    //           }
    //         }
    //       }
    //
    //   )
    // },
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
    // showDeleteConfirm(pId) {
    //   this.$confirm({
    //     title: 'Do you want delete this product',
    //     onOk: () => {
    //       this.deleteProduct(pId)
    //       this.onShowSizeChange()
    //       this.getProducts();
    //       /* this.onShowSizeChange()*/
    //     },
    //     onCancel() {
    //       console.log("Cancel")
    //     }
    //   })
    // },
    // // deleteProduct(pId) {
    // //   // ProductService.delete(pId);
    // //   this.getProducts();
    // // },
    // handleSearch(e){
    //   e.preventDefault();
    //   this.params.page = 1;
    //   console.log(this.params);
    //   this.getProducts();
    // },
    // resetButton(){
    //   this.params = {
    //     categoryId: undefined,
    //     pageSize: 10,
    //     page:1,
    //     maxPrice: undefined,
    //     minPrice: undefined,
    //     name: "",
    //   }
    //   this.getProducts();
    // },
    // uppercase1(value) {
    //   return value.charAt(0).toUpperCase() + value.slice(1);
    // }
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