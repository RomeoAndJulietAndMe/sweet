<template>
<div class="page">
    <app-srcoll>
    <handpinkheader></handpinkheader>
    </app-srcoll>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
import AppScroll from '../../../components/app-scroll'
import handpinkheader from './children/HandPinkHeader'
export default {
  components:{
      [handpinkheader.name]: handpinkheader,
      [appscroll.name]:appscroll
  }
}
</script>

<style>

</style>
