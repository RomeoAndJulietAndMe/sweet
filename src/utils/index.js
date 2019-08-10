import { Lazyload } from 'vant';
import AppScroll from '../components/app-scroll'
import AppSwiper from '../components/app-swiper'
import AppSwiperItem from '../components/app-swiper-item'


export default {
    install(Vue){
        Vue.component(AppScroll.name, AppScroll);
        Vue.component(AppSwiper.name, AppSwiper);
        Vue.component(AppSwiperItem.name, AppSwiperItem);
        Vue.use(Lazyload);
    }
}



