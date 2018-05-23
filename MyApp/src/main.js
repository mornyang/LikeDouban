// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import Router from 'vue-router'
import VueLazyLoad from 'vue-lazyload'
import './assets/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '</App>',
  render: h => h(App)
})
