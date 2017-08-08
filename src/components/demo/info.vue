<template>
    <div>
        info.vue
    </div>
</template>

<script>
    import store from '../../store/demoStore'

    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            startHacking () {
                this.$toast(JSON.stringify(123))
            }
        }
    }
</script>

