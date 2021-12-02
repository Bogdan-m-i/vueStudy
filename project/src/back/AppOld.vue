<template>
  <div class="container">

    <AppAlert :alert="alert" @close="alert = null"/>

    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с БД</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="!name.length">Создать</button>
    </form>

    <AppLoader v-if="loading"/>

    <AppPeopleList v-else :people="people" @load="loadPeople" @remove="removePers"/>

  </div>
</template>

<script>
  import AppPeopleList from "./AppPeopleList";
  import AppAlert from "./AppAlert";
  import AppLoader from "./AppLoader";

  export default {
    name: "App",
    components: {AppLoader, AppAlert, AppPeopleList },
    data() {
      return {
        name: '',
        people: [],
        alert: null,
        loading: false,
      }
    },
    mounted() {
      this.loadPeople()
    },
    methods: {
      url(param = null) {
        if (param) return `https://vue-with-http-bdec1-default-rtdb.europe-west1.firebasedatabase.app/people/${param}.json`
        return `https://vue-with-http-bdec1-default-rtdb.europe-west1.firebasedatabase.app/people.json`
      },
      async createPerson() {

        const res = await fetch(this.url(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstName: this.name })
        })

        const firebaseData = await res.json()
        console.log('createPerson', firebaseData)

        this.people.push({ firstName: this.name, id: firebaseData.name })
        this.name = ''
        // this.loadPeople()
      },
      async loadPeople() {

        try {

          this.loading = true

          const res = await fetch(this.url(), { method: 'GET' })

          const firebaseData = await res.json()
          console.log('loadPeople', firebaseData)
          if (!firebaseData) throw new Error('Список людей пуст')

          this.people = Object.keys(firebaseData).map((el) => {
            return {
              id: el,
              // firstName: firebaseData[el].firstName,
              ...firebaseData[el]
            }
          })

          this.loading = false

        } catch (e) {
          this.alert = {
            type: 'danger',
            title: 'Error',
            text: e.message,
          }
          this.loading = false
        }

      },
      async removePers(id) {

        try {

          const res = await fetch(this.url(id), { method: 'DELETE' })

          const firebaseData = await res.json()
          console.log('removePers', firebaseData)

          let nameForAlert

          this.people = this.people.filter((el) => {
            if (el.id !== id) {
              return true
            } else {
              nameForAlert = el.firstName
            }
          })

          this.alert = {
            type: 'primary',
            title: 'Успешно',
            text: `Пользователь ${nameForAlert} был удален`
          }

        } catch (e) {
          this.alert = {
            type: 'danger',
            title: 'Error',
            text: e.message,
          }
        }

      }
    }
  }
</script>

<style scoped>

</style>
