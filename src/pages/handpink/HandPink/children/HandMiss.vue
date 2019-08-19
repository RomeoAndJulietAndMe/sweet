<template>
  <div class="unmiss">
      <p class="unmiss-title">不可错过的小时光</p>
      <div class="unmiss-box" ref="menuScroll">
          <ul class="unmiss-list">
              <li class="list-item" v-for="item in missData" :key="item.id">
                  <img class="list-img" :src="item.picUrl">
                  <p class="list-name">{{item.name}}</p>
              </li>
          </ul>
      </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'hand-miss',
    data(){
        return{
            missData:[
                {id:1,name:'成都必游景点',picUrl:'/images/handpink/heytea.jpg'},
                {id:2,name:'重庆必游景点',picUrl:'/images/handpink/heytea.jpg'},
                {id:3,name:'北京必游景点',picUrl:'/images/handpink/heytea.jpg'}
            ]
        }
    },
    mounted(){
         new BScroll(this.$refs.menuScroll,{
             click:true,
             tap:true,
             scrollX:true,
             scrollY:false 
         })
    }
}
</script>

<style lang="scss" scpoed>
.unmiss{
    width: 100%;
    position: absolute;
    left:10px;
    top:993px;
    box-sizing:border-box;
    display: flex;
    .unmiss-title{
        font-size: 30px;
        margin-left:39px;
        margin-top:80px;
    }
    .unmiss-box{
        box-sizing:border-box; 
        overflow: hidden;
        .unmiss-list{
            display: flex;
            .list-item{
                flex:1;
                background:#fff;

            }
        }
    }
}
</style>