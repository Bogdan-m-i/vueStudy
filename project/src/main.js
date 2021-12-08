import { createApp, defineAsyncComponent } from 'vue'
import './theme.css'

// 12 composition API
import App from './compositionApi/App'

// 11 Vuex
// import App from './vuex/App'
// import store from './vuex/store'

// 10 router
// import App from './router/App'
import router from './router/router'

// 9 Миксины директивы плагины
// import App from './mixins/App'
import translatePlugin from './mixins/translatePlugin'

// 8 блок работа с БД
// import App from "./back/App"

// 7 блок формы
// import App from './appForm/App'

// 6 блок компоненты
// import App from './components/App.vue'
// import TheHeader from "./components/TheHeader";

const app = createApp(App)

// 11
// app.use(store)

// 10
// app.use(router)

// Глобальный плагин
// const ru = {
//   app: {
//     title: 'Плагины во Vue',
//   }
// }
// const en = {
//   app: {
//     title: 'Plugins in Vue',
//   }
// }
// app.use(translatePlugin, {
//   ru,
//   en
// })

// Глобальная директива v-focus
// app.directive('focus', {
//   mounted(el) {
//     console.log(el)
//     el.focus()
//   }
// })

// Глобальный миксин
// app.mixin({
//  data() {
//    return {}
//  }
// })

// app.component('the-header', TheHeader)
// app.component('async-component', defineAsyncComponent(() => { return import('./components/AppAsyncComponent') }))
app.mount('#app')
