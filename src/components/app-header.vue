<template>
<div class="app-header"> 
   <span v-if="isLeft=='true'" @click="backAction" class="iconfont icon-fanhui"></span>
   <h1 :class=classTitle>{{title}}</h1>  
     
</div>
</template>

<script>
export default {
    name:'app-header',
    props:{
        classTitle:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        },
        isLeft:{
            type:String,
            default:''
        },
         
    },
    mounted(){
        console.log(this.$route);
    },
    methods: {
        backAction(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.app-header{  
    width:100%; 
    height:1.173333rem;//44px;
    box-sizing: border-box;
    display: flex; 
    align-items: center; 
    position: relative; 
    h1{ 
        width: 100%;
        text-align: center;  
     
    }
    span:nth-of-type(1){ 
        position: absolute;
        left: .4rem;
        width: .24rem; 
        height:.426667rem;
        display: flex;
        align-items: center;
        color:#fff;
        font-size: .426667rem;
    }
     
}
</style>


<style>

</style>
