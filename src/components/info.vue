<template>
    <div>
        info.vue
    </div>
</template>

<script>
    export default {
        data () {
            return {
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

