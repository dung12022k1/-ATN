import Applayout from "@/layout/Applayout";
const routes=[
    {
        path: '/accounts',
        component: Applayout,
        name: 'accounts',
        meta: {
            title: 'Accounts',
            icon: 'bars'
        },
        children: [
            {
                path: 'list',
                component: () => import('./List'),
                name: 'accountList',
                meta: {

                    title: 'Accounts List',
                }
            },
        ]
    },
]
export default routes;