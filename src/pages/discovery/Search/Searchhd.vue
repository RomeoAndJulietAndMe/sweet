<template>
      <div class="Searchhd">
          <div class="Searchhd-list">
              <div class="list-da">
              <div class="tubiao">
                  <i class="iconfont icon-search"></i>
              </div>
              <input class="sousuo" type="text">
              </div>
              <router-link class="quxiao" to="/discovery">取消</router-link>
          </div>
      </div>
</template>

<script>
export default {
       name:'searchhd'
}
</script>

<style lang="scss" scoped>
.Searchhd{
    width:100%; 
    
    .Searchhd-list{
        height:1.173333rem;
        background:#FBB441;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-left:.266667rem;
        .list-da{ 
            display: flex;
            height:.906667rem;
            padding-left:.266667rem;
            border:.026667rem solid #fff;
            border-radius: .266667rem;
            background:#fff;
            flex:1;
            .sousuo{
                  border-radius: .266667rem;  
                  flex:1;      
            }
            .tubiao{
                line-height:.906667rem;
                background:#fff;
                i{
                    display: inline-block;
                    font-size:0.56667rem;    
                }     
            }
        }
        .quxiao{
            color:crimson;
            font-size:.48rem;

        }
    }
}

</style>