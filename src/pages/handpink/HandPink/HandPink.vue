<template>
<div class="page">
   <handpinkheader></handpinkheader>

   <app-scroll class="content">
   
    <hand-week></hand-week>
    <hand-local></hand-local>
    <hand-hill></hand-hill>
    <hand-miss></hand-miss>
   </app-scroll>


    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
import handmiss from './children/HandMiss'
import appsrcoll from '../../../components/app-scroll'
import handhill from './Children/HandHill'
import handlocal from './Children/HandLocal'
import handweek from './Children/Handweek'
import handpinkheader from './Children/HandPinkHeader'
export default {
  components:{
      // [appsrcoll.name]:appsrcoll,
      [handpinkheader.name]: handpinkheader,
      [handweek.name]:handweek,
      [handlocal.name]:handlocal,
      [handhill.name]:handhill,
      [handmiss.name]:handmiss
  }
}
</script>

<style lang="scss" scoped>
.page{
  .content{
    overflow: hidden;
    width: 100%;
    background: #fff;
  }


}

</style>
