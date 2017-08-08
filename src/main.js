import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path: '/', redirect: '/homePage' },
    { path: '/demoPage', component: resolve => require(['./components/demo/demoPage.vue'], resolve)},
    { path: '/demo', component: resolve => require(['./components/demo/demo.vue'], resolve),
      children:[
        { path: 'info', component: resolve => require(['./components/demo/info.vue'], resolve) }
      ]
    },
    { path: '/homePage', component: resolve => require(['./components/homePage.vue'], resolve)},
  ]
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


