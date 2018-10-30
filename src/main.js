import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI)
router.afterEach(route => document.title = route.name)

const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
