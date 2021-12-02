<template>
  <the-header/>
  <div class="container">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }} | Прочитано: {{ readRate }}</span>
    </div>
    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unmark"
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
      readRate: 0,
      news: [
        { id: 1, title: 'News one', isOpen: false, wasRead: false },
        { id: 2, title: 'News two', isOpen: false, wasRead: false },
        { id: 3, title: 'News three', isOpen: false, wasRead: false }
      ]
    }),
    provide() {
      return {
        title: 'Список всех новостей:',
        news: this.news,
      }
    },
    methods: {
      openNews () {
        this.openRate++
      },
      readNews(id) {
        this.readRate++
        this.news.find((item) => item.id == id).wasRead = true
      },
      unmark(id) {
        this.readRate--
        this.news.find((item) => item.id == id).wasRead = false
      }
    },
    components: {
      AppNews
    }
  }
</script>

<style lang="scss">

</style>
