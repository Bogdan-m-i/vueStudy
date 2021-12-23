<template>
  <transition name="sidebar">
    <div class="sidebar" v-if="sidebar" ref="elSidebar">
      <span class="sidebar-close" @click="closeSidebar">&times;</span>
      <div class="sidebar-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque eaque, impedit labore natus nesciunt praesentium quibusdam ratione rerum sit.</p>
      </div>
    </div>
  </transition>
</template>

<script>
  import {computed, ref, onMounted} from 'vue'
  import {useStore} from 'vuex'

  export default {
    name: "TheSidebar",
    setup(props, context) {
      const store = useStore()
      const elSidebar = ref(null)

      const sidebar = computed(() => store.state.sidebar)

      const closeSidebar = () => store.commit('closeSidebar')
      // const closeSidebar = () => {
      //   elSidebar.value?.classList.add('sidebar-closing')
      //   elSidebar.value.onanimationend = () => store.commit('closeSidebar')
      // }

      return {sidebar, closeSidebar, elSidebar}
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-enter-active,
  .sidebar-leave-active {
    transition: opacity 0.5s ease, right 0.5s ease;
  }

  .sidebar-enter-from,
  .sidebar-leave-to {
    opacity: 0;
    right: -300px;
  }
</style>
