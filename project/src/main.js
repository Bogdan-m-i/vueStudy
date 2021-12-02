import { createApp, defineAsyncComponent } from 'vue'
import './theme.css'

// 8 блок работа с БД
import App from "./back/App"

// 7 блок формы
// import App from './appForm/App'

// 6 блок компоненты
// import App from './components/App.vue'
// import TheHeader from "./components/TheHeader";


const app = createApp(App)

// app.component('the-header', TheHeader)
// app.component('async-component', defineAsyncComponent(() => { return import('./components/AppAsyncComponent') }))
app.mount('#app')
