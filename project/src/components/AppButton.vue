<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['action'],
  props: {
    color: {
      type: String,
      default: '',
      validator (val) {
        return ['', 'primary', 'danger'].includes(val)
      }
    }
  },
  methods: {
    btnLog () {
      console.log('btn log')
    }
  }
}
</script>

<style scoped>

</style>
