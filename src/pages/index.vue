<template>
    <div>
        <hxd-header></hxd-header>

        <el-row style="padding-top: 63px">
            <el-carousel type="card">
                <el-carousel-item>
                    <img src="../assets/logo.png" style="width: 100%">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/logo.png" style="width: 100%">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/logo.png" style="width: 100%">
                </el-carousel-item>
            </el-carousel>
        </el-row>

        <hxd-cartoon></hxd-cartoon>

        <hxd-shop></hxd-shop>

        <hxd-footer style="position: static"></hxd-footer>

    </div>
</template>

<script>
    import  hxdHeader from '../components/header.vue'
    import  cartoonModule from './homePage/cartoon.vue'
    import  shopModule from './homePage/shop.vue'
    import  hxdFooter from '../components/footer.vue'

    export default {
        components:{
            "hxd-header" : hxdHeader,
            "hxd-cartoon":cartoonModule,
            "hxd-shop":shopModule,
            "hxd-footer":hxdFooter
        },
        data () {
            return {

            }
        },

        methods: {

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
