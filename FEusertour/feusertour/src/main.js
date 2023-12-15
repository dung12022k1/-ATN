import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import CKEditor from 'ckeditor4-vue'
import VueAgile from "vue-agile";
import VueScrollTo from "vue-scrollto";
import DateRangePicker from 'vue2-daterange-picker'
import VueToast from 'vue-toast-notification';
import moment from "moment-timezone";
//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(Antd);
Vue.use(VueAgile)
Vue.use(DateRangePicker)
Vue.use(VueScrollTo)
Vue.use(VueToast);
Vue.use(moment);
Vue.config.productionTip = false
// import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use( CKEditor );
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {faAccessibleIcon} from "@fortawesome/free-brands-svg-icons";
import {faAngry} from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faUserSecret,faAngry,faAccessibleIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
    render: h => h(App),
    router
    /* el: '#app',
     components: { App },
     template: ''*/
}).$mount('#app')