<template>
  <h4 v-if="!requests?.length" class="text-center">Requests empty</h4>

  <table v-else class="table">

    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(r, i) in requests" :key="r.id">
      <td>{{i+1}}</td>
      <td>{{r.name}}</td>
      <td>{{r.phone}}</td>
      <td>{{currency(r.amount)}}</td>
      <td>
        <AppStatus :type="r.status"/>
      </td>
      <td>
        <!--          <router-link v-slot="{navigate}" custom :to="{ name: 'Request', params: {id: r.id} }">-->
        <!--            <button class="btn primary" @click="navigate">Open</button>-->
        <!--          </router-link>-->
      </td>
    </tr>
    </tbody>

  </table>
</template>

<script>
  import {currency} from "../../utils/currency";
  import AppStatus from "../ui/AppStatus";

  export default {
    name: "RequestTable",
    components: {AppStatus},
    props: ['requests'],
    setup() {

      return {
        currency
      }
    }
  }
</script>

<style scoped>

</style>
