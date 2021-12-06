<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="$alert('WOW its work')">alert</button>
      <button class="btn" @click="changeLang">change lang</button>
      <button class="btn primary" @click="modal = true">open modal</button>

      <teleport to="body">
        <AppModal v-if="modal === true" @close="modal = false"/>
      </teleport>
    </div>
  </div>
</template>

<script>
  import AppModal from "./components/AppModal";

  export default {
    name: "App",
    components: {AppModal},
    inject: ['changeI18N'],
    data() {
      return {
        modal: false,
      }
    },
    methods: {
      changeLang() {
        this.changeI18N('en')
        this.$forceUpdate()
      }
    }
  }
</script>

<style scoped>

</style>
