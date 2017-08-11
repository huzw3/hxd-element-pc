<template>
    <div style="padding-top: 65px">
        <el-row>
            <el-carousel type="card">
                <el-carousel-item>
                    <img @click="routeTo(1)" src="../assets/logo.png">
                </el-carousel-item>
                <el-carousel-item>
                    <img @click="routeTo(2)" src="../assets/logo.png">
                </el-carousel-item>
                <el-carousel-item>
                    <img @click="routeTo(3)" src="../assets/logo.png">
                </el-carousel-item>
            </el-carousel>
        </el-row>

        <hxd-cartoon></hxd-cartoon>

        <hxd-shop></hxd-shop>

    </div>
</template>

<script>
    import  cartoonModule from './homePage/cartoon.vue'
    import  shopModule from './homePage/shop.vue'


    export default {
        components:{
            "hxd-cartoon":cartoonModule,
            "hxd-shop":shopModule
        },
        data () {
            return {

            }
        },

        methods: {
            routeTo(pageId){
                this.$router.push({path: '/catalog',query: { value: pageId }});
            }
        }
    }
</script>

<style>

</style>
