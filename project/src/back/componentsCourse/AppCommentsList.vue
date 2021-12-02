<template>
  <div class="card">
    <h2>Комментарии ({{ comments.length }})</h2>
    <ul class="list">

      <AppComment v-if="comments" v-for="comment in comments" :key="comment.id" :comment="comment"/>
      <h3 v-else>Комментариев нет</h3>

    </ul>
  </div>
</template>

<script>
  import AppComment from "./AppComment";
  export default {
    name: "AppCommentsList",
    props: ['comments'],
    components: {AppComment}
  }
</script>

<style scoped>

</style>
