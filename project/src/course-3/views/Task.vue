<template>
  <div class="card" v-if="task.id">
    <h2>{{task.name}}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status"/> ({{task.status}})</p>
    <p><strong>Дэдлайн</strong>: {{ task.deadline }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeStatus(3)">Взять в работу</button>
      <button class="btn primary" @click="changeStatus(1)">Завершить</button>
      <button class="btn danger" @click="changeStatus(2)">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{$props.id}}</strong> нет.
  </h3>
</template>

<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {computed, ref, onMounted} from 'vue'
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  props: ['id'],
  setup(props) {
    const store = useStore()

    store.dispatch('getTask', props.id)

    const task = computed(() => store.getters.task)
    
    function changeStatus(status) {
      store.dispatch('editTask', {id: props.id, status})
      task.status = status
    }

    return {
      task,
      changeStatus
    }
  }
}
</script>

<style scoped>

</style>
