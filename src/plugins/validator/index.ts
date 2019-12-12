import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'
export default {
  install (Vue:any) {
    Vue.component('ValidationProvider', ValidationProvider)
    Vue.component('ValidationObserver', ValidationObserver)

    extend('required', {
      ...required
    })

    extend('email', {
      ...email
    })

    extend('mobile', {
      validate: value => value.length === 10 && /^09\d{8}$/.test(value)
    })

    extend('min', {
      ...min
    })
  }
}
