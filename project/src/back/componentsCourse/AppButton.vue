<template>
  <button class="btn" :class="color" :disabled="dis" @click="$emit('tuk')">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: "AppButton",
    props: ['color', 'dis'],
    emits: ['tuk'],
  }
</script>

<style scoped>

</style>
