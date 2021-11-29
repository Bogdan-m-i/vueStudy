<template>
  <the-header/>
  <div class="container">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }}</span>
    </div>
    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      @open-news="openNews"
    />
  </div>
</template>

<script>
import AppNews from './AppNews'

export default {
  name: 'App',
  data: () => ({
    now: new Date().toLocaleDateString(),
    openRate: 0,
    news: [
      { id: 1, title: 'News one', isOpen: false },
      { id: 2, title: 'News two', isOpen: false },
      { id: 3, title: 'News three', isOpen: false }
    ]
  }),
  methods: {
    openNews () {
      this.openRate++
    }
  },
  components: {
    AppNews
  }
}
</script>

<style lang="scss">

</style>
