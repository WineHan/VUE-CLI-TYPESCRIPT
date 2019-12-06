import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as tw from './locales/tw-lang'
import * as en from './locales/en-lang'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'tw',
  messages: {
    tw,
    en
  }
})

export default i18n
