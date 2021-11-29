// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  template: `
    <div class="card">
      <h1>План по изучению Vue.js</h1>

      <div class="steps">
        <div class="steps-content">
          {{ steps[activeIndex].text }}
        </div>
        <ul class="steps-list">

          <li 
            v-for="(item, i) in steps" 
            :class="['steps-item', {'active': activeIndex == i}, {'done': i < activeIndex}]" 
            :key="item"
          ><span @click="setActive(i)">{{ i+1 }}</span> {{ item.title }}</li>

        </ul>
        <div v-if="!done">
          <button class="btn" @click="prev" :disabled="backDisabled">Назад</button>
          <button class="btn primary" @click="nextOfFinish">{{ lastStep ? 'Завершить' : 'Вперед' }}</button>
        </div>
        <div v-else>
            <button class="btn" @click="reset">Начать заного</button>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      done: false,
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
        {title: 'test', text: 'lorem'},
      ]
    }
  },
  methods: {
    prev() {
      this.activeIndex = this.activeIndex == 0 ? 0 : this.activeIndex - 1
    },
    reset() {
      this.done = false
      this.activeIndex = 0
    },
    nextOfFinish() {
      this.lastStep ? this.done = true : this.activeIndex++
    },
    setActive(idx) {
      this.activeIndex = idx
    }
  },
  computed: {
    backDisabled() {
      return this.activeIndex === 0
    },
    lastStep() {
      return this.activeIndex === this.steps.length - 1
    },
  },
  beforeUpdate() {
    console.log(this.activeIndex + ' ' + this.lastStep)
  }
}

Vue.createApp(App).mount('#app')