
const routes=[
    {
        path: '/about',
        component:()=>import('./list'),
        name: 'about',
        meta: {
            nametitle:'About',
            title: 'About',
        },
    },
]
export  default  routes