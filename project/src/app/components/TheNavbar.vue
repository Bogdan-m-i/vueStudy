<template>
  <nav class="navbar">
    <h3>Bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Orders</router-link>
      </li>
      <li>
        <router-link to="/">Help</router-link>
      </li>
      <li>
        <a href="#">Messages</a>
      </li>
      <li>
        <a href="#">Exit</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "TheNavabar"
  }
</script>

<style scoped>

</style>
