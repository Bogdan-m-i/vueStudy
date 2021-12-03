<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="$alert('WOW its work')">alert</button>
      <button class="btn" @click="changeLang">change lang</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    inject: ['changeI18N'],
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
