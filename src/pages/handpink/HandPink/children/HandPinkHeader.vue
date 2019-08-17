<template>
  <div class="header-box">
      <div class="handpink-header">
          <div class="title-box">
              <h2>精选</h2>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'handpinkheader'
}
</script>

<style lang="scss" scoped>
.header-box{
    width: 100%;
    .handpink-header{
        height: 44px;
        background: #FBB441;
        .title-box{
            line-height: 44px;
            text-align: center;
            font-family: PingFang-SC-Bold;
            color: #fff;
            font-size: 24px;
            margin-top: 27px;
        }
    }
}
</style>