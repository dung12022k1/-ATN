
const routes=[
    {
        path: '/hotels',
        component:()=>import('./list'),
        name: 'hotels',
        meta: {
            nametitle:'Hotel',
            title: 'Hotel',
        },
    },
    {
        path: '/hoteldetail:id',
        component: () => import('./Detail'),
        name: 'Hotel Detail',
        meta: {
            nametitle:'Hotel Detail',
            title: 'Hotel Detail',
        },
    },

]
export  default  routes
