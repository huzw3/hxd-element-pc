<template>
    <div>
        <el-card :body-style="{ padding: '15px' }">
            <el-tabs type="card" v-model="activeName">
                <el-tab-pane label="正篇" name="first">
                    <el-row>
                        <el-col v-for="i in 60" :span="4" style="padding-bottom: 10px">
                            <hxd-titlebox :clauseId = i></hxd-titlebox>
                        </el-col>
                    </el-row>
                    <el-row class="hxd-page">
                        <hxd-page></hxd-page>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="番外篇" name="second">
                    <el-row>
                        <el-col v-for="i in 30" :span="4" style="padding-bottom: 10px">
                            <hxd-titlebox :clauseId = i></hxd-titlebox>
                        </el-col>
                    </el-row>
                    <el-row class="hxd-page">
                        <hxd-page></hxd-page>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
    import  pageModule from '../../components/pagination.vue'
    import  titleboxModule from '../../components/titlebox.vue'

    export default {
        components:{
            "hxd-page":pageModule,
            "hxd-titlebox":titleboxModule
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

    .hxd-page{
        text-align: center;
        padding-top: 20px
    }

</style>
