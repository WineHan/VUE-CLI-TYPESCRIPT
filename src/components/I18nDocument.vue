<template>
  <div class="about">
    <h1>{{ $t('Index.__index_button') }}</h1>

    <button
      type="button"
      @click="switchLanguage"
    >
      {{ $t('Index.__switch_button') }}
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { State, Action, Getter, namespace } from 'vuex-class'
import { SupportedLanguage } from '@/models/status/i18n'
const i18nModule = namespace('i18n')

@Component({})
export default class About extends Vue {
@Action('i18n/SET_LANG') private changeLocale!:any

switchLanguage () {
  this.$i18n.locale === SupportedLanguage.TraditionalChinese
    ? this.changeLocale(SupportedLanguage.English)
    : this.changeLocale(SupportedLanguage.TraditionalChinese)
}
}
</script>
