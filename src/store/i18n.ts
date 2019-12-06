import { ActionContextBasic } from '@/models/interfaces/i18n'
import { SupportedLanguage } from '@/models/status/i18n'
import vm from '../main'

const SET_LANG = 'SET_LANG'

const actions = {
  SET_LANG (context: ActionContextBasic, locale: SupportedLanguage) {
    context.commit(SET_LANG, locale)
  }
}

const mutations = {
  [SET_LANG] (state: any, locale: SupportedLanguage) {
    vm.$i18n.locale = locale
  }
}

export default {
  namespaced: true,
  actions,
  mutations
}
