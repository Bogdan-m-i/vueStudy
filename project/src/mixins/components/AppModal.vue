<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Modal header</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, labore?</p>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  emits: ['close']
}
</script>

<style scoped>

</style>
