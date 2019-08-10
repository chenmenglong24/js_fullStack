<template>
  <div>
    <button class="el-button" :disabled="buttonDisabled ? 'disabled' : ''" 
            :class="[type ? 'el-button--' + type : '', 
                     size ? 'el-button--' + size : '',
                     {'is-disabled': buttonDisabled}
                     ]"
      @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      string: String,
      default: 'default'
    },
    size: String,
    disabled: Boolean
  },
  computed: {
    buttonDisabled () {
      return this.disabled
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('clickBtn', evt);
    }
  }
}
</script>

<style>

</style>
