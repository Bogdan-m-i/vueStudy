<template>
  <AppLoader v-if="loading"/>

  <app-page v-else-if="request" back title="Request">

    <p><strong>Name: </strong>{{request.name}}</p>
    <p><strong>Phone: </strong>{{request.phone}}</p>
    <p><strong>Amount: </strong>{{currency(request.amount)}}</p>
    <p><strong>Status: </strong> <AppStatus :type="request.status"/> </p>

    <div class="form-control">
      <label for="status">Status</label>
      <select name="status" id="status" v-model="status">
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Remove</button>
    <button class="btn" @click="update" v-if="hasChanges">Update</button>

  </app-page>

  <h3 v-else class="text-center text-white">Empty</h3>
</template>

<script>
  import {useRoute, useRouter} from 'vue-router'
  import {ref, onMounted, computed} from 'vue'
  import {useStore} from 'vuex'
  import AppPage from "../components/ui/AppPage";
  import AppLoader from "../../back/AppLoader";
  import AppStatus from "../components/ui/AppStatus";
  import {currency} from "../utils/currency";

  export default {
    name: "Request",
    components: {AppStatus, AppLoader, AppPage},
    setup() {
      const loading = ref(false)
      const route = useRoute()
      const router = useRouter()
      const store = useStore()
      const request = ref()
      const status = ref()
      const hasChanges = computed(() => request.value.status !== status.value)

      onMounted(async () => {
        loading.value = true
        request.value = await store.dispatch('request/loadById', route.params.id)
        status.value = request.value?.status
        loading.value = false
      })

      const remove = async () => {
        await store.dispatch('request/remove', route.params.id)
        router.push('/')
      }

      const update = async () => {
        const data = {...request.value, status: status.value}
        const payload = {data, id: route.params.id}
        await store.dispatch('request/update', payload)
        request.value.status = status.value
      }

      return {request, loading, currency, remove, update, status, hasChanges}
    }
  }
</script>

<style scoped>

</style>
