import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import validator from './plugins/validator'

Vue.config.productionTip = false
Vue.use(validator)

const vm = new Vue({
  i18n,
  router,
  store,
  mounted: () => document.dispatchEvent(new Event('render-event')),
  render: h => h(App)
}).$mount('#app')

export default vm
