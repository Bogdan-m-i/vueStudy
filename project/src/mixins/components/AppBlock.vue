<template>
  <div class="container">

    <AppAlert v-if="alert" text="Text Alert!!!" title="Attention" @close="alert = false"/>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Hide message' : 'Show message' }}</button>
    </div>
  </div>
</template>

<script>
  import AppAlert from "./AppAlert";
  import alertMixin from "../alertMixin";

  export default {
    name: "AppBlock",
    components: {AppAlert},
    mixins: [alertMixin]
  }
</script>

<style scoped>

</style>
