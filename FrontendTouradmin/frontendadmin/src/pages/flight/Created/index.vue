
<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
    <div style="font-size: 30px;font-style: italic">Flight Create</div>
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
    <a-form-item label="Price" >
      <a-input v-model="form.Price" />
      <span id="error-price" style="color: red"></span>
    </a-form-item>
    <a-form-item label="Duration" >
      <a-input v-model="form.Duration"/>
      <span id="error-duration" style=" color: red"></span>
    </a-form-item>

    <a-form-item label="Thumbnail" >
      <a-input v-model="form.Thumbnail"/>
      <span id="error-thumbnail" style=" color: red"></span>
    </a-form-item>
    <a-form-item label="Departure At" >
      <a-date-picker v-model="form.DepartureAt"/>
      <span id="error-departureday" style=" color: red"></span>
    </a-form-item>
    <a-form-item label="Return At" >
      <a-date-picker v-model="form.ReturnAt"/>
      <span id="error-returnday" style=" color: red"></span>
    </a-form-item>
    <a-form-item id="app" style="height: auto" label="Detail">
      <ckeditor v-model="form.Detail" :config="editorConfig"
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

import LocationService from "@/service/LocationService";
import FlightService from "@/service/FlightService";
export default {
  data() {
    return {
      editorData: '',
      editorConfig: {
        language: 'vi',
        defaultLanguage: 'vi'
      },
      data:[],
      form:{
        DepartureId: undefined,
        DestinationId: undefined,
        Description: undefined,
        Price: undefined,
        Detail: undefined,
        Thumbnail: undefined,
        Duration: undefined,
        IsRoundTicket:1,
        Status:1,
        DepartureAt:undefined,
        ReturnAt:undefined,
        CreatedAt:undefined,
      },

    };
  },
  created() {
    this.getlocation()

  },
  methods: {
    getlocation(){
      LocationService.getAll().then(
          res => {
            this.data = res.data.records;
            console.log(this.data)
            const current = new Date();
            const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
            this.form.CreatedAt = date+"T00:00:00.000";
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
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    },

    validate(){

      var errorPrice = document.getElementById('error-price')
      var errordescription = document.getElementById('error-description')
      var errorthumbnail = document.getElementById('error-thumbnail')
      var errordetail = document.getElementById('error-detail')
      var errordeparture = document.getElementById('error-departure')
      var errordestination = document.getElementById('error-destination')
      var errorduration = document.getElementById('error-duration')
      var errordepartureat = document.getElementById('error-departureday')
      var errorreturnat = document.getElementById('error-returnday')
      // eslint-disable-next-line no-unused-vars
      let checkNumber =0;

      if (this.form.Price === undefined || this.form.Price === "" ) {
        errorPrice.innerText = 'Price must greater than 0'
        checkNumber++;
      } else if (this.form.Price <= 0) {
        errorPrice.innerText = 'Price must greater than 0'
        checkNumber++;
      } else if (isNaN(this.form.Price)) {
        errorPrice.innerText = 'Price is not character'
        checkNumber++;
      } else {
        errorPrice.innerText = ''
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

      if (this.form.DepartureAt === undefined ||this.form.DepartureAt === "") {
        errordepartureat.innerText = 'Please choose tour Departure At'
        checkNumber++;
      } else {
        errordepartureat.innerText = ''
      }

      if (this.form.ReturnAt === undefined ||this.form.ReturnAt === "") {
        errorreturnat.innerText = 'Please choose tour Return At'
        checkNumber++;
      } else {
        errorreturnat.innerText = ''
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

      if (checkNumber == 0) {
        return true;
      } else {
        return false;
      }
    },
    async handleSubmit(e){
      e.preventDefault()
      if(!this.validate()){
        console.log("lỗi ở đây")
        return
      }
      await FlightService.save(this.form).then(
          this.$router.push("/flights/list"),
          alert("Create succesful")
      ).catch(error => {
        console.log(error)
      })
    }
  },
};

</script>

<style scoped>

</style>