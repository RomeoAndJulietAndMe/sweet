<template>
    <div class="head">
      <h6>小时光</h6>
      <div class="location">
          <span>
              <img src="/images/home/location.png" alt="">
          </span>
          <i>深圳</i>
      </div>
    </div>
</template>

<script>
export default {
    name:'home-head',
}
</script>

<style lang="scss" scoped>
.head{
  background: #FBB441;
  width:100%;
  height: 5.44rem;
  position: relative;   
  h6{
    background: #FBB441;
    color: #fff;
    font-size: .453333rem;
    line-height: .666667rem;
    height:.666667rem;
    width:100%;
    padding-top: .266667rem;
    text-align: center;
    // position: absolute; 
    // z-index: 1;
  }
  .location{ 
    position: absolute;
    left: .32rem;
    top: .266667rem;
    z-index: 2;
    display: flex;
    align-items: center;
    i{
      color:#fff;
      font-size: .293333rem;
    }
    span{
      width:.666667rem;
      height:.666667rem;
      display: inline-block;
      img{
        width:100%;
      }
    }
  }
}
</style>


<style>

</style>
