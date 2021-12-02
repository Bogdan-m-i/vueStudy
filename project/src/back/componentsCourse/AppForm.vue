<template>
  <form @submit.prevent="create" class="card card-w30">

    <div class="form-control">
      <label for="type">Тип блока</label>

      <select v-model="type" id="type">
        <option v-for="item in typeList" :key="item.id" :value="item.val">{{ item.text }}</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea v-model="val" id="value" rows="3"></textarea>
    </div>

    <app-button color="primary" :dis="!valValid">Добавить</app-button>

  </form>
</template>

<script>
  import AppButton from "./AppButton";
  export default {
    name: "AppForm",
    components: {AppButton},
    emits: ['add'],
    data() {
      return {
        type: null,
        val: '',
        typeList: [
          {id: 0, val: 'Title', text: 'Заголовок'},
          {id: 0, val: 'Subtitle', text: 'Подзаголовок'},
          {id: 0, val: 'Avatar', text: 'Аватар'},
          {id: 0, val: 'Text', text: 'Текст'},
        ]
      }
    },
    computed: {
      valValid() {
        if (this.val.length > 3) return true
        return false
      },
    },
    methods: {
      create() {
        this.$emit('add', this.type, this.val)

        this.type = this.typeList[0].val
        this.val = ''
      }
    },
    mounted() {
      this.type = this.typeList[0].val
    }
  }
</script>

<style scoped>

</style>
