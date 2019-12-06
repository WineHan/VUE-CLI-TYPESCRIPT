import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

export default {
  install (Vue:any) {
    Vue.component('ValidationProvider', ValidationProvider)
    Vue.component('ValidationObserver', ValidationObserver)

    extend('required', {
      ...required,
      message: '必填'
    })

    extend('email', {
      ...email,
      message: '請輸入正確格式'
    })

    extend('mobile', {
      validate: value => value.length === 10 && /^09\d{8}$/.test(value),
      message: '請輸入正確格式'
    })
  }
}
