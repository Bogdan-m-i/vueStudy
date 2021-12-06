<template>
  <div class="card">
    <slot name="header">Empty header</slot>
    <slot>Empty slot</slot>
    <div v-if="$slots.footer">
      <slot name="footer">Empty header</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBlock'
}
</script>

<style scoped>

</style>
