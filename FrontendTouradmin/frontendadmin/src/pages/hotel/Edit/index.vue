
<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
    <div style="font-size: 30px;font-style: italic">Hotel edit</div>
    <a-form-item label="Hotel Name">
      <a-input v-model="form.Name"/>
      <span id="error-name" style="color: red"></span>
    </a-form-item>
    <a-form-item label="Location">
      <a-select v-model="form.LocationId">
        <a-select-option v-for="item in data" :key="item.Id" :value="item.Id">
          {{item.Name}}
        </a-select-option>
      </a-select>
      <span id="error-location" style="color:red;"></span>
    </a-form-item>
    <!--    <a-form-item label="Destination">-->
    <!--      <a-select v-model="form.DestinationId">-->
    <!--        <a-select-option v-for="item in data" :key="item.Id" :value="item.Id">-->
    <!--          {{item.Name}}-->
    <!--        </a-select-option>-->
    <!--      </a-select>-->
    <!--      <span id="error-destination" style="color:red;"></span>-->
    <!--    </a-form-item>-->
    <a-form-item label="Description" >
      <a-input v-model="form.Description" />
      <span id="error-description" style="color: red"></span>
    </a-form-item>
    <!--    <a-form-item label="SummarySchedule" >-->
    <!--      <a-input v-model="form.SummarySchedule" />-->
    <!--      <span id="error-summaryschedule" style="color: red"></span>-->
    <!--    </a-form-item>-->
    <a-form-item label="Thumbnail">
      <!--      <a-upload name="file" :multiple="true" v-model="form.Thumbnail" :headers="headers" @change="handleChange">-->
      <!--        <a-button>-->
      <!--          <a-icon type="upload" /> Click to Upload-->
      <!--        </a-button>-->
      <!--      </a-upload>-->
      <a-input v-model="form.Thumbnail" />
      <span id="error-thumbnail" style="color: red"></span>
    </a-form-item>
    <!--    <a-form-item label="Duration" >-->
    <!--      <a-input v-model="form.Duration"/>-->
    <!--      <span id="error-duration" style=" color: red"></span>-->
    <!--    </a-form-item>-->
    <!--    <a-form-item label="DepartureDay" >-->
    <!--      <a-date-picker v-model="form.DepartureDay"/>-->
    <!--      <span id="error-departureday" style=" color: red"></span>-->
    <!--    </a-form-item>-->
    <a-form-item label="Price" >
      <a-input v-model="form.Price"/>
      <span id="error-price" style=" color: red"></span>
    </a-form-item>
    <!--    <a-form-item label="Discount" >-->
    <!--      <a-input v-model="formDetail.Discount"/>-->
    <!--      <span id="error-discount" style=" color: red"></span>-->
    <!--    </a-form-item>-->


    <a-form-item id="app" style="height: auto" label="Detail">
      <ckeditor  v-model="form.Detail" :config="editorConfig"
                 tag-name="textarea"
                 :disabled="editorDisabled"
                 @ready="onEditorReady"
                 @focus="onEditorFocus"
                 @blur="onEditorBlur"
                 @input="onEditorInput"
                 @destroy="onEditorDestroy" ></ckeditor>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail" style="color: red"></span>
    </a-form-item>
    <a-form-item style="height: auto" label="Address">
      <a-textarea style="height: 200px"  v-model="form.Address"/>
      <span id="error-Address" style="color: red"></span>
    </a-form-item>
    <a-form-item label="Rating">
      <a-select v-model="form.Rating">
        <a-select-option :value="1">1</a-select-option>
        <a-select-option :value="2">2</a-select-option>
        <a-select-option :value="3">3</a-select-option>
        <a-select-option :value="4">4</a-select-option>
        <a-select-option :value="5">5</a-select-option>
      </a-select>
      <span id="error-rating" style="color:red;"></span>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" @click.stop.prevent="handleSubmit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>

</template>
<script src="../node_modules/ckeditor4/ckeditor.js"></script>
<script src="../node_modules/ckeditor4-vue/dist/ckeditor.js"></script>
<script>
import HotelService from "@/service/HotelService";
import LocationService from "@/service/LocationService";

export default {
  data() {
    return {
      editorData: '',
      editorConfig: {
        language: 'vi',
        defaultLanguage: 'vi'
      },
      data:[],
      // datacategory:[],
      form:{
        Id:undefined,
        Name: undefined,
        LocationId:undefined,
        Description: undefined,
        Detail: undefined,
        Thumbnail: undefined,
        Price:undefined,
        Address:undefined,
        Status:1,
        Rating:undefined,
        CreatedAt:undefined
      },
      // formDetail:{
      //   Id:undefined,
      //   DepartureDay:undefined,
      //   AvailableSeat:undefined,
      //   Price:undefined,
      //   Discount:undefined
      // }

    };
  },
  created() {
    this.getlocation(),
        this.getcategories()
    this.getHotel(this.$route.params.id)

  },
  methods: {
    getHotel(id){
      HotelService.detail(id).then(
          response=>{
            this.form = response.data.result.recordset[0];
          }
      )
      HotelService.detail(id).then(
          rs=>{
            this.form = rs.data.result;
            console.log(this.form)
          }
      )
    },
    getlocation(){
      LocationService.getAll().then(
          res => {
            this.data = res.data.records;
            console.log(this.data)
            // const current = new Date();
            // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            // this.form.CreatedAt = date+"23:49:58.000";
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
    // getcategories(){
    //   TourCategoriesService.getAll().then(
    //       res => {
    //         this.datacategory = res.data.result;
    //         console.log(this.datacategory)
    //       }
    //   )
    // },
    checkrealnumber(n){
      let flag = true;
      if(Math.ceil(n) != Math.floor(n)){
        flag =false;
      }
      return flag;
    },
    validURL(str) {
      var check= true;
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      for(let i=0;i<str.split(',').length;i++){
        if(!pattern.test(str.split(',')[i])){
          check= false;
          return check;
        }
      }
      return check;
    },

    validate(){
      var errorName = document.getElementById('error-name')
      var errorLocationId = document.getElementById('error-location')
      var errorPrice = document.getElementById('error-price')
      var errordescription = document.getElementById('error-description')
      var errorthumbnail = document.getElementById('error-thumbnail')
      var errordetail = document.getElementById('error-detail')
      var errorAddress = document.getElementById('error-Address')
      var errorrating = document.getElementById('error-rating')
      // eslint-disable-next-line no-unused-vars
      let checkNumber =0;
      if(this.form.Name === undefined ||this.form.Name === ""){
        errorName.innerText = 'Please enter the name of hotel'
        checkNumber++;
      }else if(this.form.Name.length<7 ||this.form.Name.length >50){
        errorName.innerText = 'The name of hotel must between 7 and 50 characters'
        checkNumber++;
      }
      else {
        errorName.innerText = ''
      }
      if (this.form.Price === undefined || this.form.Price === "" ) {
        errorPrice.innerText = 'Price must greater than 0'
        checkNumber++;
      } else if (this.form.Price <= 0) {
        errorPrice.innerText = 'Price must greater than 0'
        checkNumber++;
      } else if (isNaN(this.form.Price)) {
        errorPrice.innerText = 'Price is not character'
        checkNumber++;
        // } else if (!this.checkrealnumber(this.form.price)) {
        //   errorPrice.innerText = 'Giá tiền phải là số nguyên'
        //   checkNumber++;
      } else {
        errorPrice.innerText = ''
      }

      if (this.form.LocationId === undefined ||this.form.LocationId === "") {
        errorLocationId.innerText = 'Please choose hotel category'
        checkNumber++;
      } else {
        errorLocationId.innerText = ''
      }
      if (this.form.Rating === undefined ||this.form.Rating === "") {
        errorrating.innerText = 'Please choose hotel rating'
        checkNumber++;
      } else {
        errorrating.innerText = ''
      }

      if (this.form.Description == undefined ||this.form.Description == "") {
        errordescription.innerText = 'Please enter description'
        checkNumber++;
      } else {
        errordescription.innerText = ''
      }
      if (this.form.Thumbnail == undefined ||this.form.Thumbnail == "") {
        errorthumbnail.innerText = 'Please enter thumbnail'
        checkNumber++;
      }else if(!this.validURL(this.form.Thumbnail)){
        errorthumbnail.innerText = 'The thumbnail must is link'
        checkNumber++;
      }else {
        errorthumbnail.innerText=''
      }
      if (this.form == undefined ||this.form == "") {
        errordetail.innerText = 'Please enter detail'
        checkNumber++;
      }else {
        errordetail.innerText=''
      }
      if (this.form.Address == undefined ||this.form.Address == "") {
        errorAddress.innerText = 'Please enter Address'
        checkNumber++;
      }else {
        errorAddress.innerText=''
      }

      if (checkNumber == 0) {
        return true;
      } else {
        return false;
      }
    },
    async  handleSubmit(e){
      e.preventDefault()
      if(!this.validate()){
        console.log("lỗi ở đây")
        return
      }
      await HotelService.edit(this.form.Id,this.form).then(

      ).catch(error => {
        console.log(error)
      })
      await   HotelService.edit(this.formDetail.Id,this.formDetail).then(
          console.log(this.formDetail),
          this.$router.push("/hotels/List/"+this.$route.params.id)
      ).catch(error=>{
        console.log(error)
      })
    }
  },
};

</script>

<style scoped>

</style>