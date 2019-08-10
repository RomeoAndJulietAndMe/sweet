<template>
<nav class="tab-bar border-top">
    <template v-for="tabItem in tabData">
        <router-link class="tab-item" :key="tabItem.id" 
            :to="tabItem.path"> 
            <span>{{tabItem.name}}</span>
        </router-link>
    </template>
</nav>
</template>

<script>
export default {
    name: 'tab-bar',
    data(){
        return {
            tabData: [
                {id: 1, name: '首页', path: '/home'},
                {id: 2, name: '精选', path: '/handpink'},
                {id: 3, name: '探店', path: '/discovery'},
                {id: 4, name: '我的', path: '/mine'},
                
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-bar{
    width: 100%;
    height: 1.306667rem; //49px
    line-height: 1.306667rem; //49px
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    background: #fff;
    .tab-item{
        flex: 1;
        display: flex;
        // flex-direction: column;
        align-items: center;
        span:nth-of-type(1){
            height: 100%; 
            flex: 1;
            text-align: center; 
        }
        font-size: .373333rem;//14px
    }
     
    .tab-item.router-link-active{
         
           background:lightsalmon;
         
    }
}
</style>

