<template>
  <AppLoader v-if="loading" />
  <app-page title="Список заявок" v-else>

    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>

    <template #default>
      <RequestFilter v-model="filter"/>

      <RequestTable :requests="requests"/>

      <teleport to="body">
        <app-modal v-if="modal" @close="modal = false" title="Создать заявку">
          <RequestModal @created="modal = false"/>
        </app-modal>
      </teleport>
    </template>

  </app-page>
</template>

<script>
import {ref, computed, onMounted, watch} from 'vue'
import {useStore} from 'vuex'
import AppPage from "../components/ui/AppPage";
import RequestTable from "../components/request/RequestTable";
import AppModal from "../components/ui/AppModal";
import RequestModal from "../components/request/RequestModal";
import AppLoader from "../../back/AppLoader";
import RequestFilter from "../components/request/RequestFilter";
export default {
  name: 'Home',
  components: {RequestFilter, AppLoader, RequestModal, AppModal, RequestTable, AppPage},
  setup() {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})

    watch(filter, (val) => {
      console.log(val)
    })

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    const requests = computed(() => {
      return store
        .getters['request/requests']
        .filter((req) => {
          if (filter.value.name) return req.name.includes(filter.value.name)
          return req
        })
        .filter((req) => {
          if (filter.value.status) return req.status === filter.value.status
          return req
        })
    })

    return {
      modal, requests, loading, filter
    }
  }
}
</script>
