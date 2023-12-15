<template>
  <div>
    <div class="parallax-window" data-parallax="scroll"
         v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/slides/slide_home_3.jpg') + ')' }"
         data-natural-width="1400" data-natural-height="760">
      <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
        <div class="container">
          <div class="row justify-content-center justify-content-md-start">
            <div class="col-lg-12 static">
              <div class="slide-text text-center white">
                <h2 class="owl-slide-animated owl-slide-title">Have a great day! </h2>
                <p class="owl-slide-animated owl-slide-subtitle">
                  Thank you for visiting us and making your first purchase!
                </p>
                <div class="owl-slide-animated owl-slide-cta"><a class="btn_1" :href="'tours'" role="button">Read
                  more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="invoice-title">
            <h2>Invoice</h2>
            <h3 class="float-end">{{ this.currentData.orderId }}</h3>
          </div>
          <hr>
          <div class="row">
            <div class="col-6">
              <address>
                <strong>Billed From:</strong><br>
                City Tour<br>
                Floor. 9<br>
                434 Tran Khat Chan<br>
                Hai Ba Trung, Ha Noi
              </address>
            </div>
            <div class="col-6 text-end">
              <address>
                <strong>Billed To:</strong><br>
                {{ this.currentData.fname }} {{ this.currentData.lnam }} <br>
                {{ this.currentData.email }}<br>
                {{ this.currentData.address }}
              </address>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <address>
                <strong>Payment Method:</strong><br>
                Tpbank 79179815608<br>
                dung@36064.huce.edu.vn
              </address>
            </div>
            <div class="col-6 text-end">
              <address>
                <strong>Departure Day:</strong><br>
                {{ this.currentData.departureat.split("T")[0].split("-")[2] }}-{{
                  this.currentData.departureat.split("-")[1]
                }}-{{ this.currentData.departureat.split("-")[0] }}<br><br>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"><strong>Order summary</strong></h3>
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-condensed">
                  <thead>
                  <tr>
                    <td><strong>Tour Name</strong></td>
                    <td class="text-center"><strong>Unit Price</strong></td>
                    <td class="text-center"><strong>Quantity</strong></td>
                    <td class="text-end"><strong>Totals</strong></td>
                  </tr>
                  </thead>
                  <tbody>
                  <!-- foreach ($order->lineItems as $line) or some such thing here -->
                  <tr>
                    <td>{{ this.currentData.nametour }}</td>
                    <td class="text-center">{{
                        new Intl.NumberFormat('en-EN', {
                          style: 'currency', currency: 'USD'
                        }).format(this.currentData.unitprice)
                      }}
                    </td>
                    <td class="text-center">{{ this.currentData.quantity }} people</td>
                    <td class="text-end">{{
                        new Intl.NumberFormat('en-EN', {
                          style: 'currency', currency: 'USD'
                        }).format(this.currentData.totalprice)
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="thick-line"></td>
                    <td class="thick-line"></td>
                    <td class="thick-line text-center"><strong>Subtotal</strong></td>
                    <td class="thick-line text-end">{{
                        new Intl.NumberFormat('en-EN', {
                          style: 'currency', currency:
                              'USD'
                        }).format(this.currentData.totalprice)
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="no-line"></td>
                    <td class="no-line"></td>
                    <td class="no-line text-center"><strong>Status</strong></td>

                    <td v-if="this.currentData.status == 1" class="no-line text-end" style="color: green">Paid</td>
                    <td v-else-if="this.currentData.status == 0" class="no-line text-end" style="color: blue">Unpaid
                    </td>
                    <td v-else class="no-line text-end" style="color: red">Canceled</td>
                  </tr>
                  <tr>
                    <td class="no-line"></td>
                    <td class="no-line"></td>
                    <td class="no-line text-center"><strong>Total</strong></td>
                    <td class="no-line text-end">{{
                        new Intl.NumberFormat('en-EN', {
                          style: 'currency', currency: 'USD'
                        }).format(this.currentData.totalprice)
                      }}
                    </td>
                  </tr>
                  <div class="" style="width: 100%;">
                    <div class="booking_buttons" style="display: flex;justify-content: flex-end;">
                      <button style="border:1px solid #bbb;border-radius: 4px;" @click="paymentVNPay">Payment</button>
                    </div>
                  </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderService from "@/service/OrderService";
import moment from "moment-timezone";
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      currentData: {
        orderId: this.$route.params.id,
        nametour: undefined,
        departureat: undefined,
        fname: undefined,
        lnam: undefined,
        address: undefined,
        email: undefined,
        unitprice: undefined,
        quantity: undefined,
        totalprice: undefined,
        status: undefined
      },
      params: {
        page: 1,
        limit: 100,
        search: undefined,
        orderby: "orderId",
        orderDir: "",
        unitprice: "",
        unitprice1: "",
        totalprice: "",
        totalprice1: "",
        departureat: "",
        status: ""
      },
    }
  },
  created() {
    this.getOrder()
  },
  methods: {
    //Phương thức thanh toán vnpay
    paymentVNPay() {
      const date = new Date();
      let vnp_CreateDate = moment(date).format('YYYYMMDDHHmmss');
      const token = localStorage.getItem("access_token");
      if (this.currentData.totalprice !== null && token !== null) {
        axios.post("http://localhost:3000/api/v1/create_payment_url",
            {amount: this.currentData.totalprice, orderID: this.currentData.orderId, vnpCreateDate: vnp_CreateDate}
            , {
              headers: {
                accept: 'application/json',
                'x-access-token': token
              }
            }).then((res) => {
          if (res.status == 200) {
            window.open(res.data.result, '_blank');
          } else {
            alert("Thanh toán thất bại")
          }
        });
      }
    },
    async getOrder() {
      await OrderService.getAll(this.params).then(
          rs => {
            try {
              console.log(rs.data)
              this.data = rs.data.records;
              this.totalRecords = rs.data.totalItems;
              for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].orderid == this.currentData.orderId) {
                  localStorage.getItem('access_token')
                  this.currentData.lnam = localStorage.getItem('lname')
                  this.currentData.fname = localStorage.getItem('fname')
                  this.currentData.fname = localStorage.getItem('fname')
                  this.currentData.address = localStorage.getItem('address')
                  this.currentData.email = localStorage.getItem('usermail')
                  this.currentData.departureat = this.data[i].DepartureAt
                  this.currentData.nametour = this.data[i].nametour
                  this.currentData.quantity = this.data[i].Quantity
                  this.currentData.unitprice = this.data[i].UnitPrice
                  this.currentData.totalprice = this.data[i].TotalPrice
                  this.currentData.status = this.data[i].status
                  console.log(this.currentData)
                }
              }
            } catch (e) {
              console.log(e)
            }
          }
      )
    }
  }
}
</script>

<style scoped>
.invoice-title h2,
.invoice-title h3 {
  display: inline-block;
}

.table > tbody > tr > .no-line {
  border-top: none;
}

.table > thead > tr > .no-line {
  border-bottom: none;
}

.table > tbody > tr > .thick-line {
  border-top: 2px solid;
}
</style>