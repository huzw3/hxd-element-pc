<template>
    <el-row style="padding: 10px">
        <el-card :body-style="{ padding: '5px' }">
            <el-row>
                <!--左边栏,展示漫画-->
                <el-col :span="18">
                    <el-row>
                        <el-col :span="3">
                            <el-button :plain="true" type="info" style="border: none;font-size: 20px">商品周边</el-button>
                        </el-col>
                        <el-col :span="21">
                            <el-breadcrumb separator="|" style="padding-top: 16px">
                                <el-breadcrumb-item>手办</el-breadcrumb-item>
                                <el-breadcrumb-item>服饰</el-breadcrumb-item>
                                <el-breadcrumb-item>杯子</el-breadcrumb-item>
                                <el-breadcrumb-item>鼠标垫</el-breadcrumb-item>
                                <el-breadcrumb-item>摆件</el-breadcrumb-item>
                                <el-breadcrumb-item>挂链</el-breadcrumb-item>
                                <el-breadcrumb-item>图书</el-breadcrumb-item>
                                <el-breadcrumb-item>其他</el-breadcrumb-item>
                                <el-breadcrumb-item></el-breadcrumb-item>
                            </el-breadcrumb>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="6" v-for="i in 8" style="padding: 0px 10px 10px 10px">
                            <el-card :body-style="{ padding: '5px' }" style="cursor: pointer;" @click.native="routeTo(i)">
                                <img src="../../assets/logo.png" style="width: 100%;"  >
                                <el-row>
                                    <el-col :span="14">
                                        <span>商品名称{{i}}</span>
                                    </el-col>
                                    <el-col :span="10" style="text-align: right">
                                        <span style="color: red">￥ {{i}}.00</span>
                                    </el-col>
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
                        <el-button :plain="true" type="info" style="border: none;font-size: 20px">手办推荐</el-button>
                    </el-row>

                    <el-row>
                        <el-col :span="24" v-for="i in 5" style="padding: 0px 3px 3px 3px">
                            <el-card :body-style="{ padding: '3px' }" style="cursor: pointer;" @click.native="routeTo(i)">
                                <el-row>
                                    <el-col :span="8">
                                        <img src="../../assets/logo.png" style="width: 80%">
                                    </el-col>
                                    <el-col :span="16">
                                        <el-row>
                                            <span style="font-size: 16px;">手办名称</span>
                                        </el-row>
                                        <el-row style="padding-top: 5px">
                                            <span>手办描述：此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。</span>
                                        </el-row>
                                        <el-row style="position:absolute; bottom:0;right: 0">
                                            <span style="color: red">￥{{i}}.00</span>
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
                window.open("https://www.baidu.com")
            }
        }
    }
</script>

<style>

</style>
