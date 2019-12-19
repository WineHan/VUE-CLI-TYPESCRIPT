import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import VuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'

import CustomFromGroup from '@/plugins/vuelidate/CustomFromGroup.vue'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VuelidateErrorExtractor, {
  template: CustomFromGroup,
  i18n: 'validation'
})

const vm = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)

}).$mount('#app')

export default vm
