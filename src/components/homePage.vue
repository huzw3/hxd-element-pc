<template>
    <div class="block">
        <el-carousel trigger="click" height="350px">
            <el-carousel-item v-for="url in urls">
                <a :class=url @click="clickCarousel(url)"></a>
            </el-carousel-item>
        </el-carousel>
        <DemoPage></DemoPage>
    </div>
</template>

<script>
    import  DemoPage from './demoPage.vue';
    import Vue from 'vue'
    import { Carousel,CarouselItem } from 'element-ui'
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarouselItem.name, CarouselItem);

    export default {
        components:{
            "DemoPage" : DemoPage
        },
        data () {
            return {
                urls: [
                    "swipe-img swipe-img1","swipe-img swipe-img2","swipe-img swipe-img3","swipe-img swipe-img4"
                ]
            }
        },
        methods: {
            routeTo () {
                this.$router.push({path: '/index/info',query: { value: 'hxd' }});
            },
            clickCarousel: function () {
                alert("123")
            }
        }
    }
</script>

<style>

    .swipe-img {
         display: block;background-position: center center;height: 350px;
         background-size: 800px 350px;background-repeat: no-repeat;
     }

    .swipe-img1 {
        background-image: url(../assets/test1.jpg);
    }
    .swipe-img2 {
        background-image: url(../assets/test2.jpg);
    }
    .swipe-img3 {
        background-image: url(../assets/test3.jpg);
    }
    .swipe-img4 {
        background-image: url(../assets/test4.jpg);
    }

</style>
