<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/">Back home</router-link>
  </div>
  <div class="card">
    <h1 class="card-title">
      {{title}}
      <slot name="header"/>
    </h1>

    <slot/>
  </div>
</template>

<script>
  export default {
    name: "AppPage",
    props: {
      title: {
        type: String,
        required: true,
      },
      back: {type: Boolean}
    },
    setup(props) {
      document.title = `${props.title} | App`
    }
  }
</script>

<style scoped>

</style>
