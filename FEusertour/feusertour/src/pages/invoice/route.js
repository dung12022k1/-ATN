const routes=[
    {
        path: '/invoice:id',
        component:()=>import('./List'),
        name: 'Invoice',
        meta: {
            nametitle:'Invoice',
            title: 'Invoice',
        },
    },
]
export  default  routes