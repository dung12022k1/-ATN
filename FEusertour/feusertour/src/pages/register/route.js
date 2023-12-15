const routes=[
    {
        path: '/register',
        component:()=>import('./List'),
        name: 'Register',
        meta: {
            nametitle:'Register',
            title: 'Register',
        },
    },
]
export  default  routes