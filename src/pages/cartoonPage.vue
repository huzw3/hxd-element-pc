<template>
    <div style="padding-top: 65px">
        <el-row>
            <el-col :span="18">
                <el-row style="padding: 20px">
                    <li class="hxd_titleboxBig">
                        <span>一拳超人 第 120 话 无限连招</span>
                    </li>
                </el-row>
                <el-row v-for="i in 4" style="padding-left: 20px">
                    <img src="../assets/logo.png" style="width: 100%">
                </el-row>
            </el-col>
            <el-col :span="6">
                <el-row>
                    <el-card :body-style="{ padding: '5px' }" class="hxd_comment">
                        <el-row>
                            <el-button :plain="true" type="info" style="border: none;font-size: 20px">评论</el-button>
                        </el-row>
                        <el-row>
                            <el-card :body-style="{ padding: '5px' }">
                                <el-row v-for="i in 9" style="padding-bottom: 5px">
                                    <span style="color: #20a0ff;font-size: small">用户名 : </span>
                                    <span style="font-size: small;">一拳超人 第 120 话 无限连招 第啊120话 无限连招 一拳超人 </span>
                                </el-row>
                                <el-row style="text-align: center">
                                    <el-pagination
                                            small
                                            layout="prev, pager, next"
                                            :total="50">
                                    </el-pagination>
                                </el-row>
                            </el-card>
                        </el-row>
                        <el-row style="position:absolute;padding-top: 10px">
                            <el-col :span="18">
                                <el-input></el-input>
                            </el-col>
                            <el-col :span="6">
                                <div style="padding-left: 2px">
                                    <el-button>评论</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-row>
            </el-col>
        </el-row>
    </div>
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
    .hxd_titleboxBig {
        width: 100%;
        border: 1px solid #d8d8d8;
        line-height: 50px;
        height: 50px;
        vertical-align: middle;
        text-align: center;
        font-size: 30px;
    }

    .hxd_comment{
        position: fixed;
        top:85px;
        right: 20px;
        width:20%;
        height:80%;
    }


</style>