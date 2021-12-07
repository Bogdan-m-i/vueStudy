<template>
  <header class="navbar">
    <strong>Vuex {{ counter }} | {{ doubleCounter }}</strong>
    <button class="btn" @click="add">+2</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.counter
    // },
    // doubleCounter() {
    //   return this.$store.getters.doubleCounter
    // },
    ...mapGetters('counter', ['counter', 'doubleCounter'])
  },
  methods: {
    // add() {
    //   this.$store.commit('inc', 2)
    // },
    ...mapMutations('counter', ['inc']),
    add() {
      this.inc(2)
    }
  }
}
</script>
