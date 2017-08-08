<template>
    <div class="block">
        <el-carousel style="text-align: center" indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Carousel,CarouselItem } from 'element-ui'
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarouselItem.name, CarouselItem);

    export default {
        components:{

        },
        data () {
            return {
                urls: ["",""]
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
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
