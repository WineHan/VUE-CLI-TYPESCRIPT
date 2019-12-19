<template>
  <form-group
    :validator="v"
    label="radio"
  >
    <label for="man">man
      <input
        id="man"
        v-model="val"
        type="radio"
        value="man"
        @change="v.$touch"
      >
    </label>
    <label for="woman">woman
      <input
        id="woman"
        v-model="val"
        type="radio"
        value="woman"
        @change="v.$touch"
      >
    </label>
  </form-group>
</template>

<script>
export default {
  name: 'RadipInput',
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

<style>

</style>
