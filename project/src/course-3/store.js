import {createStore} from "vuex";

export default createStore({
  state() {
    return {
      tasks: [],
      task: {},
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    task(state) {
      return state.task
    }
  },
  mutations: { //methods
    pushTasks(state, payload) {
      state.tasks.push(payload)
    },
    setTasks(state, payload) {
      state.tasks = payload
    },
    setTask(state, payload) {
      state.task = {
        ...state.task,
        ...payload,
      }
    }
  },
  actions: { // async
    async editTask(context, payload) {
      if (!payload) return

      const data = {
        status: payload.status
      }

      const res = await fetch(`https://vue-with-http-bdec1-default-rtdb.europe-west1.firebasedatabase.app/tasks/${payload.id}.json`, { method: 'PATCH', body: JSON.stringify(data) })

      const firebaseData = await res.json()

      context.commit('setTask', data)

    },
    async getTask(context, payload) {

      if (!payload) return

      const res = await fetch(`https://vue-with-http-bdec1-default-rtdb.europe-west1.firebasedatabase.app/tasks/${payload}.json`, { method: 'GET' })

      const firebaseData = await res.json()

      context.commit('setTask', firebaseData)

      return firebaseData

    },
    async getTasks(context) {

      const res = await fetch('https://vue-with-http-bdec1-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', { method: 'GET' })

      const firebaseData = await res.json()

      const data = Object.entries(firebaseData).map(([key, val]) => ({...val, fbId: key}))

      if (firebaseData) context.commit('setTasks', data)

    },
    async addTask(context, payload) {

      if (!payload) return false

      try {

        payload.id = Date.now()
        payload.status = new Date(payload.deadline).getTime() - Date.now() > 0 ? 0 : 2

        const res = await fetch('https://vue-with-http-bdec1-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', { method: 'POST', body: JSON.stringify(payload) })
        const firebaseData = await res.json()
        if (firebaseData.name) context.commit('pushTasks', payload)

        return firebaseData.name

      } catch (e) {
        console.log(e.message)
        return false
      }

    }
  }
})
