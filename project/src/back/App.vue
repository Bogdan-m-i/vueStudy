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
      addPart(type, val) {
        this.resumeParts.push({type, val})
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

      }
    }
  }
</script>

<style>

</style>
