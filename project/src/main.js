import { createApp, defineAsyncComponent } from 'vue'
import './theme.css'

// App
import App from './app/App'
import './app/registerServiceWorker'
import router from './app/router'
import store from './app/store'

// course-3
// import App from "./course-3/App"
// import store from './course-3/store'
// import router from './course-3/router'

// 12 composition API
// import App from './compositionApi/App'
// import router from './compositionApi/router'
// import store from './compositionApi/store'

// 11 Vuex
// import App from './vuex/App'
// import store from './vuex/store'

// 10 router
// import App from './router/App'
// import router from './router/router'

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

// App
app.use(store)
app.use(router)

// course-3
// app.use(store)
// app.use(router)

// 12
// app.use(router)
// app.use(store)

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
