<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type].blink="myColor">Директивы</h2>

      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input type="text" id="inp" v-focus>
      </div>

      <button class="btn" @click="myColor = myColor === 'darkblue' ? 'darkred' : 'darkblue'">Change color</button>
      <button class="btn" @click="type = type === 'color' ? 'background' : 'color'">Change type</button>
    </div>
  </div>
</template>

<script>
  import focusDirective from "./focusDirective";
  import colorDirective from "./colorDirective";

  export default {
    name: "AppWithDirective",
    directives: {
      focus: focusDirective,
      color: colorDirective
    },
    data() {
      return {
        myColor: 'darkred',
        type: 'color',
      }
    }
  }
</script>

<style scoped>

</style>

