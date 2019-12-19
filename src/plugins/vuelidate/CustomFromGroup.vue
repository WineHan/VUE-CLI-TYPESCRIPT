<template>
  <div
    class="form-group "
    :class="{ error: hasErrors }"
  >
    <slot />
    <div
      v-if="hasErrors"
      class="errors"
    >
      <div
        v-for="error,index in activeErrorMessages"
        :key="index"
        class="error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor'

export default {
  mixins: [singleErrorExtractorMixin]
}
</script>

<style lang="scss">
.error{
    color:red;
}
</style>
