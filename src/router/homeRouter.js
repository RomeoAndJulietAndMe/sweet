export default {
    path: '/home',
    component: ()=>import('../pages/home/Home/Home'),
    children: [
        //小时光带你一起发现周边美好小店-------查看更多
        {
            path: 'niceStore',
            component: ()=>import('../pages/home/NiceStore/NiceStore'),
            children: [
                //详细界面进去后,是  详细的故事页面
                {
                    path:  'Stories/:id',
                    component:()=>import('../pages/common/Stories/Stories')
                }
            ]
        },
        //分类 餐吧
        {
           path: 'categoryItem',
           component:()=>import('../pages/home/CategoryItem/CategoryItem'), 
           children: [
               //每一项点进去的 详细 界面
               {
                    path: 'Stories/:id',
                    component:()=>import('../pages/common/Stories/Stories')
               }
           ]
        },
        //分类   想去的地方
        {
            path: 'userAllWant',
            component: ()=>import('../pages/common/UserAllWant')
        },
       
    ]
}