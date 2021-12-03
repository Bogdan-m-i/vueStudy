<template>
  <div class="container column">

    <AppForm @add="addPart"/>

    <AppResume :resumeParts="resumeParts"/>

  </div>

  <div class="container">
    <p v-if="!comments">
      <app-button color="primary" @tuk="getComments">Загрузить комментарии</app-button>
    </p>

    <AppCommentsList v-if="comments" :comments="comments"/>

    <AppLoader v-if="loading"/>
  </div>
</template>

<script>
  import AppLoader from "./AppLoader";
  import AppCommentsList from "./componentsCourse/AppCommentsList";
  import AppButton from "./componentsCourse/AppButton";
  import AppForm from "./componentsCourse/AppForm";
  import AppResume from "./componentsCourse/AppResume";
  export default {
    name: "App",
    components: {AppResume, AppForm, AppButton, AppCommentsList, AppLoader},
    data() {
      return {
        urlComments: 'https://jsonplaceholder.typicode.com/comments?_limit=12',
        loading: false,
        comments: null,
        resumeParts: [],
      }
    },
    methods: {
      async addPart(type, val) {

        try {

          const res = await fetch(this.urlResume(), { method: 'POST', body: JSON.stringify({type, val}) })

          this.resumeParts.push({type, val, id: res.name})

        } catch (e) {
          console.log(e.message)
        }

      },
      async loadParts() {

        try {

          const res = await fetch(this.urlResume(), { method: 'GET' })

          const firebaseData = await res.json()

          this.resumeParts = Object.keys(firebaseData).map((el) => {
            return {
              id: el,
              ...firebaseData[el]
            }
          })

          console.log(this.resumeParts)

        } catch (e) {
          console.log(e.message)
        }

      },
      async getComments() {

        try {

          this.loading = true

          const res = await fetch(this.urlComments, { method: 'GET' })

          this.comments = await res.json()

          this.loading = false

        } catch (e) {
          console.log(e.message)
        }

      },
      urlResume(param = null) {
        if (param) return `https://vue-with-http-bdec1-default-rtdb.europe-west1.firebasedatabase.app/resume/${param}.json`
        return `https://vue-with-http-bdec1-default-rtdb.europe-west1.firebasedatabase.app/resume.json`
      },
    },
    mounted() {
      this.loadParts()
    }
  }
</script>

<style>

</style>
