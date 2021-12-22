<template>
  <form @submit.prevent="onSubmit">

    <div class="form-control" :class="{invalid: nError}">
      <label for="name">Name</label>
      <input id="name" type="text" v-model="name" @blur="nBlur">
      <small v-if="nError">{{nError}}</small>
    </div>

    <div class="form-control" :class="{invalid: pError}">
      <label for="phone">Phone</label>
      <input id="phone" type="text" v-model="phone" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>

    <div class="form-control" :class="{invalid: aError}">
      <label for="amount">Amount</label>
      <input id="amount" type="number" v-model="amount" @blur="aBlur">
      <small v-if="aError">{{aError}}</small>
    </div>

    <div class="form-control">
      <label for="status">Status</label>
      <select name="status" id="status" v-model="status">
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="panding">Pending</option>
      </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting">Create</button>

  </form>
</template>

<script>
  import {useRequestForm} from "../../use/request-form";
  import {useStore} from 'vuex'

  export default {
    name: "RequestModal",
    emits: ['created'],
    setup(_, context) {

      const store = useStore()

      const submit = async (values) => {
        await store.dispatch('request/create', values)
        context.emit('created')
      }

      return {
        ...useRequestForm(submit)
      }
    }
  }
</script>

<style scoped>

</style>
