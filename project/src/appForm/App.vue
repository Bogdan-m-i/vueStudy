<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>

      <AppInput v-model.trim="name" :error="errors.name" placeholder="Введите имя" label="Как тебя зовут"/>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input v-model.number="age" type="number" id="age" max="100">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select v-model="city" id="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input v-model="relocate" value="1" type="radio" name="trip"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input v-model="relocate" value="0" type="radio" name="trip"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input v-model="skills" name="skills" value="0" type="checkbox"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input v-model="skills" name="skills" value="1" type="checkbox"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input v-model="skills" name="skills" value="2" type="checkbox"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Все ок?</span>
        <div class="checkbox">
          <label><input v-model="agree" type="checkbox"/> ok</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
  import AppInput from "./AppInput";
  export default {
    name: "App",
    components: {AppInput},
    data() {
      return {
        name: '',
        age: 23,
        city: 'msk',
        relocate: '1',
        skills: [],
        agree: false,
        errors: {
          name: null
        }
      }
    },
    methods: {
      formIsValid() {
        let isValid = true

        if (!this.name.length) {
          isValid = false
          this.errors.name = 'Введите имя'
        } else {
          this.errors.name = null
        }

        return isValid
      },
      submitHandler() {
        if (this.formIsValid()) {
          console.group('form data')
          console.log('name', this.name)
          console.log('age', this.age)
          console.log('city', this.city)
          console.log('relocate', this.relocate)
          console.log('skills', this.skills)
          console.log('agree', this.agree)
          console.groupEnd()
        } else {
          console.warn('form is not valid')
        }
      }
    }
  }
</script>

<style scoped>
  .form-control small {
    color: #e53935;
  }
  .form-control.invalid input {
    border-color: #e53935;
  }
</style>
