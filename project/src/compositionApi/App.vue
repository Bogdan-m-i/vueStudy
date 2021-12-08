<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, computed, methods, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }}</strong></p>
      <p>Версия * 2: <strong>{{ doubleV }}</strong></p>

      <div class="form-control">
        <input type="text" ref="textInput" placeholder="ref">
      </div>

      <div class="form-control">
        <input type="text" v-model="firstName" placeholder="v-model">
      </div>

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, isRef, isReactive, computed, watch } from 'vue'
export default {
  setup() {
    // const name = ref('VueJS')
    // const version = ref(2)
    const v = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    const framework = reactive({ // реактивный объект
      name: 'VueJS',
      version: 2,
    })

    function changeInfo() {
      framework.name = framework.name + '!'
      framework.version += 1
      v.value = v.value * 2

      textInput.value.style.borderColor = 'darkred'
      textInput.value.value = 'woow'
      console.log(textInput.value)
    }

    const doubleV = computed(() => v.value * 2)

    watch(doubleV, (newValue, oldValue) => { // можно передать массив [doubleV, otherRefs], тогда newValue и oldValue будут массивами
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    })

    watch(firstName, (newValue) => console.log('v-model firstName', newValue))

    return {
      // name,
      // version,
      // name: framework.name, //not work
      // version: framework.version, //not work
      ...toRefs(framework),
      framework,
      changeInfo,
      doubleV,
      textInput,
      firstName,
    }
  }
  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo() {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>
