<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HomeDocument msg="Welcome to Your Vue.js App" />
    <br>
    <I18nDocument />
    <ValidationObserver
      v-slot="{handleSubmit}"
      tag="div"
    >
      <h2>
        {{ currentStep.title }}
      </h2>
      <form @submit.prevent="handleSubmit(nextStep)">
        <component
          :is="field.type"
          v-for="field in currentStep.fields"
          :key="field.name"
          v-model="field.value"
          :name="field.name"
          :text="field.text"
          :rules="field.rules"
        />
        <br>
        <div>
          <button
            v-if="step!==0"
            type="button"
            @click="step--"
          >
            上一步
          </button>
          <button
            type="submit"
          >
            {{ isLastStep? "送出": "下一步" }}
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeDocument from '@/components/HomeDocument.vue'
import I18nDocument from '@/components/I18nDocument'
import TextInput from '../components/validate/TextInput'
import GenderInput from '../components/validate/GenderInput'

export default {
  name: 'Home',
  components: {
    HomeDocument,
    I18nDocument,
    TextInput,
    GenderInput
  },
  data () {
    return {
      step: 0,
      steps: [
        { title: '基本資料',
          fields: [
            { type: 'TextInput', name: 'username', text: '使用者名稱', rules: 'required', value: '' },
            { type: 'GenderInput', name: 'gender', text: '性別', rules: 'required', value: '0' }
          ]
        }, {
          title: '聯絡資料',
          fields: [
            { type: 'TextInput', name: 'email', text: '電子郵件', rules: 'required|email', value: '' },
            { type: 'TextInput', name: 'mobile', text: '手機', rules: 'required|mobile', value: '' }
          ]
        }
      ]
    }
  },
  computed: {
    currentStep () {
      return this.steps[this.step]
    },
    isLastStep () {
      return this.step === this.steps.length - 1
    },
    formData () {
      return this.steps.reduce((prev, current) => {
        current.fields.forEach(field => {
          prev[field.name] = field.value
        })
        return prev
      }, {})
    }
  },
  methods: {
    submit () {
    },
    nextStep () {
      if (this.isLastStep) {
        this.submit()
      } else {
        this.step++
      }
    }
  }

}
</script>
