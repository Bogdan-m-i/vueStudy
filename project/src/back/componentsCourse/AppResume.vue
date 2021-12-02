<template>
  <div class="card card-w70">

    <h3 v-if="!resumeParts.length">Добавьте первый блок, чтобы увидеть результат</h3>

    <component v-for="part in resumeParts" :is="'AppPart' + part.type">{{ part.val }}</component>

  </div>
</template>

<script>
  import AppPartTitle from "./resumeParts/AppPartTitle";
  import AppPartSubtitle from "./resumeParts/AppPartSubtitle";
  import AppPartText from "./resumeParts/AppPartText";
  import AppPartAvatar from "./resumeParts/AppPartAvatar";

  export default {
    name: "AppResume",
    props: ['resumeParts'],
    components: { AppPartAvatar, AppPartText, AppPartSubtitle, AppPartTitle },
    mounted() {
      console.log(this.resumeParts)
    }
  }
</script>

<style scoped>

</style>
