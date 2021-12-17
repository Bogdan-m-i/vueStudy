const TOKEN_KEY = 'jwt-token'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    }
  },
  getters: {
    token(state) {
      return state.token
    },
    isAuth(state) {
      return !!state.token
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    logout(state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  },
  actions: {
    async login(context, payload) {
      context.commit('setToken', 'TEST TOKEN')
    },
  }
}
