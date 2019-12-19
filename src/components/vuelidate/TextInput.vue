<template>
  <form-group
    :validator="v"
    label="Email"
  >
    <input
      v-model="val"
      type="email"
      class="input"
      placeholder="user@yahoo.com"
      @input="v.$touch()"
    >
  </form-group>
</template>

<script >
export default {
  name: 'TextInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }

  }

}
</script>

<style></style>
