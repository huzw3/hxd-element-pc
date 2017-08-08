<template>
    <div >
        <el-button @click="startHacking">默认按钮</el-button>
        <!--<span>{{getOffer}}</span>-->
        <span>{{this.$store.state.demoState.offer}}</span>
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
        methods: {
            ...mapGetters([
                'getOffer','getHomePage'
            ]),
            startHacking () {
                alert(JSON.stringify(this.$store.state.demoState.offer))
            }
        }
    }
</script>

