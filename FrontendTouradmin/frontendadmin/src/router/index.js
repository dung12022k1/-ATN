import Vue from 'vue'
import VueRouter from 'vue-router'
import {toursRoute} from "@/pages/tour";
import {hotelsRoute} from "@/pages/hotel";
import  {flightsRoute} from "@/pages/flight";
import  {accountsRoute} from "@/pages/account";
import {loginsRoute} from "@/pages/login";
import {ordersRouter} from "@/pages/order";

Vue.use(VueRouter)

const routes = [
    ...accountsRoute,
    ...toursRoute,
    ...hotelsRoute,
    ...flightsRoute,
    ...ordersRouter,
    ...loginsRoute,


]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    let token = localStorage.getItem('access_token');
    if (to.name !== 'Login' && !token) {
        next({ name: 'Login' });
    }else if(to.name ==='Login' && token){
        localStorage.removeItem('access_token');
        next({name:'Login'})
    }
    else {
            next();
    }
})

export default router;