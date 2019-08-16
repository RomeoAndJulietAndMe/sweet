export default {
    path:'/mine',
    component: ()=>import('../pages/mine/Mine/Mine'),
    children:[
        {
            path:'edit',
            component:()=>import('../pages/mine/Edit/Edit')
        }
    ]
}