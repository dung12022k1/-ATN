
<template>
<!--  <div class="col-md-2" v-for="i in countcheck" :key="i">-->
  <a-form  :form="formdetail"  :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
    <div style="font-size: 30px;font-style: italic">TourSchedule create</div>
    <a-form-item id="app1"  style="height: auto" v-if="currentData.Duration >=1" label="Detail day 1" >
      <a-textarea style="height: 200px"  v-model="formdetail[0].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail1" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app2"  style="height: auto" v-if="currentData.Duration >=2" label="Detail day 2" >
      <a-textarea style="height: 200px"  v-model="formdetail[1].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail2" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app3"  style="height: auto" v-if="currentData.Duration >=3" label="Detail day 3" >
      <a-textarea style="height: 200px"  v-model="formdetail[2].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail3" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app3"  style="height: auto" v-if="currentData.Duration >=4" label="Detail day 4" >
      <a-textarea style="height: 200px"  v-model="formdetail[3].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail4" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app4"  style="height: auto" v-if="currentData.Duration >=5" label="Detail day 5" >
      <a-textarea style="height: 200px"  v-model="formdetail[4].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail5" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app5"  style="height: auto" v-if="currentData.Duration >=6" label="Detail day 6" >
      <a-textarea style="height: 200px"  v-model="formdetail[5].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail6" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app"  style="height: auto" v-if="currentData.Duration >=7" label="Detail day 7" >
      <a-textarea style="height: 200px"  v-model="formdetail[6].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail7" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app"  style="height: auto" v-if="currentData.Duration >=8" label="Detail day 8" >
      <a-textarea style="height: 200px"  v-model="formdetail[7].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail8" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app"  style="height: auto" v-if="currentData.Duration >=9" label="Detail day 9" >
      <a-textarea style="height: 200px"  v-model="formdetail[8].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail9" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app"  style="height: auto" v-if="currentData.Duration >=10" label="Detail day 10" >
      <a-textarea style="height: 200px"  v-model="formdetail[9].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail10" style="color: red"></span>
    </a-form-item>
    <a-form-item id="app"  style="height: auto" v-if="currentData.Duration ==11" label="Detail day 11" >
      <a-textarea style="height: 200px"  v-model="formdetail[10].Detail"/>
      <!--      <a-input type="ckeditor" v-model="form.detail"/>-->
      <span id="error-detail11" style="color: red"></span>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" @click.stop.prevent="handleSubmit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
<!--  </div>-->
</template>
<script src="../node_modules/ckeditor4/ckeditor.js"></script>
<script src="../node_modules/ckeditor4-vue/dist/ckeditor.js"></script>
<script>
import TourService from "@/service/TourService";
import LocationService from "@/service/LocationService";
import TourCategoriesService from "@/service/TourCategoriesService";
import TourDetailService from "@/service/TourDetailService";
import TourScheduleService from "@/service/TourScheduleService";
export default {
  data() {
    return {
      editorData: '',
      editorConfig: {
        language: 'vi',
        defaultLanguage: 'vi'
      },
      data:[],
      iddata:"TOUR_",
      ducheck:[],
      formdetail:[
        {
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },{
          Detail:undefined
        },
      ],
      form:[{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },{
        TourId: undefined,
        Name:undefined,
        Detail: undefined,
        ScheduleOrder: undefined,
      },
      ],

      currentData:{
        Id:undefined,
        TourCategoryId:undefined,
        DepartureId:undefined,
        DestinationId:undefined,
        Name: undefined,
        Description: undefined,
        Detail:undefined,
        Thumbnail: undefined,
        Duration: undefined,
        Policy:undefined,
        SummarySchedule:undefined,
        Status:undefined,
        CreatedAt:undefined,
        UpdatedAt:undefined,
        DeletedAt:undefined,
        Rating: undefined

      },
    };
  },
  created() {
    this.getTours()
  },
  methods: {
    async   getTours() {
        await TourDetailService.getAll().then(
          rs => {
            try {

              this.data = rs.data.records;
              this.iddata+=(rs.data.totalItems)
              console.log(this.iddata)
              TourService.detail("TOUR_"+rs.data.totalItems).then(
                  res=>{
                    console.log(this.countcheck)
                    this.currentData = res.data.result.recordset[0];
                    console.log(res.data.result.recordset[0]);
                   this.countcheck = this.currentData.Duration;
                   console.log(this.countcheck)
                  }
              )

            }catch (e){
              console.log(e);
              console.log("có lỗi");
            }
            // for(let i=0;i<this.data.length;i++){
            //   this.iddata[i] = this.data[i].Id.split("_")[1]
            //   console.log(this.iddata[i])
            // }
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
      var errordertail1 = document.getElementById('error-detail1')
      var errordertail2 = document.getElementById('error-detail2')
      var errordertail3 = document.getElementById('error-detail3')
      var errordertail4 = document.getElementById('error-detail4')
      var errordertail5 = document.getElementById('error-detail5')
      var errordertail6 = document.getElementById('error-detail6')
      var errordertail7 = document.getElementById('error-detail7')
      var errordertail8 = document.getElementById('error-detail8')
      var errordertail9 = document.getElementById('error-detail9')
      var errordertail10 = document.getElementById('error-detail10')
      var errordertail11 = document.getElementById('error-detail11')
      // var errorCategory = document.getElementById('error-category')
      // eslint-disable-next-line no-unused-vars
      let checkNumber =0;
      if(this.currentData.Duration>=1) {
        if (this.formdetail[0].Detail == undefined || this.formdetail[0].Detail == "") {
          errordertail1.innerText = 'Please enter detail day 1'
          checkNumber++;
        } else {
          errordertail1.innerText = ''
        }
      }
      if(this.currentData.Duration>=2) {
      if (this.formdetail[1].Detail == undefined || this.formdetail[1].Detail == "") {
        errordertail2.innerText = 'Please enter detail day 2'
        checkNumber++;
      }else {
        errordertail2.innerText=''
      }}
      if(this.currentData.Duration>=3) {
        if (this.formdetail[2].Detail == undefined || this.formdetail[2].Detail == "") {
          errordertail3.innerText = 'Please enter detail day 3'
          checkNumber++;
        } else {
          errordertail3.innerText = ''
        }
      }
      if(this.currentData.Duration>=4) {
      if (this.formdetail[3].Detail == undefined || this.formdetail[3].Detail == "") {
        errordertail4.innerText = 'Please enter detail day 4'
        checkNumber++;
      }else {
        errordertail4.innerText=''
      }}
      if(this.currentData.Duration>=5) {
      if (this.formdetail[4].Detail == undefined || this.formdetail[4].Detail == "") {
        errordertail5.innerText = 'Please enter detail day 5'
        checkNumber++;
      }else {
        errordertail5.innerText=''
      }}
      if(this.currentData.Duration>=6) {
      if (this.formdetail[5].Detail == undefined || this.formdetail[5].Detail == "") {
        errordertail6.innerText = 'Please enter detail day 6'
        checkNumber++;
      }else {
        errordertail6.innerText=''
      }}
      if(this.currentData.Duration>=7) {
        if (this.formdetail[6].Detail == undefined || this.formdetail[6].Detail == "") {
          errordertail7.innerText = 'Please enter detail day 7'
          checkNumber++;
        } else {
          errordertail7.innerText = ''
        }
      }
      if(this.currentData.Duration>=8) {
        if (this.formdetail[7].Detail == undefined || this.formdetail[7].Detail == "") {
          errordertail8.innerText = 'Please enter detail day 8'
          checkNumber++;
        } else {
          errordertail8.innerText = ''
        }
      }
      if(this.currentData.Duration>=9) {
        if (this.formdetail[8].Detail == undefined || this.formdetail[8].Detail == "") {
          errordertail9.innerText = 'Please enter detail day 9'
          checkNumber++;
        } else {
          errordertail9.innerText = ''
        }
      }
      if(this.currentData.Duration>=10) {
      if (this.formdetail[9].Detail == undefined || this.formdetail[9].Detail == "") {
        errordertail10.innerText = 'Please enter detail day 10'
        checkNumber++;
      }else {
        errordertail10.innerText=''
      }}
      if(this.currentData.Duration==11) {
      if (this.formdetail[10].Detail == undefined || this.formdetail[10].Detail == "") {
        errordertail11.innerText = 'Please enter detail day 11'
        checkNumber++;
      }else {
        errordertail11.innerText=''
      }}

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
      if(this.currentData.Duration >=1) {
        this.form[0].TourId = this.iddata;
        this.form[0].ScheduleOrder = 1;
        this.form[0].Name = "Day 1";
        this.form[0].Detail = this.formdetail[0].Detail;
     await   TourScheduleService.save(this.form[0]).then(
            rs=>{
              console.log(rs.data)
            }
        ).catch(err=>{
          console.log(err);
        })

      }
      if(this.currentData.Duration >=2) {
        this.form[1].TourId = this.iddata;
        this.form[1].ScheduleOrder = 2;
        this.form[1].Name = "Day 2";
        this.form[1].Detail = this.formdetail[1].Detail;
     await    TourScheduleService.save(this.form[1]).then(
            rs=>{
              console.log(rs.data)
            }
        ).catch(err=>{
          console.log(err);
        })
      }
      if(this.currentData.Duration >=3) {
        this.form[2].TourId = this.iddata;
        this.form[2].ScheduleOrder = 3;
        this.form[2].Name = "Day 3";
        this.form[2].Detail = this.formdetail[2].Detail;
       await TourScheduleService.save(this.form[2]).then(
            rs=>{
              console.log(rs.data)
            }
        ).catch(err=>{
          console.log(err);
        })
      }
     if(this.currentData.Duration >=4) {
       this.form[3].TourId = this.iddata;
       this.form[3].ScheduleOrder = 4;
       this.form[3].Name = "Day 4";
       this.form[3].Detail = this.formdetail[3].Detail;
       await TourScheduleService.save(this.form[3]).then(
           rs=>{
             console.log(rs.data)
           }
       ).catch(err=>{
         console.log(err);
       })
     }
     if(this.currentData.Duration >=5) {
       this.form[4].TourId = this.iddata;
       this.form[4].ScheduleOrder = 5;
       this.form[4].Name = "Day 5";
       this.form[4].Detail = this.formdetail[4].Detail;
       await TourScheduleService.save(this.form[4]).then(
           rs=>{
             console.log(rs.data)
           }
       ).catch(err=>{
         console.log(err);
       })
     }
     if(this.currentData.Duration >=6) {
       this.form[5].TourId = this.iddata;
       this.form[5].ScheduleOrder = 6;
       this.form[5].Name = "Day 6";
       this.form[5].Detail = this.formdetail[5].Detail;
       await TourScheduleService.save(this.form[5]).then(
           rs=>{
             console.log(rs.data)
           }
       ).catch(err=>{
         console.log(err);
       })
     }
     if(this.currentData.Duration >=7) {
       this.form[6].TourId = this.iddata;
       this.form[6].ScheduleOrder = 7;
       this.form[6].Name = "Day 7";
       this.form[6].Detail = this.formdetail[6].Detail;
       await TourScheduleService.save(this.form[6]).then(
           rs=>{
             console.log(rs.data)
           }
       ).catch(err=>{
         console.log(err);
       })
     }
     if(this.currentData.Duration >=8) {
       this.form[7].TourId = this.iddata;
       this.form[7].ScheduleOrder = 8;
       this.form[7].Name = "Day 8";
       this.form[7].Detail = this.formdetail[7].Detail;
       await TourScheduleService.save(this.form[7]).then(
           rs=>{
             console.log(rs.data)
           }
       ).catch(err=>{
         console.log(err);
       })
     }
     if(this.currentData.Duration >=9) {
       this.form[8].TourId = this.iddata;
       this.form[8].ScheduleOrder = 9;
       this.form[8].Name = "Day 9";
       this.form[8].Detail = this.formdetail[8].Detail;
       await TourScheduleService.save(this.form[8]).then(
           rs=>{
             console.log(rs.data)
           }
       ).catch(err=>{
         console.log(err);
       })
     }if(this.currentData.Duration >=10) {
       this.form[9].TourId = this.iddata;
       this.form[9].ScheduleOrder = 10;
       this.form[9].Name = "Day 10";
       this.form[9].Detail = this.formdetail[9].Detail;
       await TourScheduleService.save(this.form[9]).then(
           rs=>{
             console.log(rs.data)
           }
       ).catch(err=>{
         console.log(err);
       })
     }
     if(this.currentData.Duration >=11) {
       this.form[10].TourId = this.iddata;
       this.form[10].ScheduleOrder = 11;
       this.form[10].Name = "Day 11";
       this.form[10].Detail = this.formdetail[10].Detail;
       await TourScheduleService.save(this.form[10]).then(
           rs=>{
             console.log(rs.data)
           }
       ).catch(err=>{
         console.log(err);
       })
     }
     await  this.$router.push("/tours/list")
    }

  },
};

</script>

<style scoped>

</style>