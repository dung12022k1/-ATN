<template>
  <div>
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div>
            <a-form @submit="handleSearch" class="product__search-form">
              <a-form-item>
                <a-input-search v-model="params.search" placeholder="Tour/username/Firstname/Lastname/phonenumber">
                  <a-icon type="search"/>
                </a-input-search>
              </a-form-item>
              <a-form-item>
                <a-select placeholder="Min price" v-model="params.status">
                  <a-select-option :value='""'>
                    <span>Search by status</span>
                  </a-select-option>
                  <a-select-option :value='"1"'>
                    <span style="color: green">Paid</span>
                  </a-select-option>
                  <a-select-option :value='"0"'>
                    <span style="color: blue">Unpaid</span>
                  </a-select-option>
                  <a-select-option :value='"2"'>
                    <span style="color: red">Canceled</span>
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item>
                <a-select placeholder="Min price" v-model="params.unitprice">
                  <a-select-option :value='""'>
                    Min Unit Price
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
                <a-select placeholder="Max price" v-model="params.unitprice1">
                  <a-select-option :value='""'>
                    Max Unit Price
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
              <a-form-item>
                <a-date-picker
                    @change="getDate"
                />
<!--                <input type="date" v-model="params.departureat" placeholder="Select date"/>-->
              </a-form-item>
              <a-form-item>
                <a-select placeholder="Min price" v-model="params.totalprice">
                  <a-select-option :value='""'>
                    Min Total Price
                  </a-select-option>
                  <a-select-option :value="1000">
                    1000
                  </a-select-option>
                  <a-select-option :value="5000">
                    5000
                  </a-select-option>
                  <a-select-option :value="1000">
                    10000
                  </a-select-option>
                  <a-select-option :value="2000">
                    20000
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item>
                <a-select placeholder="Max price" v-model="params.totalprice1">
                  <a-select-option :value='""'>
                    Max Total Price
                  </a-select-option>
                  <a-select-option :value="5000">
                    5000
                  </a-select-option>
                  <a-select-option :value="10000">
                    10000
                  </a-select-option>
                  <a-select-option :value="20000">
                    20000
                  </a-select-option>
                  <a-select-option :value="50000">
                    50000
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
            <!--            <a-button  type="primary" html-type="submit" @click="updateallstatus(1)" style="margin-left: 20px">
                          SelectAllStatus
                        </a-button>-->
          </div>

          <div>
            <div id="price" style="float: left" class="col-md-5">
              <span style="align-content: center">Tổng tiền Tour: {{new Intl.NumberFormat('en-EN', {style: 'currency', currency: 'USD'}).format(this.price)}}<br></span>
              <span style="align-content: center">Số tiền đã nhận: {{new Intl.NumberFormat('en-EN', {style: 'currency', currency: 'USD'}).format(this.price1)}}</span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="table-wrap">
              <table class="table table-striped">
                <thead>
                <tr style="background: red">
                  <th style="color: black">ID</th>
                  <th style="color: black">Tour</th>
                  <th style="color: black">DepartureAt</th>
                  <th style="color: black">UserName</th>
                  <th style="color: black">Phonenumber</th>
                  <th style="color: black">Unit Price</th>
                  <th style="color: black">Quantity</th>
                  <th style="color: black">Total Price</th>
                  <th style="color: black">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="order in data" v-bind:key="order.orderid">
                  <td scope="row"><span>{{ order.orderid }}</span></td>
                  <td><span>{{order.nametour}}</span></td>
                  <td><span>{{order.DepartureAt.split("T")[0].split("-")[2] }}-{{ order.DepartureAt.split("-")[1] }}-{{ order.DepartureAt.split("-")[0]}}</span></td>
                  <td><span>{{order.username}}</span></td>
                  <td><span>{{order.PhoneNumber}}</span></td>
                  <td><span>{{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(order.UnitPrice)}}</span></td>
                  <td><span>{{order.Quantity}} people</span></td>
                  <td><span>{{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(order.TotalPrice)}}</span></td>
                  <td><span v-if="order.status =='1'" style="color: green">
                    Paid
                    </span>
                    <span v-else-if="order.status=='0'" style="color: blue">
                    Unpaid
                    </span>
                    <span v-else style="color:red ">
                    Canceled
                    </span>
                    <span v-if="order.status =='0'">
           <input type="checkbox" v-model="order.checked" id="uncheckbox"  @change="updatestatus(order.orderid,1)"/>
           <label style="text-align: center"></label>
             </span></td>
                </tr>
                </tbody>
              </table>
              <div style="padding-top: 15px">
                <a-pagination
                    :default-current="this.params.pageSize"
                    :total="this.totalRecords"
                    show-size-changer
                    @showSizeChange="onShowSizeChange"
                    @change="onChange"
                />
              </div>
            </div>
          </div>
          <div>
            <div id="price1" class="col-md-6" style="float: right">
              <span style="align-content: center">Tổng tiền Tour trang {{ this.params.page }} : {{new Intl.NumberFormat('en-EN', {style: 'currency', currency: 'USD'}).format(this.price2)}}<br></span>
              <span style="align-content: center">Số tiền đã nhận trang {{ this.params.page }} : {{new Intl.NumberFormat('en-EN', {style: 'currency', currency: 'USD'}).format(this.price3)}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/*import moment from 'moment';*/
import OrderService from "../../../service/OrderService";
export default {
  data() {
    return {
      data: [],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      checked:false,
      datastatus:[],
      form: {
        id: undefined,
        quantity: 1
      },
      price: undefined,
      price1: undefined,
      price2: undefined,
      price3: undefined,
      body: {
        id: undefined,
        quantity: 1
      },
      totalRecords: undefined,
      params: {
          page: 1,
          limit: 10,
          search: "",
          orderby:"orderId",
          orderDir:"",
          unitprice: "",
          unitprice1: "",
          totalprice: "",
          totalprice1: "",
          departureat: "",
          status:""
      },
      order:{
        checked:false
      },
      params1: {
        page: undefined,
        limit: 1000,
        orderby:"orderId",
      },
      params2: {
        page: undefined,
        limit: 1000,
        orderby:"orderId",
      },
      params3: {
        pageSize: 10,
        page: undefined,
        name: ""
      },
    };
  },
  created() {
    this.getOrder(),
    this.caculatorTotalPrice()
    this.caculatorCheckout()
    this.updatestatus()
  },
  methods: {
    async getOrder() {
      await OrderService.getAll(this.params).then(
          rs => {
            try {
              let price2 = 0;
              let price3 = 0;
              console.log(rs.data)
              this.data = rs.data.records;
              this.totalRecords = rs.data.totalItems;
              for (let i = 0; i < this.data.length; i++) {

                  price2 = price2 + this.data[i].TotalPrice;
                  console.log(price2);
              }
              this.price2 = price2;
              for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].status == "1") {
                  price3 = price3 + this.data[i].TotalPrice;
                }
              }
              this.price3 = price3
              console.log(this.price3)
            } catch (e) {
              console.log(e)
            }
          }
      )

    },
    // async getAccount() {
    //   await OrderService.getAllAcount(this.params).then(rs => {
    //     this.data3 = rs.data.data;
    //     this.totalRecords = rs.data.pagination.totalItems;
    //   })
    // },
    async caculatorTotalPrice() {
        let price=0;
        await OrderService.getAll(this.params1).then(
            rs => {
              try {
                this.data1 = rs.data.records;
                if (this.data1.length > 0) {
                  for (let i = 0; i < this.data1.length; i++) {
                      price = price + this.data1[i].TotalPrice;
                      console.log(price)
                  }
                  this.price = price;
                }
              } catch (e) {
                console.log(e)
              }
            }
        )
    },

    async caculatorCheckout() {
      let price = 0;
      let page = 1;
      this.params2.page = page;
        await OrderService.getAll(this.params2).then(
            rs => {
              try {
                this.data2 = rs.data.records;
                if (this.data2.length > 0) {
                  for (let i = 0; i < this.data2.length; i++) {
                    if (this.data2[i].status == "1") {
                      price = price + this.data2[i].TotalPrice;
                    }
                  }
                  this.price1=price;
                }
              } catch (e) {
                console.log(e)
              }
            }
        )
    },

    getDate(date) {
      var event = new Date(date._d)
      let ndate = JSON.stringify(event)
      this.params.departureat = ndate.slice(1, 11)
      console.log(this.params.departureat);

    },

    onShowSizeChange(current, pageSize) {
      this.params.pageSize = pageSize;
      this.params.page = current;
      this.getOrder();
    },
    onChange(page, limit) {
      this.params.page = page;
      this.params.pageSize = limit;
      this.getOrder();
    },
    updatestatus(id, status) {
      if (status == 1) {
        this.$confirm({
          title: 'Xác nhận đã thanh toán cho tour này',
          onOk: () => {
            OrderService.updateStatus(id, '1').then(
                rs => {
                  console.log(rs.data)
                  this.getOrder();
                  this.caculatorTotalPrice();
                  this.caculatorCheckout();
                })
          },
          onCancel: ()=> {
            OrderService.updateStatus(id, '0').then(
                rs => {
                  console.log(rs.data)
                  this.checked=false;
                  document.getElementById("uncheckbox").checked = false;
                  this.getOrder();
                  this.caculatorTotalPrice();
                  this.caculatorCheckout();
                })
          }
        })
      }
    },
    /*async updateallstatus(status){
       let check =true;
       let page=1;
       this.params3.page = page;
       do {
       await   OrderService.getAll(this.params3).then(
             rs => {
               try {
                 this.data4 = rs.data.data;
                 if(this.data4.length>0) {
                   for (let i = 0; i < this.data4.length; i++) {
                     if(this.data4[i].status==0) {
                       this.updatestatus(this.data4[i].id, status)
                     }
                   }
                   page = this.params3.page;
                   page = page+1;
                   this.params3.page = page;
                 }else {check=false}
               } catch (e) {
                 console.log(e)
               }
             }
       )
       }while (check){
         console.log("Bye")
       }
     },*/

/*    updatecheckout(id, isCheck) {
      OrderService.updateCheckout(id, isCheck).then(
          rs => {
            this.getOrder();
            this.caculatorCheckout()
            console.log(rs)
          }
      )
    },*/
    handleSearch(e) {
      e.preventDefault();
      this.params.page = 1;
      this.getOrder()
    },
    resetButton() {
      this.params = {
        page: 1,
        limit: 10,
        search: "",
        orderby:"orderId",
        orderDir:"",
        unitprice: "",
        unitprice1: "",
        totalprice: "",
        totalprice1: "",
        departureat: "",
        status:""
      }
      this.getOrder();
    },
    checkAll(status) {
      let checkAll = document.getElementById("checkAll")
      console.log(checkAll.checked)
      let subCheckBox = document.getElementsByClassName("subCheckBox");
      for (let element of subCheckBox) {
        element.checked = checkAll.checked;
        console.log(element.value)
        console.log(status)
      }
    },
    // moment: function () {
    //   return moment();
    // },
  }
}
</script>

<style lang="scss" scoped>
$color-primary: #4c4c4c;
$color-secondary: #a6a6a6;
$color-highlight: #ff3f40;
#price {
  margin: 1.5em 0;
  color: $color-primary;
  font-size: 1.2em;

  span {
    padding-left: 0.15em;
    font-size: 1.2em;
  }
}

#price1 {
  margin: 1.5em 0;
  color: $color-highlight;
  font-size: 1.2em;

  span {
    padding-left: 0.15em;
    font-size: 1.2em;
  }
}

.product__search-form {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

</style>