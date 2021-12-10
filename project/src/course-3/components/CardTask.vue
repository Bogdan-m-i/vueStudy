<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.name }}
      <AppStatus :status="task.status"/>
    </h2>
    <p>
      <strong>
        <small>
          {{ task.deadline }}
        </small>
      </strong>
    </p>
    <router-link :to="'/task/' + task.fbId" custom v-slot="{navigate}">
      <button class="btn primary" @click="navigate">Посмотреть</button>
    </router-link>
  </div>
</template>

<script>
  import {computed} from 'vue'
  import AppStatus from '../components/AppStatus'

  export default {
    name: "CardTask",
    props: ['task'],
    components: {AppStatus},
    setup() {

    }
  }
</script>

<style scoped>

</style>
