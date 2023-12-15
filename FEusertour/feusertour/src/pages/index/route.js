
const routes=[
    {
        path: '/',
        component:()=>import('./list'),
        name: 'index',
        meta: {
            nametitle:'CityTours',
            title: 'CityTours',
        },
    },

]
export  default  routes