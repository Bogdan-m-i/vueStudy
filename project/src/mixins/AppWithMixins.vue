<template>
  <div class="container">

    <AppAlert v-if="alert" text="Text Alert!!!" title="Attention" type="warning" closable @close="alert = false"/>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Hide message' : 'Show message' }}</button>
    </div>

    <AppBlock/>
  </div>
</template>

<script>
  import AppAlert from "./components/AppAlert";
  import AppBlock from "./components/AppBlock";
  import alertMixin from "./alertMixin";

  export default {
    name: "AppWithMixins",
    components: {AppBlock, AppAlert},
    mixins: [alertMixin],
  }
</script>

<style scoped>

</style>
