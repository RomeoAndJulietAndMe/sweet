<template>
  <div id="more-home">
      <div class="baoguo">
      <div class="more-list" >
            <div class="more-zujian">
                <div class="more-shangcen">
                <h4>{{title.name}}</h4>
                <span>{{title.wanttogo}}</span>
                </div>
                <div id="dingwei">{{title.location}}</div>
                <div class="santu">
                    <li v-for="item in title.tupiann" :key="item.id">
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
              <li v-for="(item,index) in iconData" :key="item.id" :class="[item.icon,{to:item.dianjiData}]" @click="collectAction(item.id,index)" class="tab-item"></li>
              
          </ul>
      </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
    name:'more-home',
    props:{title:Object},
     data(){
         return{
              iSshow:false,
              iconData:[
                  {id:1,icon:'iconfont icon-hongxin',dianjiData:false,},
                  {id:2,icon:'iconfont icon-star',dianjiData:false,},
                  {id:3,icon:'iconfont icon-zhuanfa',dianjiData:false,},
                  {id:4,icon:'iconfont icon-pinglun',dianjiData:false,},
                ],
                

         }
     },
     methods:{
         blockAciton(){
             this.iSshow = !this.iSshow   
         },
         collectAction(id,index){
             this.iconData[index].dianjiData = !this.iconData[index].dianjiData
            console.log(index)
         }
         
     }
}
</script>

<style lang="scss" scoped>
#more-home{
        width:100%;
        background:#FBB441;
        padding-bottom:1.066667rem;
        
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
         .tab-item.to{
           color:lightsalmon;
         
    }
        }
    }
         
}

</style>