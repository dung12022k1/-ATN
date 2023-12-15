<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<template>
  <div>
    <div style="font-size: 30px;font-style: italic">Flight Detail</div>

    <a-card>
      <div style="font-size: 20px;font-weight: bold;color: #1c294e;margin-left: 10px">General Information</div>
      <section class="product" style="display: grid">
        <table >

          <tr style="margin-bottom: 50px" >
            <td style="width: 200px">Id: </td>
            <td>{{ currentData.Id}}</td>
          </tr>
          <tr>
            <td>Thumbnail: </td>
            <td style="text-align: left">
              <img class="photo-main" :src="currentData.Thumbnail.split(',')[0]" >
              <img class="photo-main" :src="currentData.Thumbnail.split(',')[1]" >
              <img class="photo-main" :src="currentData.Thumbnail.split(',')[2]" >
              <img class="photo-main" :src="currentData.Thumbnail.split(',')[3]" >
            </td>
          </tr>
          <tr>
            <td  >Departure Location: </td>
            <td>{{ currentData.DepartureId}}</td>
          </tr>
          <tr>
            <td  >Destination Location: </td>
            <td>{{ currentData.DestinationId}}</td>
          </tr>
          <tr>
            <td  >Desciption: </td>
            <td v-html=" currentData.Description"></td>
          </tr>
          <tr>
            <td  >Detail: </td>
            <td v-html=" currentData.Detail"></td>
          </tr>
          <tr>
            <td  >Duration: </td>
            <td v-if="currentData.Duration<=1">{{ currentData.Duration}} Day</td>
            <td v-else>{{ currentData.Duration}} Days</td>
          </tr>
          <tr>
            <td  >Price: </td>
            <td>{{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(currentData.Price)}}</td>
          </tr>
          <tr>
            <td  >IsRoundTicket: </td>
            <td v-if="currentData.IsRoundTicket==1">Yes</td>
            <td v-else>No</td>
          </tr>
          <tr>
            <td  >Status: </td>
            <td v-if="currentData.Status==1">Active</td>
            <td v-else>Disable</td>
          </tr>
          <tr>
            <td  >Departure At: </td>
            <td>{{currentData.DepartureAt.split("-")[2].split('T')[0]}}-{{currentData.DepartureAt.split("-")[1]}}-{{currentData.DepartureAt.split("-")[0]}}</td>
          </tr>
          <tr>
            <td  >Return At: </td>
            <td>{{currentData.ReturnAt.split("-")[2].split('T')[0]}}-{{currentData.ReturnAt.split("-")[1]}}-{{currentData.ReturnAt.split("-")[0]}}</td>
          </tr>
          <tr>
            <td  >Created At: </td>
            <td>{{currentData.CreatedAt.split("-")[2].split('T')[0]}}-{{currentData.CreatedAt.split("-")[1]}}-{{currentData.CreatedAt.split("-")[0]}}</td>
          </tr>

        </table>
      </section>
      <div>
        <a  class="button" href="/flights/list" style="border-radius: 5px; float: right;margin-right: 10px" type="button"><a-icon style="font-size: 25px" type="rollback"/></a>
      </div>
    </a-card>
  </div>
</template>
<script>
import LocationService from "@/service/LocationService";
import FlightService from "@/service/FlightService";
export default {
  data(){
    return{
      location:[],
      currentData:{
        Id:undefined,
        DepartureId:undefined,
        DestinationId:undefined,
        Description: undefined,
        Detail:undefined,
        Price: undefined,
        Thumbnail: undefined,
        Duration: undefined,
        IsRoundTicket: undefined,
        Status:undefined,
        DepartureAt: undefined,
        ReturnAt: undefined,
        CreatedAt:undefined,
        UpdatedAt:undefined,
        DeletedAt:undefined
      },
    };
  },
  created() {
    this.getFlight(this.$route.params.id)
    this.getLocations()
  },
  methods: {
    getFlight(id){
      FlightService.detail(id).then(
          res=>{
            this.currentData = res.data.result.recordset[0];
            console.log(res.data.result.recordset[0]);
          }
      )

    }, getLocations(){
      LocationService.getAll().then(
          res => {
            this.location = res.data.records;
            for(let j=0;j<this.location.length;j++){
              if(this.location[j].Id == this.currentData.DepartureId){
                this.currentData.DepartureId = this.location[j].Name;
              }
            }
            for(let j=0;j<this.location.length;j++){
              if(this.location[j].Id == this.currentData.DestinationId){
                this.currentData.DestinationId = this.location[j].Name;
              }
            }
          }

      )
    },
  }
};
</script>
<style lang="scss" scoped>

$color-primary: #4c4c4c;
$color-secondary: #a6a6a6;
$color-highlight: #ff3f40;

/* ----- Global ----- */
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  display: grid;
  grid-template-rows: 1fr;
  font-family: "Raleway", sans-serif;
  background-color: #01e37f;
}
table {
  border-collapse:separate;
  border-spacing: 0 1em;
}
h3 {
  font-size: 1.7em;
  letter-spacing: 1.2px;
  color: $color-secondary;
}
h4{
  font-size: 1.7em;
  letter-spacing: 1.2px;
  color: $color-secondary;
}

img {
  max-width: 100%;
  filter: drop-shadow(1px 1px 3px $color-secondary);
}

/* ----- Product Section ----- */
.product {
  display: grid;
  font-weight: normal;
  font-style: normal;
  grid-template-columns: 0.9fr 1fr;
  margin: auto;
  margin-left: 15%;
  padding: 2.5em 0;
  min-width: 600px;
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
}
.product_1 {
  display: grid;
  font-weight: normal;
  font-style: normal;
  min-width: 600px;
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
}

/* ----- Photo Section ----- */
.product__photo {

  position: relative;
}

.photo-container {
  left: 2.5em;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
#main_product{

  /* grid-template-columns: repeat(auto-fit,minmax(200px,1fr));*/
}
.photo-main {

  border-radius: 6px 6px 0 0;
  max-width: 220px;
  max-height: 200px;
  filter: saturate(100%) contrast(100%) hue-rotate(10deg)
  drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));

  .controls {
    display: flex;
    justify-content: space-between;
    padding: 0.8em;
    color: #fff;

    i {
      cursor: pointer;
    }
  }

  img {

  }
}

.photo-album {
  padding: 0.7em 1em;
  border-radius: 0 0 6px 6px;
  background-color: #fff;

  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    float: left;
    width: 55px;
    height: 55px;
    padding: 7px;
    border: 1px solid $color-secondary;
    border-radius: 3px;
  }
}

/* ----- Informations Section ----- */
.product__info {
  margin-left: 10%;
  padding: 2.8em 0;
}
.title {
  h1 {
    margin-bottom: 0.1em;
    color: $color-primary;
    font-size: 1.5em;
    font-weight: 900;
  }

  span {
    font-size: 0.7em;
    color: $color-secondary;
  }
}

.price {
  margin: 1.5em 0;
  color: $color-highlight;
  font-size: 1.2em;

  span {
    padding-left: 0.15em;
    font-size: 2.9em;
  }
}

.variant {
  overflow: auto;

  h3 {
    margin-bottom: 1.1em;
  }

  li {
    float: left;
    width: 35px;
    height: 35px;
    padding: 3px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;

    &:first-child,
    &:hover {
      border: 1px solid $color-secondary;
    }
  }

  li:not(:first-child) {
    margin-left: 0.1em;
  }
}

.description {
  clear: left;
  margin: 2em 0;

  h3 {
    margin-bottom: 1em;
  }

  ul {
    font-size: 0.8em;
    list-style: disc;
    margin-left: 1em;
  }

  li {
    text-indent: -0.6em;
    margin-bottom: 0.5em;
  }
}

.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: $color-highlight;
  box-shadow: 2px 2px 25px -7px $color-primary;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }
}

/* ----- Footer Section ----- */
footer {
  padding: 1em;
  text-align: center;
  color: #fff;

  a {
    color: $color-primary;

    &:hover {
      color: $color-highlight;
    }
  }
}

</style>