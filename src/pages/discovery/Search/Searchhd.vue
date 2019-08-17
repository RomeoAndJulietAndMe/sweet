<template>
      <div class="Searchhd">
          <div class="Searchhd-list">
              <div class="list-da">
              <div class="tubiao"><img src="/images/discovery/sousuo.png"></div>
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
        .list-da{ 
            display: flex;
            height:.906667rem;
            padding-left:.266667rem;
            border:.026667rem solid #fff;
            border-radius: .266667rem;
            flex:1;
            .sousuo{
                  border-radius: .266667rem;  
                  flex:1;      
            }
            .tubiao{
                padding-top:.106667rem;
                     
            }
        }
        .quxiao{
            color:crimson;
            font-size:.48rem;

        }
    }
}

</style>