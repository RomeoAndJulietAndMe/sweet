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
        },
        {
            //我的收藏
            path:'collect',
            component:()=>import ('../pages/mine/Collect/Collect')
        },
        {
            //美好生活PASS卡
            path:'pass',
            component:()=>import ('../pages/mine/Pass/Pass')
        },
        {
            //发布小店
            path:'substore',
            component:()=>import ('../pages/mine/Substore/Substore')
        },
        {
            //意见反馈
            path:'advice',
            component:()=>import ('../pages/mine/Advice/Advice'),
            
        },
    ]
}