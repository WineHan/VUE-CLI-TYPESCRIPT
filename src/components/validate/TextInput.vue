<template>
  <ValidationProvider
    v-slot="{errors}"
    tag="div"
    :rules="rules"
  >
    <h4>{{ text }}</h4>
    <input
      v-model="observeValue"
      type="text"
      :name="name"
      :placeholder="text"
    >
    <span class="error">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script lang="ts">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  text-align: center;
  font-weight: 700;
  margin: 10px 0px;
}
a {
  color: #42b983;
}
.error{
  color: red;
  padding-left: 10px;
}
</style>
