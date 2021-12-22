<template>
  <div class="filter">

    <div class="form-control">
      <input v-model="name" type="text" placeholder="Enter name..">
    </div>

    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Select status</option>
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn warning" v-if="isActive" @click="reset">Reset</button>

  </div>
</template>

<script>
  import {ref, watch, computed} from 'vue'

  export default {
    name: "RequestFilter",
    emits: ['update:modelValue'],
    props: ['modelValue'],
    setup(props, context) {
      const name = ref()
      const status = ref()

      watch([name, status], (values) => {
        context.emit('update:modelValue', {
          name: values[0],
          status: values[1]
        })
      })

      const isActive = computed(() => name.value || status.value)

      return {
        name, status, isActive,
        reset: () => { name.value = ''; status.value = null }
      }
    }
  }
</script>

<style scoped>

</style>
