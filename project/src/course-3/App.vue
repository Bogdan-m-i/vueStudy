<template>
  <TheNavbar/>
  <div class="container with-nav">
    <RouterView/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style>

</style>
