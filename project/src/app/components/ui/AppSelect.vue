<template>
  <div class="select">

    <input type="text" class="select__input" @focus="open" v-model="input">

    <div class="select__dropdown" ref="dropdown">

      <div class="select__item" v-for="el in list" :key="el.id">
        <input class="select__radio" type="radio" :id="'item-' + el.id" :value="el.id" v-model="radio">
        <label class="select__label" :for="'item-' + el.id">{{el.text}}</label>
      </div>

    </div>

  </div>
</template>

<script>
  import {ref, watch, onMounted, onUnmounted} from 'vue'
  export default {
    name: "AppSelect",
    setup() {
      const data = ref([
        {id: 1, text: 'Done'},
        {id: 2, text: 'Canceled'},
        {id: 3, text: 'Active'},
        {id: 4, text: 'Pending'},
      ])
      const list = ref(data.value)
      const input = ref()
      const radio = ref()
      const dropdown = ref()
      const current = ref()

      const open = () => {
        dropdown.value.classList.add('active')
      }

      const close = () => {
        dropdown.value.classList.remove('active')
      }

      watch(radio, (val, prevVal) => {
        console.warn('watch radio')
        close()
        current.value = list.value.find((el) => el.id === val)
        input.value = current.value.text
      })

      watch(input, (val) => {
        console.log("-> val", val);
      })



      const clickOutside = (e) => {
        if (!e.target.closest('.select')) {
          close()
        }
      }

      onMounted(() => {
        document.addEventListener('click', clickOutside)
      })

      onUnmounted(() => {
        document.removeEventListener('click', clickOutside)
      })

      return {input, list, radio, dropdown, open}
    }
  }
</script>

<style lang="scss" scoped>
  .select {
    position: relative;

    &__input {
      width: 100%;
    }

    &__dropdown {
      position: absolute;
      background: #3eaf7c;
      border-radius: 5px;
      padding: 10px;
      z-index: 10;
      left: 0;
      right: 0;
      top: calc(100% + 10px);
      display: none;

      &.active {
        display: block;
      }
    }
  }
</style>
