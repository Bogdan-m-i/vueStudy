<template>
  <div class="card">
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }}</strong></p>
    <p>Версия * 2: <strong>{{ doubleV }}</strong></p>
    <p>{{ textFromProvide }}</p>

    <button class="btn warning" @click="changeToThree">go 3 v</button>
  </div>
</template>

<script>
  import {computed, inject} from 'vue'
export default {
  name: "FrameworkInfo",
  props: ['name', 'version'],
  emits: ['change-version'],
  // computed: {
  //   doubleV() {
  //     return this.version * 2
  //   }
  // }
  setup(props, context) {
    const doubleV = computed(() => props.version * 2)

    const textFromProvide = inject('text')

    function changeToThree() {
      context.emit('change-version', 3)
    }

    return {
      changeToThree,
      doubleV,
      textFromProvide
    }
  }
}
</script>

<style scoped>

</style>
