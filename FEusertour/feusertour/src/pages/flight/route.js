const routes=[
    {
        path: '/flights',
        component:()=>import('./List'),
        name: 'flights',
        meta: {
            nametitle:'Flight',
            title: 'Flight',
        },
    },{
        path: '/flightdetail:id',
        component: () => import('./Detail'),
        name: 'Flight Detail',
        meta: {
            nametitle:'Flight Detail',
            title: 'Flight Detail',
        },
    },
]
export  default  routes