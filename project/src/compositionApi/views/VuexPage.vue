<template>
  <div class="card">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  import {useStore} from 'vuex'
  export default {
    name: "VuexPage",
    setup() {
      const store = useStore()

      return { title: store.getters.appTitle + ' !!' }
    }
  }
</script>

<style scoped>

</style>
