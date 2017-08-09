<template>
    <div class="top-header">
        <el-row>
            <el-col :span="6">
                <img src="../assets/logo.png" style="height: 50px;float:right;padding-top: 5px"/>
            </el-col>
            <el-col :span="12">
                <el-menu style="background-color: white" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">在线漫画</el-menu-item>
                    <el-menu-item index="2">文章咨询</el-menu-item>
                    <el-menu-item index="3">在线动画</el-menu-item>
                    <el-menu-item index="4">商品周边</el-menu-item>
                    <el-submenu index="5">
                        <template slot="title">关于我们</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="6">加入我们</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="6">
                <div style="padding-top: 20px">
                    <el-button :plain="true" type="info" style="border: none;">登陆</el-button>
                    <el-button :plain="true" type="info" style="border: none;">注册</el-button>
                </div>
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

            }
        },

        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>

    .top-header{
        position: fixed;
        z-index: 999;
        background-color: white;
        width: 100%;
        box-shadow: 1px 1px 3px 0 #d3dce6;
    }

</style>
