<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</button>
    <p v-if="isNewsOpen">Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
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
    }
  },
  emits: {
    'open-news' (num) {
      if (num) return true
      console.warn('no data in open-news emit')
      return false
    }
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
    }
  }
}
</script>

<style scoped>

</style>
