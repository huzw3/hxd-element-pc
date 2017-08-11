<template>
    <div>
        <el-card :body-style="{ padding: '15px' }">
            <el-tabs type="card" v-model="activeName">
                <el-tab-pane label="最近更新" name="first">
                    <el-row>
                        <el-col v-for="i in 6" :span="4" style="padding-bottom: 10px">
                            <hxd-titlebox class="hxd_titleboxRed"></hxd-titlebox>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
    import  titleboxModule from '../../components/titlebox.vue'

    export default {
        components:{
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
    .hxd_titleboxRed {
        border: 1px solid #20a0ff;
        color: #20a0ff;
    }
</style>
