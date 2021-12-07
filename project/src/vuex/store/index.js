import { createStore } from 'vuex'
import counter from "./modules/counter";

export default createStore({
  modules: {counter},
  state() {
    return {
      title: 'Vuex is work'
    }
  },
  getters: {
    titleUp(state) {
      return state.title.toUpperCase()
    }
  }
})
