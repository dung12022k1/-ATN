<template>
  <div>
    <a-card>
      <a-table :columns="columns" :pagination="false" rowKey="id" :data-source="data">
         <span slot="Username" slot-scope="text">
           {{ text.name }}
        </span>
        <span slot="role" slot-scope="text">
          <span v-if="text =='USER'" style="color: #0ba360">USER</span>
          <span v-if="text=='ADMIN'" style="color: #a71d2a">ADMIN</span>
        </span>
        <span slot="status" slot-scope="text">
          <span v-if="text =='Active'" style="color: #0ba360">Active</span>
          <span v-if="text=='Inactive'" style="color: #a71d2a">Inactive</span>
        </span>
        <span slot="thumbnail" slot-scope="text">
             <img :src="text" style="width: 50%">
         </span>
        <!--        <span slot="detail" slot-scope="text" v-html="text">-->
        <!--        </span>-->
<!--        <div slot="action" slot-scope="text,record">-->
<!--          <a class="button" @click="showDeleteConfirm(record.id)">-->
<!--            <a-icon style="font-size: 25px" type="delete"/>-->
<!--          </a> |-->
<!--          <a class="button" :href="'/products/edit/'+ record.id ">-->
<!--            <a-icon style="font-size: 25px" type="edit"/>-->
<!--          </a> |-->
<!--          <a class="button" :href="'/products/detail/'+ record.id ">-->
<!--            <a-icon style="font-size: 25px" type="info-circle"/>-->
<!--          </a>-->
<!--        </div>-->
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
import AccountService from "@/service/AccountService";
import LocationService from "@/service/LocationService";
const columns = [

  {
    title: 'User name',
    dataIndex: 'Username',
    key: 'Username',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    ellipsis: true,
    scopedSlots: {customRender: 'role'}
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
  {
    title: 'Phone',
    dataIndex: 'PhoneNumber',
    key: 'PhoneNumber',
    ellipsis: true,
    scopedSlots: {customRender: 'PhoneNumber'},
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address',
    ellipsis: true,
    scopedSlots: {customRender: 'Address'},
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    ellipsis: true,
    scopedSlots: {customRender: 'status'},
  },
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



  // {
  //   title: 'Price',
  //   dataIndex: 'Price',
  //   key: 'Price',
  //   ellipsis: true,
  //   scopedSlots: {customRender: 'Price'},
  // },
  // {
  //   title: 'Rating',
  //   dataIndex: 'Rating',
  //   key: 'Rating',
  //   ellipsis: true,
  //   scopedSlots: {customRender: 'Rating'},
  // },
  //
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
        limit: 10
      }
    };
  },
  created() {
    this.getAccount()
    this.getLocations()
  },
  methods: {
    async   getAccount() {
      await AccountService.getAll(this.params).then(
          rs => {
            try {
              this.data = rs.data.records;
              this.totalRecords = rs.data.totalrecords;
              console.log(rs.data)
              console.log((this.totalRecords))
              this.totalPages = rs.data.totalPages;

              for(let i=0;i<this.data.length;i++){
                this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0];
                if(this.data[i].Status==1){
                  this.data[i].Status = "Active"
                }else {
                  this.data[i].Status = "Inactive"
                }
                console.log(this.data[i].Thumbnail);
              }

              for(let i=0;i<this.data.length;i++){
                this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0];
                console.log(this.data[i].Thumbnail);
              }
            }catch (e){
              console.log(e);
              console.log("có lỗi");
            }
          }
      )
    },
    getLocations(){
      LocationService.getAll().then(
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
      this.getAccount();
    },
    onChange(page, limit) {
      this.params.page = page;
      this.params.limit = limit;
      this.getAccount();
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