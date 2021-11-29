<template>
  <the-header/>
  <div class="container">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>
    <div class="card" v-for="item in news" :key="item">
      <h3>{{ item }}</h3>
      <button class="btn">Открыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    now: new Date().toLocaleDateString(),
    news: [
      'News one',
      'News two',
      'News three',
    ],
  })
}
</script>

<style lang="scss">

</style>
