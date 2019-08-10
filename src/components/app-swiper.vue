<template>
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <slot/>
    </div>
    <div v-show="isShow" class="swiper-pagination"></div>
</div>
</template>

<script>
export default {
    name: 'app-swiper',
    data(){
        return {
            isShow: true
        }
    },
    methods: {
        update(){
                // 是否需要指示器
                this.isShow = (this.$children.length > 1);
                // 销毁滚动视图
                this.swiper && this.swiper.slideTo(0, 0);
                this.swiper && this.swiper.destroy();
                // 创建视图
                this.swiper = new Swiper(this.$refs.swiper, {
                    pagination:  '.swiper-pagination',
                    loop: this.isShow//一张图片不需要循环
                });
        }   
    }
    // ,
    // mounted(){
    //     this.swiper = new Swiper(this.$refs.swiper, {
    //         pagination: '.swiper-pagination'
    //     });
    // },
    
}
</script>

<style>
.swiper-pagination-bullet.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 2px;
}
.swiper-pagination-bullet {
    width: 20px;
    height: 2px;
    border-radius: 0;
    background: #000;
    opacity: 0.4;
}
</style>
