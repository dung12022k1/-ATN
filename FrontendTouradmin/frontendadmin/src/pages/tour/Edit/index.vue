
<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
    <div style="font-size: 30px;font-style: italic">Tour edit</div>
    <a-form-item label="Tour Name">
      <a-input v-model="form.Name"/>
      <span id="error-name" style="color: red"></span>
    </a-form-item>
    <a-form-item label="Category">
      <a-select v-model="form.TourCategoryId">
        <a-select-option v-for="item in datacategory" :key="item.Id" :value="item.Id">
          {{item.Name}}
        </a-select-option>
      </a-select>
      <span id="error-category" style="color:red;"></span>
    </a-form-item>
    <a-form-item label="Departure">
      <a-select v-model="form.DepartureId">
        <a-select-option v-for="item in data" :key="item.Id" :value="item.Id">
          {{item.Name}}
        </a-select-option>
      </a-select>
      <span id="error-departure" style="color:red;"></span>
    </a-form-item>
    <a-form-item label="Destination">
      <a-select v-model="form.DestinationId">
        <a-select-option v-for="item in data" :key="item.Id" :value="item.Id">
          {{item.Name}}
        </a-select-option>
      </a-select>
      <span id="error-destination" style="color:red;"></span>
    </a-form-item>
    <a-form-item label="Description" >
      <a-input v-model="form.Description" />
      <span id="error-description" style="color: red"></span>
    </a-form-item>
    <a-form-item label="SummarySchedule" >
      <a-input v-model="form.SummarySchedule" />
      <span id="error-summaryschedule" style="color: red"></span>
    </a-form-item>
    <a-form-item label="Thumbnail">
      <!--      <a-upload name="file" :multiple="true" v-model="form.Thumbnail" :headers="headers" @change="handleChange">-->
      <!--        <a-button>-->
      <!--          <a-icon type="upload" /> Click to Upload-->
      <!--        </a-button>-->
      <!--      </a-upload>-->
      <a-input v-model="form.Thumbnail" />
      <span id="error-thumbnail" style="color: red"></span>
    </a-form-item>
    <a-form-item label="Duration" >
      <a-input v-model="form.Duration"/>
      <span id="error-duration" style=" color: red"></span>
    </a-form-item>
    <a-form-item label="DepartureDay" >
      <a-date-picker v-model="formDetail.DepartureDay"/>
      <span id="error-departureday" style=" color: red"></span>
    </a-form-item>
    <a-form-item label="AvailableSeat" >
      <a-input v-model="formDetail.AvailableSeat"/>
      <span id="error-availableseat" style=" color: red"></span>
    </a-form-item>
    <a-form-item label="Price" >
      <a-input v-model="formDetail.Price"/>
      <span id="error-price" style=" color: red"></span>
    </a-form-item>
    <a-form-item label="Discount" >
      <a-input v-model="formDetail.Discount"/>
      <span id="error-discount" style=" color: red"></span>
    </a-form-item>


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
    <a-form-item style="height: auto" label="Policy">
      <a-textarea style="height: 200px"  v-model="form.Policy"/>
      <span id="error-policy" style="color: red"></span>
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
import TourService from "@/service/TourService";
import LocationService from "@/service/LocationService";
import TourCategoriesService from "@/service/TourCategoriesService";
import TourDetailService from "@/service/TourDetailService";
export default {
  data() {
    return {
      editorData: '',
      editorConfig: {
        language: 'vi',
        defaultLanguage: 'vi'
      },
      data:[],
      datacategory:[],
      form:{
        Id:undefined,
        Name: undefined,
        TourCategoryId:undefined,
        DepartureId: undefined,
        DestinationId: undefined,
        Description: undefined,
        Detail: undefined,
        Thumbnail: undefined,
        Duration: undefined,
        Policy:undefined,
        SummarySchedule:undefined,
        Status:1,
        Rating:undefined,
        CreatedAt:undefined
      },
      formDetail:{
        Id:undefined,
        DepartureDay:undefined,
        AvailableSeat:undefined,
        Price:undefined,
        Discount:undefined
      }

    };
  },
  created() {
    this.getlocation(),
        this.getcategories()
    this.getTours(this.$route.params.id)

  },
  methods: {
    getTours(id){
      TourService.detail(id).then(
          response=>{
            this.form = response.data.result.recordset[0];
          }
      )
      TourDetailService.detail(id).then(
          rs=>{
            this.formDetail = rs.data.result;
            console.log(this.formDetail)
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
          }
      )
    },
    getcategories(){
      TourCategoriesService.getAll().then(
          res => {
            this.datacategory = res.data.result;
            console.log(this.datacategory)
          }
      )
    },
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
      var errorCategoryId = document.getElementById('error-category')
      var errorPrice = document.getElementById('error-price')
      var errordescription = document.getElementById('error-description')
      var errorthumbnail = document.getElementById('error-thumbnail')
      var errordetail = document.getElementById('error-detail')
      var errordeparture = document.getElementById('error-departure')
      var errordestination = document.getElementById('error-destination')
      var errorsummaryschedule = document.getElementById('error-summaryschedule')
      var errorduration = document.getElementById('error-duration')
      var errordepartureday = document.getElementById('error-departureday')
      var errorseat = document.getElementById('error-availableseat')
      var errordiscount = document.getElementById('error-discount')
      var errorpolicy = document.getElementById('error-policy')
      var errorrating = document.getElementById('error-rating')
      // eslint-disable-next-line no-unused-vars
      let checkNumber =0;
      if(this.form.Name === undefined ||this.form.Name === ""){
        errorName.innerText = 'Please enter the name of tour'
        checkNumber++;
      }else if(this.form.Name.length<7 ||this.form.Name.length >50){
        errorName.innerText = 'The name of tour must between 7 and 50 characters'
        checkNumber++;
      }
      else {
        errorName.innerText = ''
      }
      if (this.formDetail.Price === undefined || this.formDetail.Price === "" ) {
        errorPrice.innerText = 'Price must greater than 0'
        checkNumber++;
      } else if (this.formDetail.Price <= 0) {
        errorPrice.innerText = 'Price must greater than 0'
        checkNumber++;
      } else if (isNaN(this.formDetail.Price)) {
        errorPrice.innerText = 'Price is not character'
        checkNumber++;
        // } else if (!this.checkrealnumber(this.form.price)) {
        //   errorPrice.innerText = 'Giá tiền phải là số nguyên'
        //   checkNumber++;
      } else {
        errorPrice.innerText = ''
      }
      if (this.formDetail.AvailableSeat === undefined || this.formDetail.AvailableSeat === "") {
        errorseat.innerText = 'AvailableSeat must greater than 0'
        checkNumber++;
      } else if (this.formDetail.AvailableSeat <= 0) {
        errorseat.innerText = 'AvailableSeat must greater than 0'
        checkNumber++;
      } else if (isNaN(this.formDetail.AvailableSeat)) {
        errorseat.innerText = 'AvailableSeat is not character'
        checkNumber++;
      } else if (!this.checkrealnumber(this.formDetail.AvailableSeat)) {
        errorseat.innerText = 'AvailableSeat must is integer'
        checkNumber++;
      } else {
        errorseat.innerText = ''
      }
      if (this.formDetail.Discount === undefined || this.formDetail.Discount === "") {
        errordiscount.innerText = 'Discount must greater than 0'
        checkNumber++;
      } else if (this.formDetail.Discount <= 0) {
        errordiscount.innerText = 'Discount must greater than 0'
        checkNumber++;
      } else if (isNaN(this.formDetail.Discount)) {
        errordiscount.innerText = 'Discount is not character'
        checkNumber++;
      } else if (!this.checkrealnumber(this.formDetail.Discount)) {
        errordiscount.innerText = 'Discount must is integer'
        checkNumber++;
      } else {
        errordiscount.innerText = ''
      }
      if (this.form.Duration === undefined ||this.form.Duration === "") {
        errorduration.innerText = 'Duration must greater than 0'
        checkNumber++;
      } else if (this.form.Duration <= 0) {
        errorduration.innerText = 'Duration must greater than 0'
        checkNumber++;
      } else if (isNaN(this.form.Duration)) {
        errorduration.innerText = 'Duration is not character'
        checkNumber++;
      } else if (!this.checkrealnumber(this.form.Duration)) {
        errorduration.innerText = 'Duration must is integer'
        checkNumber++;
      } else {
        errorduration.innerText = ''
      }
      if (this.form.TourCategoryId === undefined ||this.form.TourCategoryId === "") {
        errorCategoryId.innerText = 'Please choose tour category'
        checkNumber++;
      } else {
        errorCategoryId.innerText = ''
      }
      if (this.form.Rating === undefined ||this.form.Rating === "") {
        errorrating.innerText = 'Please choose tour rating'
        checkNumber++;
      } else {
        errorrating.innerText = ''
      }
      if (this.formDetail.DepartureDay === undefined ||this.formDetail.DepartureDay === "") {
        errordepartureday.innerText = 'Please choose tour departureday'
        checkNumber++;
      } else {
        errordepartureday.innerText = ''
      }
      if (this.form.DepartureId === undefined ||this.form.DepartureId === "") {
        errordeparture.innerText = 'Please choose tour departure'
        checkNumber++;
      } else {
        errordeparture.innerText = ''
      }
      if (this.form.DestinationId === undefined ||this.form.DestinationId === "") {
        errordestination.innerText = 'Please choose tour destination'
        checkNumber++;
      } else {
        errordestination.innerText = ''
      }
      if (this.form.Description == undefined ||this.form.Description == "") {
        errordescription.innerText = 'Please enter description'
        checkNumber++;
      } else {
        errordescription.innerText = ''
      }
      if (this.form.SummarySchedule == undefined ||this.form.SummarySchedule == "") {
        errorsummaryschedule.innerText = 'Please enter SummarySchedule'
        checkNumber++;
      } else {
        errorsummaryschedule.innerText = ''
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
      if (this.form.Detail == undefined ||this.form.Detail == "") {
        errordetail.innerText = 'Please enter detail'
        checkNumber++;
      }else {
        errordetail.innerText=''
      }
      if (this.form.Policy == undefined ||this.form.Policy == "") {
        errorpolicy.innerText = 'Please enter policy'
        checkNumber++;
      }else {
        errorpolicy.innerText=''
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
      await TourService.edit(this.form.Id,this.form).then(

      ).catch(error => {
        console.log(error)
      })
      await   TourDetailService.edit(this.formDetail.Id,this.formDetail).then(
          console.log(this.formDetail),
          this.$router.push("/tours/editschedule/"+this.$route.params.id)
      ).catch(error=>{
        console.log(error)
      })
    }
  },
};

</script>

<style scoped>

</style>