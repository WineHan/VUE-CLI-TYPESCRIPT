import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import { params } from 'vee-validate/dist/types/rules/alpha'

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

    extend('min-charts', {
      validate: (value, args) => value.length >= args.length,
      params: ['length'],
      message: '請輸入最少 {length} 個字'
    })

    extend('minmax-charts', {
      validate: (value, { min, max }:any) => value.length >= min && value.length <= max,
      params: ['min', 'max'],
      message: '請輸入 {min} 到 {max} 個字'
    })
  }
}
