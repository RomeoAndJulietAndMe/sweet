export default {
    path: '/discovery',
    component: ()=>import('../pages/discovery/Discovery/Discovery'),
    children: [ 
        {
            path:'Search',
            component:()=>import('../pages/discovery/Search/Search'),
            children:[
                {
                    path:'SearchPage',
                    component:()=>import('../pages/discovery/Search/SearchPage/SearchPage'),
                },
            ]
        },
    
        //推荐 —— 详细的故事页面
        {
            path:  'stories/:id', //假设会传入一个参数，具体看数据
            component:()=>import('../pages/common/Stories/Stories'),
            children: [  //全部想去的用户
                {
                    path: 'userAllWant',
                    component: ()=>import('../pages/common/UserAllWant/UserAllWant/UserAllWant')
                },
            ]
        },
        //附近----更多|| 好店---查看更多
        {
            path: 'nearby',
            component:()=>import('../pages/discovery/NiceStory/NiceStory'),
            children:[
                {
                   path: 'detail',
                   component:()=>import('../pages/common/Stories/Stories') 
                }
            ]
        },
        //好店
        {
            path: 'detail',
            component:()=>import('../pages/common/Stories/Stories') 
        }
       
    ]
}