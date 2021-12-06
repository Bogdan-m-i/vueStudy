<template>
  <div class="card inline" v-for="pers in people" :key="pers.id" v-if="people.length">
    <h3>{{ pers.firstName }}</h3>
    <button class="btn danger" @click="$emit('remove', pers.id)">Delete</button>
  </div>
  <div class="card center" v-else>
    <h4>Список пуст</h4>
    <button class="btn" @click="$emit('load')">Загрузить</button>
  </div>
</template>

<script>
export default {
  name: 'AppPeopleList',
  emits: ['load', 'remove'],
  props: ['people']
}
</script>

<style scoped>
  .inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
