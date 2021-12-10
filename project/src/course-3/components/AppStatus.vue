<template>
  <span class="badge" :class="statusClass">{{ statusName }}</span>
</template>

<script>
  import {computed} from 'vue'
  export default {
    props: ['status'],
    setup(props) {
      const statusClass = computed(() => {
        if (props.status === 0) return 'primary'
        if (props.status === 1) return 'primary'
        if (props.status === 2) return 'danger'
        if (props.status === 3) return 'warning'
      })
      const statusName = computed(() => {
        if (props.status === 0) return 'Активен'
        if (props.status === 1) return 'Завершен'
        if (props.status === 2) return 'Отменен'
        if (props.status === 3) return 'В работе'
      })

      return {
        statusClass,
        statusName
      }
    }
  }
</script>
