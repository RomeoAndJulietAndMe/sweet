export default {
    path: '/handpink',
    component: ()=>import('../pages/handpink/HandPink/HandPink'),
    children: [ 
        //趣周末/成都当地游/重庆当地游
        {
            path:  'niceStory/:n_id', //假设会传入一个参数，具体看数据
            component:()=>import('../pages/handpink/NiceStory/NiceStory'),
            children: [   
                //某家店详情页
                {
                    path: 'detail',
                    component: ()=>import('../pages/handpink/StoryDetail/StoryDetail')
                },
            ]
        },
        //不错的小时光
        {
            path: 'detail',
            component: ()=>import('../pages/handpink/StoryDetail/StoryDetail')
        } 
        
       
    ]
}