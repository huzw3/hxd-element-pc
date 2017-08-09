<template>
    <div >
        <div>
            <el-button @click="startHacking">默认按钮</el-button>
        </div>
        <div>
            <span>使用this.$store方式取值：</span>  <span>{{this.$store.state.demoState.offer}}</span>
        </div>
        <div>
            <span>使用mapGetters方式取值：</span>  <span>{{this.offer}}</span>
        </div>
    </div>
</template>

<script>
    import store from '../../store/demo/demo-store-index'
    import { mapGetters } from 'vuex'

    export default {
        store,
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            ...mapGetters({
                offer:'getOffer',
                homePage:'getHomePage'
            })
        },
        methods: {
            startHacking () {
                alert(JSON.stringify(this.offer))
            }
        }
    }
</script>

