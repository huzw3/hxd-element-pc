import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path: '/', redirect: '/homePage' },
    { path: '/homePage', component: resolve => require(['./pages/homePage.vue'], resolve)},
    { path: '/catalogPage', component: resolve => require(['./pages/catalogPage.vue'], resolve)},
    { path: '/cartoonPage', component: resolve => require(['./pages/cartoonPage.vue'], resolve)},

    { path: '/demoPage', component: resolve => require(['./components/demo/demoPage.vue'], resolve)},
    { path: '/demo', component: resolve => require(['./components/demo/demo.vue'], resolve),
      children:[
        { path: 'info', component: resolve => require(['./components/demo/info.vue'], resolve) }
      ]
    },
  ]
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


