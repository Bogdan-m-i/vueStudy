<template>
  <nav class="navbar">
    <h3>Bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Orders</router-link>
      </li>
      <li>
        <router-link to="/help">Help</router-link>
      </li>
      <li>
        <a href="#" @click="openSidebar">Messages</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Exit</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {useRouter} from 'vue-router'
  import {useStore} from 'vuex'

  export default {
    name: "TheNavabar",
    setup() {
      const router = useRouter()
      const store = useStore()

      const logout = () => {
        store.commit('auth/logout')
        router.push('/auth')
      }

      const openSidebar = () => store.commit('openSidebar')

      return { logout, openSidebar }
    }
  }
</script>

<style scoped>

</style>
