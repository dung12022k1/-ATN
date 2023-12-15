const routes=[
    {
        path: '/tours',
        component:()=>import('./List'),
        name: 'tours',
        meta: {
            nametitle:'Tourlist',
            title: 'Tour list',
            icon: 'tourlist',
        },
    },
    {
        path: '/detail:id',
        component: () => import('./Detail'),
        name: 'Detail',
        meta: {
            nametitle:'TourDetail',
            title: 'Tour Detail',
        },
    },
]
export  default  routes
