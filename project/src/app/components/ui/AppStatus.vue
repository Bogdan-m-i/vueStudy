<template>
  <span class="badge" :class="className">{{text}}</span>
</template>

<script>
  import {ref, watch} from 'vue'

  export default {
    name: "AppStatus",
    props: {
      type: {
        type: String,
        required: true,
        validate(val) {
          return ['active', 'cancelled', 'done', 'pending'].includes(val)
        }
      }
    },
    setup(props) {
      const classesMap = {
        active: 'primary',
        cancelled: 'danger',
        done: 'primary',
        pending: 'warning',
      }
      const textMap = {
        active: 'Active',
        cancelled: 'Cancelled',
        done: 'Done',
        pending: 'Pending',
      }

      const className = ref(classesMap[props.type])
      const text = ref(textMap[props.type])

      watch(props, (val) => {
        className.value = classesMap[val.type]
        text.value = textMap[val.type]
      })

      return {
        className,
        text,
      }
    }
  }
</script>

<style scoped>

</style>
