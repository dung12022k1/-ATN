import Applayout from "@/layout/Applayout";
const routes=[
    {
        path: '/hotels',
        component: Applayout,
        name: 'hotels',
        meta: {
            title: 'hotels',
            icon: 'bars'
        },
        children: [
            {
                path: 'list',
                component: () => import('./List'),
                name: 'hotelList',
                meta: {

                    title: 'Hotel List',
                }
            },
            {
                path: 'create',
                component: () => import('./Created'),
                name: 'createHotel',
                meta: {

                    title: 'Hotel Create',
                }
            },

            {
                path: 'detailhotel/:id',
                component: () => import('./HotelDetail'),
                name: 'Detaihotel',
                meta: {

                    title: 'Detail Hotel',
                    hidden:'true'
                }
            },

            {
                path: 'edit/:id',
                component:()=> import('./Edit'),
                name:'Edithotel',
                meta: {
                    title: 'Edit Hotel',
                    hidden:'true'
                }
            },


        ]
    },
]
export default routes;