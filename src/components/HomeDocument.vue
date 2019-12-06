<template>
  <div>
    <h1>This is an initialization template created using typescript in vue </h1>
    <h2>initial plugins</h2>
    <ul>
      <li>i18n</li>
      <li>vee-validate</li>
      <li>axios</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HomeDocument extends Vue {
  @Prop() private msg!: string
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
</style>
