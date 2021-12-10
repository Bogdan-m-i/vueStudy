<template>
  <AppAlert @close="closeAlert" v-if="alert" title="work with composition" type="primary"/>

  <div class="card">
    <h1>reusable</h1>

    <button class="btn primary" @click="toggleAlert">{{ alert ? 'close message' : 'show message' }}</button>
    <button class="btn" @click="goHome">go home</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import AppAlert from "../AppAlert";
import {useAlert} from "../use/alert";

export default {
  name: "ReusablePage",
  components: {AppAlert},
  setup() {
    const router = useRouter()
    const route = useRoute()

    const { alert, toggleAlert, closeAlert } = useAlert(true)

    console.log(route.path)

    const goHome = () => router.push('/')

    return {
      goHome,
      alert,
      toggleAlert,
      closeAlert,
    }
  },
}
</script>

<style scoped>

</style>
