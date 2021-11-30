<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <AppButton @action="open">{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</AppButton>
    <div v-if="isNewsOpen">
      <hr/>
      <p>Lorem ipsum dolor sit amet.</p>
      <AppButton color="primary" v-if="!wasRead" @action="mark">Прочесть новость</AppButton>
      <AppButton color="danger" v-if="wasRead" @action="$emit('unmark', id)">Отметить не прочитаной</AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton";

export default {
  // props: ['title'],
  // emits: ['open-news'],
  name: 'AppNews',
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (val) {
        return true
      }
    },
    wasRead: Boolean,
  },
  emits: {
    'open-news' (num) {
      if (num) return true
      console.warn('no data in open-news emit')
      return false
    },
    'read-news'(id) {
      if (id) return true
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    unmark(id) {
      if (id) return true
      console.warn('Нет параметра id для emit unmark')
      return false
    },
  },
  data () {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open () {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) this.$emit('open-news', 42)
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // unmark() {
    //   this.$emit('unmark', this.id)
    // }
  },
  components: {
    AppButton
  }
}
</script>

<style scoped>

</style>
