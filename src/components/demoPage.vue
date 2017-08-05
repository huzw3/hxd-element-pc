<template>
    <div>
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <el-button @click.native="routeTo" type="primary" size="large">Start</el-button>
        <router-link :to="{ path: 'demo', query: { value: 'hzw' }}">demo</router-link>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Button } from 'element-ui'
    Vue.component(Button.name, Button);

    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
//            startHacking () {
//                this.$toast('It Works!')
//            },
            routeTo () {
                this.$router.push({path: '/demo/info',query: { value: 'hxd' }});
            },
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
