import Vue from 'vue'
import VueRouter from 'vue-router'
import {toursRoute} from "@/pages/tour";
import {hotelsRoute} from "@/pages/hotel";
import  {flightsRoute} from "@/pages/flight";
import {aboutsRoute} from "@/pages/aboutus";
import {indexsRoute} from "@/pages/index";
import {historycartRoute} from "@/pages/historycart";
// import  {accountsRoute} from "@/pages/account";
// import {loginsRoute} from "@/pages/login";
import  {contactRoute} from "@/pages/contactus";
import  {loginsRoute} from "@/pages/login";
import  {registerRoute} from "@/pages/register";
import  {invoiceRoute} from "@/pages/invoice";
Vue.use(VueRouter)

const routes = [
    ...toursRoute,
    ...invoiceRoute,
    ...hotelsRoute,
    // ...flightsRoute,
    // ...hotelsRoute,
    ...flightsRoute,
    // ...accountsRoute,
    ...contactRoute,
    ...loginsRoute,
    ...registerRoute,
    ...aboutsRoute,
    ...indexsRoute,
    ...historycartRoute,
    ...contactRoute,
    ...loginsRoute

]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    let token = localStorage.getItem('access_token');
    if(to.name ==='Login' && token){
        localStorage.removeItem('access_token');
        next({name:'Login'})
    }
    else {
        next();
    }
})

export default router;