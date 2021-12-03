<template>
    <div class="alert" :class="type">
      <p class="alert-title">{{ title }}</p>
      <p>{{ text }}</p>
      <button class="btn" :class="type" v-if="closable" @click="$emit('close')">Close</button>
    </div>
</template>

<script>
  export default {
    name: "AppAlert",
    emits: ['close'],
    props: {
      closable: {
        type: Boolean,
        required: false,
        default: false,
      },
      text: String,
      title: String,
      type: {
        type: String,
        required: false,
        default: 'primary',
        validator(val) {
          return ['primary', 'danger', 'warning'].includes(val)
        }
      }
    }
  }
</script>

<style scoped>

</style>
