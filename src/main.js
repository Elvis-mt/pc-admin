import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons' // icon

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
