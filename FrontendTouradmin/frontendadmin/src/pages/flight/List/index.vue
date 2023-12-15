<template>
  <div>
    <a-card>
      <div>        <a-form @submit="handleSearch" class="flight__search-form">
        <a-form-item>
          <a-input-search v-model="params.search" placeholder="Name/Description/Detail">
            <a-icon type="search"/>
          </a-input-search>
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
          <a-select placeholder ="Search by departure" v-model="params.duration" >
            <a-select-option :value='""'>Search by min duration</a-select-option>
            <a-select-option v-for="item in 11" :key="item" :value="item" >
              {{item}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-select placeholder ="Search by departure" v-model="params.duration1" >
            <a-select-option :value='""'>Search by max duration</a-select-option>
            <a-select-option v-for="item in 11" :key="item" :value="item" >
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
        <router-link to="/flights/create">
          <a-button type="primary" icon="plus">
            Add Flight
          </a-button>
        </router-link>
      </div>
      <a-table :columns="columns" :pagination="false" rowKey="id" :data-source="data">

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
        <span slot="thumbnail" slot-scope="text">
             <img :src="text" style="width: 70%">
         </span>
        <span slot="DepartureAt" slot-scope="text">
            {{text.split("-")[2]}}-{{text.split("-")[1]}}-{{text.split("-")[0]}}
          </span>
        <span slot="ReturnAt" slot-scope="text">
            {{text.split("-")[2]}}-{{text.split("-")[1]}}-{{text.split("-")[0]}}
          </span>

        <span slot="CreatedAt" slot-scope="text">
            {{text.split("-")[2]}}-{{text.split("-")[1]}}-{{text.split("-")[0]}}
        </span>

        <span slot="Status" slot-scope="text">
          <span v-if="text==1">
            Active
          </span>
          <span v-else>Disable</span>
          </span>
        <div slot="action" slot-scope="text,record">
          <a class="button" v-if="record.Status==1" @click="showDeleteConfirm(record.Id,0)">
            <a-icon style="font-size: 25px" type="delete"/>
          </a>
          <a class="button" v-else @click="showDeleteConfirm(record.Id,1)">
            <a-icon style="font-size: 25px" type="plus"/>
          </a>|
          <a class="button" :href="'/flights/editflight/'+ record.Id ">
            <a-icon style="font-size: 25px" type="edit"/>
          </a> |
          <a class="button" :href="'/flights/detailflight/'+ record.Id ">
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
import FlightService from "@/service/FlightService";
import LocationService from "@/service/LocationService";

const columns = [
  {
    title: 'ID',
    dataIndex: 'Id',
    key: 'Id',
  },
  {
    title: 'Is Round Ticket',
    dataIndex: 'IsRoundTicket',
    key: 'IsRoundTicket',
  },
  {
    title: 'Thumbnail',
    dataIndex: 'Thumbnail',
    key: 'Thumbnail',
    ellipsis: true,
    scopedSlots: {customRender: 'thumbnail'}
  },
  {
    title: 'DepartureId',
    dataIndex: 'DepartureId',
    key: 'DepartureId',
    ellipsis: true,
    scopedSlots: {customRender: 'DepartureId'}
  },
  {
    title: 'DestinationId',
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
  }
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
        await LocationService.getAll().then(
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
      showDeleteConfirm(fId,value) {
        if(value ==1) {
          this.$confirm({
            title: 'Do you want enable this flight?',
            onOk: () => {
              this.deleteFlights(fId, value)
              this.onShowSizeChange()
              this.getFlights()
            },
            onCancel() {
              console.log("Cancel")
            }
          })
        }else {
          this.$confirm({
            title: 'Do you want disable this flight?',
            onOk: () => {
              this.deleteFlights(fId, value)
              this.onShowSizeChange()
              this.getFlights()
            },
            onCancel() {
              console.log("Cancel")
            }
          })
        }
      },
      deleteFlights(fId,value) {
        FlightService.delete(fId,value).then(
            response=>{
              console.log(response.data)
            }
        )
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
  .flight__search-form{
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  }
  </style>