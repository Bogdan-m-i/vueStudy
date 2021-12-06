<template>
  <li class="list-item">
    <div>
      <p><strong>{{ comment.email }}</strong></p>
      <small>{{ comment.body }}</small>
    </div>
  </li>
</template>

<script>
export default {
  name: 'AppComment',
  props: ['comment']
}
</script>

<style scoped>

</style>
