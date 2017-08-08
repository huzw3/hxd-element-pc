<template>
    <div>
        index.vue
        <el-switch v-model="value1" on-text="" off-text=""></el-switch>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Switch } from 'element-ui'
    Vue.component(Switch.name, Switch)

    export default {
        data () {
            return {
                value1: true,
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            startHacking () {
                this.$toast('It Works!')
            }
        }
    }
</script>

