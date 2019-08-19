export default {
    path:'/mine',
    component: ()=>import('../pages/mine/Mine/Mine'),
    children:[
        {
            path:'edit',
            component:()=>import('../pages/mine/Edit/Edit'),
            children:[
                {
                    path:'header_up',
                    component:()=>import('../pages/mine/Edit/HeaderUp')
                }
            ]
        },
        {
            path:'myMessage',
            component:()=>import('../pages/mine/MyMessage/MyMessage')
        },
        {
            //我的订单
            path:'order',
            component:()=>import ('../pages/mine/Order/Order')
        }
    ]
}