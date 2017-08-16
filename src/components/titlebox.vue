<template>
    <li class="hxd_titlebox" @click="routeTo(1)">
        <span>第{{clauseId}}话 该话标题</span>
    </li>
</template>

<script>
    export default {
        props: ['clauseId'],
        components:{

        },
        data () {
            return {

            }
        },

        methods: {
            routeTo:function(pageId){
                this.$router.push({path: '/cartoonPage',query: { value: pageId }});
            }
        },
    }
</script>

<style>
    .hxd_titlebox {
        width: 85%;
        border: 1px solid #d8d8d8;
        line-height: 25px;
        height: 25px;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
    }
</style>
