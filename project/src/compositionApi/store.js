import {createStore} from "vuex"

export default createStore({
  state() {
    return {
      title: 'this is vuex + composition'
    }
  },
  getters: {
    appTitle(state) {
      return state.title.toUpperCase()
    }
  }
})
