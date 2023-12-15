import Applayout from "@/layout/Applayout";
const routes=[
    {
        path: '/flights',
        component: Applayout,
        name: 'flights',
        meta: {
            title: 'Flights',
            icon: 'bars'
        },
        children: [
            {
                path: 'list',
                component: () => import('./List'),
                name: 'flightList',
                meta: {
                    title: 'Flight List',
                }
            },
            {
                path: 'create',
                component:()=> import('./Created'),
                name:'flightCreate',
                meta: {
                    title: 'Flight Create'
                }
            },
            {
                path: 'detailflight/:id',
                component: () => import('./FlightDetail'),
                name: 'flightDetail',
                meta: {
                    title: 'Flight Detail',
                    hidden:'true'
                }
            },
            {
                path: 'editflight/:id',
                component:()=> import('./Edit'),
                name:'Flight Edit',
                meta: {
                    title: 'Flight Edit',
                    hidden:'true'
                }
            },
        ]
    },
]
export default routes;