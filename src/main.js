import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

router.afterEach(route => document.title = route.name)

const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
