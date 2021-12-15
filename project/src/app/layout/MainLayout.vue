<template>
  <TheNavbar/>
  <div class="container with-nav">
    <RouterView/>
  </div>
</template>

<script>
  import TheNavbar from "../components/TheNavbar";
  export default {
    name: "MainLayout",
    components: {TheNavbar}
  }
</script>

<style scoped>

</style>
