import requestAxios from "../../axios/request";
import store from '../index'

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    }
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests
    },
    addRequest(state, request) {
      state.requests.push(request)
    }
  },
  actions: {
    async create(context, payload) {
      try {

        const token = store.getters['auth/token']
        const {data} = await requestAxios.post(`/requests.json?auth=${token}`, payload)

        context.commit('addRequest', {...payload, id: data.name})

        await context.dispatch('setMessage', {
          value: 'Request completed',
          type: 'primary'
        }, {root: true})

      } catch (e) {

        await context.dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root: true})

      }
    },
    async load(context) {
      try {

        const token = store.getters['auth/token']
        const {data} = await requestAxios.get(`/requests.json?auth=${token}`)

        const requests = Object.keys(data).map((k) => ({...data[k], id: k}))

        context.commit('setRequests', requests)

      } catch (e) {

        await context.dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root: true})

      }
    },
    async loadById(context, id) {
      try {

        const token = store.getters['auth/token']
        const {data} = await requestAxios.get(`/requests/${id}.json?auth=${token}`)

        if (data) return data

      } catch (e) {

        await context.dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root: true})

      }
    },
    async remove(context, id) {
      try {

        const token = store.getters['auth/token']
        await requestAxios.delete(`/requests/${id}.json?auth=${token}`)

        context.dispatch('setMessage', {
          value: 'Request removed',
          type: 'primary'
        }, {root: true})

      } catch (e) {

        await context.dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root: true})

      }
    },
    async update(context, payload) {
      try {

        const token = store.getters['auth/token']
        await requestAxios.put(`/requests/${payload.id}.json?auth=${token}`, payload.data)

        context.dispatch('setMessage', {
          value: 'Request updated',
          type: 'primary'
        }, {root: true})

      } catch (e) {

        await context.dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, {root: true})

      }
    }
  },
  getters: {
    requests(state) {
      return state.requests
    }
  }
}
