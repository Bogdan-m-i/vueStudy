<template>
  <the-header/>
  <div class="container">

    <div class="card">

      <async-component/>

      <h2>Динамичиские и асинхронные компоненты</h2>

      <app-button ref="myBtn" :color="oneColor" @action="active = 'one'">One</app-button>
      <app-button :color="twoColor" @action="active = 'two'">Two</app-button>
    </div>

<!--    <AppTextOne v-if="active === 'one'"/>-->
<!--    <AppTextTwo v-else-if="active === 'two'"/>-->

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>

  </div>
</template>

<script>
import AppButton from './AppButton'
import AppTextOne from './AppTextOne'
import AppTextTwo from './AppTextTwo'

export default {
  name: 'App',
  data () {
    return {
      active: 'one' // two
    }
  },
  computed: {
    componentName () {
      if (this.active === 'one') return 'AppTextOne'
      if (this.active === 'two') return 'AppTextTwo'
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {
    AppButton, AppTextOne, AppTextTwo
  },
  mounted () {
    this.$refs.myBtn.btnLog()
  }
}
</script>

<style lang="scss">

</style>
