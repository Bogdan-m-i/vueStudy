<template>
  <form class="card" @submit.prevent="createNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="newTask.name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="newTask.deadline">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="newTask.description"></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>


<script>
import { useStore, mapActions } from 'vuex'
import {useRouter} from 'vue-router'
import { reactive, toRefs, toRef } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const newTask = reactive({
      name: '',
      deadline: '',
      description: '',
    })
    const store = useStore()

    async function createNewTask() {
      const res = await store.dispatch('addTask', {...newTask})

      if (res) router.push('/task/' + res)

      // newTask.name = ''
      // newTask.deadline = ''
      // newTask.description = ''
    }

    return {
      newTask,
      createNewTask
    }
  }
}
</script>
