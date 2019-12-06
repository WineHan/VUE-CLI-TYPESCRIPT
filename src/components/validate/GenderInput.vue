<template>
  <ValidationProvider
    v-slot="{errors}"
    tag="div"
    :rules="rules"
  >
    <h4>{{ text }}</h4>
    <p>
      <input
        v-model="observeValue"
        type="radio"
        :name="name"
        value="0"
      >女生
    </p>
    <p>
      <input
        v-model="observeValue"
        type="radio"
        :name="name"
        value="1"
      >男生
    </p>
    <span class="error">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script lang="ts" >
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class TextInput extends Vue {
    @Prop() readonly value!:any
    @Prop(String) readonly name!:string
    @Prop(String) readonly text!:string
    @Prop(String) readonly rules!:string

    get observeValue () {
      return this.value
    }

    set observeValue (value) {
      this.$emit('input', value)
    }
}
</script>

<style>

</style>
