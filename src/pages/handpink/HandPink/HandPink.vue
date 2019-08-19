<template>
<div class="page">
   <app-scroll>
    <handpinkheader></handpinkheader>
    <hand-week></hand-week>
    <hand-local></hand-local>
    <hand-hill></hand-hill>

<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>
<h1>dfjs</h1>



   </app-scroll>


    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
import appsrcoll from '../../../components/app-scroll'
import handhill from './Children/HandHill'
import handlocal from './Children/HandLocal'
import handweek from './Children/Handweek'
import handpinkheader from './Children/HandPinkHeader'
export default {
  components:{
      [handpinkheader.name]: handpinkheader,
      [handweek.name]:handweek,
      [handlocal.name]:handlocal,
      [handhill.name]:handhill
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  background: #fff;
}

</style>
