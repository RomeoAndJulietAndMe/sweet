export default {
    path: '/discovery',
    component: ()=>import('../pages/discovery/Discovery/Discovery'),
    children: [ 
        //推荐点进去后,是  详细的故事页面
        {
            path:  'stories/:id', //假设会传入一个参数，具体看数据
            component:()=>import('../pages/common/Stories/Stories'),
            children: [  //全部想去的用户
                {
                    path: 'userAllWant',
                    component: ()=>import('../pages/common/UserAllWant')
                },
            ]
        },
        //附近----更多
        {
            path: 'nearby',
        },
        //好店
        {
            path: 'niceStore',
        }
       
    ]
}