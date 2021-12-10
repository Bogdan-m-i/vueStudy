<template>
  <AppAlert @close="closeAlert" v-if="alert" title="work with composition" type="danger"/>

  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, computed, methods, watch</small>
    <hr>

    <div class="form-control">
      <input type="text" ref="textInput" placeholder="ref">
    </div>

    <div class="form-control">
      <input type="text" v-model="firstName" placeholder="v-model">
    </div>

    <button class="btn" @click="changeInfo">Изменить</button>
    <button class="btn danger" @click="toggleAlert">Alert</button>
  </div>

  <FrameworkInfo :name="name" :version="version" @change-version="changeVersion"/>
</template>

<script>
import { ref, reactive, toRefs, isRef, isReactive, computed, watch, provide, onBeforeUpdate } from 'vue'
import FrameworkInfo from "../FrameworkInfo";
import AppAlert from "../AppAlert";
import {useAlert} from "../use/alert";

export default {
  name: "HomePage",
  components: {FrameworkInfo, AppAlert},
  setup() {
    // const name = ref('VueJS')
    // const version = ref(2)
    const v = ref(3)
    const textInput = ref(null)
    const firstName = ref('')
    const textForProvide = ref('text provide!!!')

    const { alert, toggleAlert, closeAlert } = useAlert()

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

    function changeVersion() {
      framework.version = 3
    }

    onBeforeUpdate(() => console.log('onBeforeUpdate'))

    const doubleV = computed(() => v.value * 2)

    watch(doubleV, (newValue, oldValue) => { // можно передать массив [doubleV, otherRefs], тогда newValue и oldValue будут массивами
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    })

    watch(firstName, (newValue) => console.log('v-model firstName', newValue))

    provide('text', textForProvide)

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
      changeVersion,
      alert,
      closeAlert,
      toggleAlert,
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

<style scoped>

</style>
