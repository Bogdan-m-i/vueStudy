<template>

  <h1 v-if="!tasksLength" class="text-white center">Задач пока нет</h1>

  <h3 v-else class="text-white">Всего активных задач: {{ tasksLength }}</h3>

  <CardTask v-for="task in tasks" :key="task.id" :task="task"/>

</template>

<script>
import {computed, toRef} from 'vue'
import {useStore} from 'vuex'
import CardTask from "../components/CardTask";

export default {
  setup() {
    const store = useStore()
    const tasks = computed(() => store.getters.tasks)
    const tasksLength = computed(() => tasks.value.length)

    store.dispatch('getTasks')

    return {
      tasks,
      tasksLength,
    }
  },
  components: {CardTask}
}
</script>
