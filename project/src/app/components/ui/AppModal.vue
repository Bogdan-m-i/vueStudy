<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal">
      <h3 v-if="title">{{title}}</h3>

      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppModal",
    emits: ['close'],
    props: {
      title: {
        type: String,
      }
    }
  }
</script>

<style lang="scss">
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.5s ease;

    .modal {
      transition: top 0.5s ease;
    }
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;

    .modal {
      top: -150px
    }
  }
</style>
