import Applayout from "@/layout/Applayout";
const routes=[
    {
        path: '/tours',
        component: Applayout,
        name: 'tours',
        meta: {
            title: 'Tours',
            icon: 'bars'
        },
        children: [
            {
                path: 'list',
                component: () => import('./List'),
                name: 'tourList',
                meta: {

                    title: 'Tour List',
                }
            },
            {
                path: 'create',
                component: () => import('./Created'),
                name: 'create',
                meta: {

                    title: 'Tour Create',
                }
            },
            {
                path: 'createtourdetail',
                component: () => import('./CreatedTourSchedule'),
                name: 'create detail',
                meta: {

                    title: 'Create Detail Tour',
                    hidden:'true'
                }
            },
            {
                path: 'detailtour/:id',
                component: () => import('./TourDetail'),
                name: 'Detailtour',
                meta: {

                    title: 'Detail Tour',
                    hidden:'true'
                }
            },
            {
                path: 'detail',
                component: () => import('./Detail'),
                name: 'tourDetail',
                meta: {

                    title: 'Tour Detail',
                }
            },
            {
                path: 'schedule',
                component: () => import('./Schedule'),
                name: 'tourSchedule',
                meta: {

                    title: 'Tour Schedule',
                }
            },
            {
                path: 'edit/:id',
                component:()=> import('./Edit'),
                name:'Edittour',
                meta: {
                    title: 'Edit Tour',
                    hidden:'true'
                }
            },
            {
                path: 'editschedule/:id',
                component:()=> import('./EditSchedule'),
                name:'Edittourschedule',
                meta: {
                    title: 'Edit Tour Schedule',
                    hidden:'true'
                }
            },
        ]
    },
]
export default routes;