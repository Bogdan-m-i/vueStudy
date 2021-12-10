<template>

  <header class="navbar">
    <strong>Vue header</strong>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/reusable">reusable</router-link>
      </li>
      <li>
        <router-link to="/vuex">vuex</router-link>
      </li>
    </ul>
  </header>

  <div class="container with-nav">
    <RouterView/>
  </div>

</template>

<script>

export default {

}
</script>
