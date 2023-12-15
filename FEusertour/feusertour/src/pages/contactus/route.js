const routes=[
    {
        path: '/contactus',
        component:()=>import('./List'),
        name: 'ContactUs',
        meta: {
            nametitle:'Contact Us',
            title: 'Contact Us',
        },
    },
]
export  default  routes