<template>
<div class="page">
    <handpinkheader></handpinkheader>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
import handpinkheader from './children/HandPinkHeader'
export default {
  components:{
      [handpinkheader.name]: handpinkheader
  }
}
</script>

<style>

</style>
