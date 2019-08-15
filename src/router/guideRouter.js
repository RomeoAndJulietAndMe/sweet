export default{
    //引导页
    path: '/guide',
    component:()=>import('../pages/guide/Guide/Guide'),
    children:[
        {   //点击”跳过“
            path:'jump',
            component:()=>import('../pages/login/Login')
        },
        //引导页轮播图完成后
        {  
            path:'home',
            component: ()=>import('../pages/home/Home/Home')


           /*  path: '/',
            redirect: '/home' */
        }
    ]
}