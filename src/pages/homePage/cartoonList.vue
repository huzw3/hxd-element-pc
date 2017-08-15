<template>
    <el-row style="padding: 10px">
        <el-card :body-style="{ padding: '5px' }">
            <el-row>
                <!--左边栏,展示漫画-->
                <el-col :span="18">
                    <el-row>
                        <el-col :span="3">
                            <el-button :plain="true" type="info" style="border: none;font-size: 20px">在线漫画</el-button>
                        </el-col>
                        <el-col :span="21">
                            <el-breadcrumb separator="|" style="padding-top: 16px">
                                <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
                                <el-breadcrumb-item>鼠绘汉化</el-breadcrumb-item>
                                <el-breadcrumb-item>热血漫画</el-breadcrumb-item>
                                <el-breadcrumb-item>国产漫画</el-breadcrumb-item>
                                <el-breadcrumb-item></el-breadcrumb-item>
                            </el-breadcrumb>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="4" v-for="i in 12" style="padding: 0px 10px 10px 10px;">
                            <el-card :body-style="{ padding: '5px' }" style="cursor: pointer;" @click.native="routeTo(i)">
                                <img src="../../assets/logo.png" style="width: 100%;">
                                <el-row>
                                    <span>更新至：第{{i}}话</span>
                                </el-row>
                                <el-row>
                                    <span>{{ currentDate }}</span>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>

                    <el-row style="text-align: center">
                        <el-pagination
                                small
                                layout="prev, pager, next"
                                :total="50">
                        </el-pagination>
                    </el-row>
                </el-col>
                <!-- 右边栏-->
                <el-col :span="6">
                    <el-row>
                        <el-button :plain="true" type="info" style="border: none;font-size: 20px">即将更新</el-button>
                    </el-row>

                    <el-row>
                        <el-col :span="12" v-for="i in 6" style="padding: 0px 3px 3px 3px">
                            <el-card :body-style="{ padding: '3px' }" style="cursor: pointer;" @click.native="routeTo(i)">
                                <el-row>
                                    <el-col :span="8">
                                        <img src="../../assets/logo.png" style="width: 80%">
                                    </el-col>
                                    <el-col :span="16">
                                        <el-row>
                                            <span>漫画名称</span>
                                        </el-row>
                                        <el-row style="padding-top: 3px">
                                            <span> xx话</span>
                                            <span> {{ currentDate }}</span>
                                        </el-row>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-card>
    </el-row>
</template>

<script>

    export default {
        components:{

        },
        data () {
            return {
                currentDate: (new Date()).toLocaleDateString()
            }
        },

        methods: {
            routeTo(pageId){
                this.$router.push({path: '/catalogPage',query: { value: pageId }});
            }
        }
    }
</script>

<style>

</style>
