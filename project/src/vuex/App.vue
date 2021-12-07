<template>
  <TheNavbar/>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ titleUp }}</h1>
      <h2>Счетчик {{ counter }}</h2>
      <button class="btn" @click="add">+</button>
      <button class="btn danger" @click="addAsync">async +</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {TheNavbar},
  computed: {
    ...mapGetters(['titleUp']),
    ...mapGetters('counter', ['counter'])
  },
  methods: {
    ...mapActions('counter', ['incAsync']),
    ...mapMutations('counter', ['inc']),
    add() {
      // this.$store.commit('inc')
      this.inc()
    },
    addAsync() {
      // this.$store.dispatch('incAsync')
      this.incAsync()
    }
  }
}
</script>
