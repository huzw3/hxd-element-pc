<template>
    <div class="bottom-footer">
        <el-row>
            <span style="font-size: small">
                Copyright © 2016 <span style="color: orangered">学弟漫画网</span>, All rights reserved。
            </span>
        </el-row>
        <el-row style="font-size: small">
            <span>
                本站声明:网站部分内容来自网络,如有侵权请联系我们 <span style="color: orangered">cup@hxd.com</span> ,我们将及时处理!
            </span>
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

        }
    }
</script>

<style>

    .bottom-footer {
        position: fixed;
        bottom: 0;
        z-index: 999;
        background-color: #1e1e22;
        width: 100%;
        height: 40px;
        text-align: center;
        vertical-align: middle;
        padding: 10px;
    }

</style>
