<template>
<div class="loading">
    <div class="box">
        <van-loading class="center" size="40px"  type="spinner"></van-loading>
    </div>
</div>
</template>

<script>
import { Loading } from 'vant';
export default {
    name: 'app-loading',
    components: {
        [Loading.name]: Loading
    }
}
</script>

<style lang="scss" scoped>
.loading{
    .box{
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 100;
        
        padding: 30px;
        border-radius: 10px;
        background: #fff;
        
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.5);
    }
}
</style>

