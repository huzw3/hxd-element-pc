<template>
    <div>
        <img src="../../assets/logo.png">
        <h1>{{ msg }}</h1>
        <div>
            <el-button @click.native="routeTo" type="primary" size="large">提交offerA信息，并路由到info页面</el-button>
        </div>
        <div>
            <router-link :to="{ path: 'demo/info', query: { value: 'hzw' }}">路由到info页面</router-link>
        </div>
        <div>
            <el-button @click.native="routeTo2" type="primary" size="large">提交offerB信息，并路由到info页面</el-button>
        </div>
        <Demo></Demo>
    </div>
</template>

<script>
    import Vue from 'vue'

    import { Button } from 'element-ui'
    import  Demo from './demo.vue'

    import {mapGetters, mapActions} from 'vuex'
    import store from '../../store/demo/demo-store-index'

    Vue.component(Button.name, Button);

    export default {
        store,
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            "Demo" : Demo
        },
        methods: {
            ...mapActions([
                'setShopPage', 'setOffer'
            ]),
            routeTo () {
                var offerInst = {};
                offerInst.id = 1;
                offerInst.name = '销售品A';
                offerInst.phone = '12345677890';
                offerInst.shopId = 1;
                this.setOffer(offerInst);
                this.$router.push({path: '/demo/info',query: { value: 'hxd' }});
            },
            routeTo2 () {
                var offerInst = {};
                offerInst.id = 2;
                offerInst.name = '销售品B';
                offerInst.phone = '12345677891';
                offerInst.shopId = 2;
                this.setOffer(offerInst);
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
