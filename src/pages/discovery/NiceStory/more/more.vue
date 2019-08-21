<template>
  <div id="more-good">
    <more-head></more-head>
    <div class="more-list" >
      <more-home v-for="item in moreData" :key="item.id"
       :title="item"></more-home>
      
    </div>
  </div>
</template>

<script>
import MoreHead from "../more/more-head";
import MoreHome from "../more/more-home";
export default {
  components: {
    [MoreHead.name]: MoreHead,
    [MoreHome.name]: MoreHome
  },
  data() {
    return {
      moreData: [
        {
          id: 1,
          name: "七彩云南，半夏味道",
          wanttogo: "50人想去",
          location: "宝安区 · [半夏云南味道]",
          tupiann: [
            { id: 1, img: "/images/discovery/gengduo.png" },
            { id: 2, img: "/images/discovery/gengduo2.png" },
            { id: 3, img: "/images/discovery/gengduo3.png" }
          ]
        },
        {
          id: 2,
          name: "山海间的时光里",
          wanttogo: "80人想去",
          location: "深圳大鹏区 · [时光里客栈古城店]",
          tupiann: [
            { id: 1, img: "/images/discovery/gengduo4.png" },
            { id: 2, img: "/images/discovery/gengduo5.png" },
            { id: 3, img: "/images/discovery/gengduo6.png" }
          ]
        },
        {
          id: 3,
          name: "七彩云南，半夏味道",
          wanttogo: "50人想去",
          location: "宝安区 · [半夏云南味道]",
          tupiann: [
            { id: 1, img: "/images/discovery/gengduo.png" },
            { id: 2, img: "/images/discovery/gengduo.png" },
            { id: 3, img: "/images/discovery/gengduo.png" }
          ]
        },
        {
          id: 4,
          name: "七彩云南，半夏味道",
          wanttogo: "50人想去",
          location: "宝安区 · [半夏云南味道]",
          tupiann: [
            { id: 1, img: "/images/discovery/gengduo.png" },
            { id: 2, img: "/images/discovery/gengduo.png" },
            { id: 3, img: "/images/discovery/gengduo.png" }
          ]
        }
      ]
    };
  },
  // created(){
  //   this.$store.commit('discovery/setMoreDataAction',this.moreData);
  // }
};
</script>

<style lang="scss" scoped>
#more-good {
  background: #fbb441;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 0;
  z-index: 15;
  .more-list{
    background: #fbb441;
    width: 100%;
    position: absolute;
    bottom: 0;
    top: 1.173333rem;;
  }
}
</style>