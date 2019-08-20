<template>
<div id="more-good">
     <more-head></more-head>
     <more-home></more-home>
     

</div>
</template>

<script>
import MoreHead from '../more/more-head'
import MoreHome from '../more/more-home'
export default {
       components:{
           [MoreHead.name]:MoreHead,
          [MoreHome.name]:MoreHome
    },
}
</script>

<style lang="scss" scoped>
#more-good{
     background:#FBB441;
     width:100%;
     position: absolute;
     bottom:0;
     top:0;
     z-index: 15;
}

</style>