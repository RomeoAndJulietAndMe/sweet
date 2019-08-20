<template>
  <div id="more-home">
      <div class="baoguo">
      <div class="more-list" >
            <div class="more-zujian">
                <div class="more-shangcen">
                <h4>七彩云南，半夏味道</h4>
                <span>50人想去</span>
                </div>
                <div id="dingwei">宝安区 · [半夏云南味道]</div>
                <div class="santu">
                    <li v-for="item in listData" :key="item.id">
                        <img :src="item.img">
                    </li>
                </div>
                <div class="xianshi">
                <i class="iconfont icon-icon-arrow-bottom2" @click="blockAciton"></i>
                </div>
                
            </div>
      </div>
      <div class="yaojuzhong" v-if="iSshow">
      <div class="zhuanfa">
          <i class="iconfont icon-icon-arrow-top2" @click="blockAciton"></i>
          <ul class="xianshiyc">
              <li class="iconfont icon-hongxin"></li>
               <li class="iconfont icon-star"></li>
                <li class="iconfont icon-zhuanfa"></li>
                 <li class="iconfont icon-pinglun"></li>
          </ul>
      </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
    name:'more-home',
     data(){
         return{
             listData:[
                        {id:1,img:'/images/discovery/gengduo.png'},
                        {id:2,img:'/images/discovery/gengduo.png'},
                        {id:3,img:'/images/discovery/gengduo.png'},
                      ],
              iSshow:false,
             
         }
     },
     methods:{
         blockAciton(){
             this.iSshow = !this.iSshow
         }
     }
}
</script>

<style lang="scss" scoped>
#more-home{
        width:100%;
        position: absolute;
        top: 1.173333rem;
        left: 0;
        background:#FBB441;
        .baoguo{
        .more-list{
            padding:0 .4rem;
            .more-zujian{
                background:#fff;
                border:.026667rem solid #fff;
                border-radius: .266667rem;
                padding:.266667rem;
                .more-shangcen{
                    display:flex;
                    font-size:.48rem;
                    justify-content:space-between;
                    h4{
                        font-weight: bold;
                    }
                    span{
                        font-size:.373333rem;
                        color:#999999;
                    }  
                }
                 #dingwei{
                        margin-top:.266667rem;
                        font-size:.373333rem;
                        color:#999999;
                    }
                .santu{
                    margin-top:.4rem;
                     display:flex;
                     justify-content: space-between;
                    li{
                        list-style: none;
                    }
                }
                .xianshi{
                    margin-top:.266667rem;
                    text-align: center;
                    i{
                        font-size:0.56667rem;
                    }
                }
              
            }
        }
        .yaojuzhong{
            width:100%;
            text-align: center;
            margin-top:-.96rem;
           
          .zhuanfa{     
                        height:2.48rem;
                        width:8.4rem;
                        background:#fff;
                        border:.026667rem solid #fff;
                        border-radius: .266667rem;
                        display: inline-block;
                        i{
                            font-size:0.56667rem; 
                        }
                        .xianshiyc{
                            
                            height:1.52rem;
                            display: flex;
                            justify-content: space-around;
                            margin-top:.266667rem;
                            li{
                                font-size:.93333rem;
                                line-height:1.52rem;
                            }
                        }
        }
        }
    }
         
}

</style>