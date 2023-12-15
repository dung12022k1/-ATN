<template>
  <div>
    <a-card>
      <div>
        <a-form @submit="handleSearch" class="flight__search-form">

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
        <router-link to="/flights/create">
          <a-button type="primary" icon="plus">
            Add product
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
        <span slot="DepartureAt" slot-scope="text">
            {{text.split("-")[2]}}-{{text.split("-")[1]}}-{{text.split("-")[0]}}
          </span>
        <span slot="ReturnAt" slot-scope="text">
            {{text.split("-")[2]}}-{{text.split("-")[1]}}-{{text.split("-")[0]}}
          </span>
        <span slot="thumbnail" slot-scope="text">
             <img :src="text" style="width: 70%">
         </span>
        <span slot="CreatedAt" slot-scope="text">
            {{text.split("-")[2]}}-{{text.split("-")[1]}}-{{text.split("-")[0]}}
        </span>


        <div slot="action" slot-scope="text,record">
          <a class="button" @click="showDeleteConfirm(record.id)">
            <a-icon style="font-size: 25px" type="delete"/>
          </a> |
          <a class="button" :href="'/flights/edit/'+ record.id ">
            <a-icon style="font-size: 25px" type="edit"/>
          </a> |
          <a class="button" :href="'/flights/detail/'+ record.id ">
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
        flightId: undefined,
        quantity: 1
      },
      columns,
      body:{
        flightId:undefined,
        quantity: 1
      },
      totalRecords: undefined,
      totalPages:undefined,
      categories:[],
      params: {
        page: 1,
        limit: 10,
        name: "",
        minPrice: undefined,
        maxPrice: undefined,
        sortType: undefined
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
              this.totalRecords = rs.data.totalrecords;
              console.log((this.totalRecords))
              this.totalPages = rs.data.totalPages;
              console.log(this.totalPages);

              for(let i=0;i<this.data.length;i++){
                this.data[i].Thumbnail = this.data[i].Thumbnail.split(",")[0]; //FLIGHT khong can dong nay :)
                this.data[i].DepartureAt = this.data[i].DepartureAt.split("T")[0];
                this.data[i].ReturnAt = this.data[i].ReturnAt.split("T")[0];
                if(this.data[i].Status==1){
                  this.data[i].Status = "Active"
                }else {
                  this.data[i].Status = "Inactive"
                }
                if(this.data[i].IsRoundTicket ==true){
                  this.data[i].IsRoundTicket = "Yes"
                }else {
                  this.data[i].IsRoundTicket = "No"
                }

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
      this.getTours();
    },
    onChange(page, limit) {
      this.params.page = page;
      this.params.limit = limit;
      this.getTours();
    },
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