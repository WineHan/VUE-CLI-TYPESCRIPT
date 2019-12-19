<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HomeDocument msg="Welcome to Your Vue.js App" />
    <br>
    <I18nDocument />
    <br>
    <TextInput
      v-model="email"
      :v="$v.email"
    />
    <RadioInput
      v-model="gender"
      :v="$v.gender"
    />
  </div>
</template>

<script>
import HomeDocument from '@/components/HomeDocument.vue'
import I18nDocument from '@/components/I18nDocument'
import TextInput from '../components/vuelidate/TextInput'
import RadioInput from '../components/vuelidate/RadioInput'
import { required, minLength, between, sameAs, email } from 'vuelidate/lib/validators'

export default {
  name: 'Home',
  components: {
    HomeDocument,
    I18nDocument,
    TextInput,
    RadioInput
  },
  data () {
    return {
      step: 0,
      email: '',
      gender: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    gender: {
      required
    }
  }

}
</script>
