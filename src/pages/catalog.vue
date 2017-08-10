<template>
    <div>
        <el-carousel indicator-position="outside">
            <el-carousel-item>

            </el-carousel-item>
        </el-carousel>


        <el-tabs type="card" v-model="activeName">
            <el-tab-pane label="正篇" name="first">
                <el-row>
                    <el-col v-for="i in 60" :span="4">
                        <el-button>a</el-button>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="番外篇" name="second">

            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>


    export default {
        components:{

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
