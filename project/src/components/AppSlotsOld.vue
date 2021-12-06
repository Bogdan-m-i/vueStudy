<template>
  <the-header/>
  <div class="container">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template #default="{ idx, iter }"> <!-- idx, iter - это параметры которые приходят из слота -->
        <span style="color: #c25205">({{ idx }}) item {{ iter }}</span>
      </template>
    </app-list>

    <app-block>
      <p>Lorem ipsum dolor sit amet.</p>
      <template v-slot:header> <!-- v-slot:header === #header -->
        <h3>Title Lorem ipsum.</h3>
      </template>
      <template #footer> <!-- #footer === v-slot:footer-->
        <hr/>
        <p>This is footer</p>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock'
import AppList from './AppList'

export default {
  name: 'App',
  components: {
    AppBlock, AppList
  }
}
</script>

<style lang="scss">

</style>
