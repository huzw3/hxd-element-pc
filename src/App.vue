<template>
  <div id="app">
    <hxd-header></hxd-header>
    <router-view></router-view>
    <hxd-footer style="position: static"></hxd-footer>
  </div>
</template>
<script>
  import  hxdFooter from './components/footer.vue'
  import  hxdHeader from './components/header.vue'

  export default {
    components:{
      "hxd-header" : hxdHeader,
      "hxd-footer":hxdFooter
    }
  }
</script>
<style>
  .el-carousel__item {
    text-align: center;
    vertical-align: middle;
  }
  img {
    cursor: pointer;
  }
</style>



