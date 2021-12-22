import axios from 'axios'
import {error} from "../../utils/error";
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
      try {
        const {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`, {...payload, returnSecureToken: true})
        context.commit('setToken', data.idToken)
        await context.commit('clearMessage', null, {root:true})
      } catch (e) {
        await context.dispatch('setMessage', {
          value: error(e.response.data.error.message),
          type: 'danger'
        }, {root:true})

        console.log(error(e.response.data.error.message))
        throw new Error(e)
      }
    },
  }
}
