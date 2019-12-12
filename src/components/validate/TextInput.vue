<template>
  <div>
    <ValidationProvider
      v-slot="{errors,failedRules}"
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
      <span
        v-if="failedRules.required"
        class="error"
      >{{ $t('FieldsRules.__field_require') }}
      </span>
      <span v-if="failedRules.email">{{ $t('FieldsRules.__email_validate') }}</span>
      <span v-if="failedRules.mobile">{{ $t('FieldsRules.__mobile_validate') }}</span>
      <span
        v-if="failedRules.min"
        class="error"
      >
        {{ minRules }}
      </span>
    </ValidationProvider>
    <span>{{ failedRules }}</span>
  </div>
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

    get minRules () {
      const str = this.$t('FieldsRules.__min_require') as string
      const re = /min:\d\d*/
      const rulesNum = this.rules.match(re)
      if (rulesNum) {
        const num = rulesNum[0].match(/\d+/) as RegExpMatchArray
        const minStr = str.replace('{}', num[0])
        return minStr
      }
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
