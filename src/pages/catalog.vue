<template>
    <div style="padding-top: 65px">
        <el-row>
            <el-carousel indicator-position="outside">
                <el-carousel-item>
                    <img src="../assets/logo.png">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/logo.png">
                </el-carousel-item>
            </el-carousel>
        </el-row>

        <el-row style="padding: 10px">
            <hxd-latestList></hxd-latestList>
        </el-row>

        <el-row style="padding: 10px">
            <hxd-totalList></hxd-totalList>
        </el-row>

    </div>
</template>

<script>
    import  pageModule from '../components/pagination.vue'
    import  totalListModule from './catalog/totalList.vue'
    import  latestListModule from './catalog/latestList.vue'

    export default {
        components:{
            "hxd-page":pageModule,
            "hxd-totalList":totalListModule,
            "hxd-latestList":latestListModule
        },
        data () {
            return {
                activeName: 'first'
            }
        },

        methods: {

        }
    }
</script>

<style>

</style>
