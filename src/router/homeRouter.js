export default {
    path: '/home',
    component: ()=>import('../pages/home/Home/Home'),
    children: [
        //小时光带你一起发现周边美好小店-------查看更多
        {
            path: 'niceStore',
            component: ()=>import('../pages/home/NiceStore/NiceStore'),
            children: [
                //详细界面进去后,是  "详细"的“好店”页面
                {
                    path:  'Stories/:s_id',
                    component:()=>import('../pages/common/Stories/Stories')
                }
            ]
        },
        //分类-----餐吧/旅社/生活馆/花房
        {
           path: 'categoryItem/:cate_id',
           component:()=>import('../pages/home/CategoryItem/CategoryItem'), 
           children: [
               //进去的 详细 “好店” 界面
               {
                    path: 'Stories/:id',
                    component:()=>import('../pages/common/Stories/Stories')
               }
           ]
        },
        // TA想去  全部用户想去的地方
        {
            path: 'userAllWant',
            component: ()=>import('../pages/common/UserAllWant/UserAllWant/UserAllWant'),
            children: [
                //个人全部想去的地方
               {
                path: 'detail/:id',
                component: ()=>import('../pages/common/UserAllWant/EveryoneDetail/EveryoneDetail')
               }
            ]
        },
        //猜你喜欢——详情
        {
            path: 'guesslike/:g_id',
            component: ()=>import('../pages/common/Stories/Stories'),
            children: [
                {
                    path: 'userAllWant',
                    component: ()=>import('../pages/common/UserAllWant/UserAllWant/UserAllWant')
                }
            ]
        }
       
    ]
}