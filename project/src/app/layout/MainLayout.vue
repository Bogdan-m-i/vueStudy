<template>
  <TheNavbar/>
  <TheSidebar/>
  <div class="container with-nav">
    <AppMessage/>
    <RouterView/>
  </div>
</template>

<script>
  import TheNavbar from "../components/TheNavbar";
  import AppMessage from "../components/ui/AppMessage";
  import TheSidebar from "../components/TheSidebar";
  export default {
    name: "MainLayout",
    components: {TheSidebar, AppMessage, TheNavbar}
  }
</script>

<style scoped>

</style>
