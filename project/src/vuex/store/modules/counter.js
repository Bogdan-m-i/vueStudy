export default {
  namespaced: true,
  state() {
    return {
      counter: 1,
    }
  },
  mutations: { // methods
    inc(state, payload) {
      state.counter += payload || 1
    }
  },
  getters: { // data()
    counter(state) {
      if (state.counter > 10) return state.counter + '!'
      return state.counter
    },
    doubleCounter(state, getters) {
      return state.counter * 2
    }
  },
  actions: { // async methods
    incAsync(context, payload) { // { commit } - возможная запись вместо context
      setTimeout(() => {
        context.commit('inc', payload || 10)
      }, 500)
    }
  }
}
