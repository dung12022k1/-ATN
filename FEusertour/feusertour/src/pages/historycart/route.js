const routes=[
    {
        path: '/historycart',
        component:()=>import('./list'),
        name: 'historycart',
        meta: {
            nametitle:'History Cart',
            title: 'History Cart',
        },
    },

]
export  default  routes