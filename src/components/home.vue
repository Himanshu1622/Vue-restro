<template>
  <Header />

  <h1 class="md:text-4xl text-2xl font-medium text-center p-3">Hello {{ userName }}, Welcome to Home Page</h1>

  <div class="md:mx-40 mx-2">
    <table class="mx-auto rounded w-full mt-10 border-2">
      <thead class="m-20">
        <th class="border-2 border-gray-300 py-2 font-bold trcking-wide text-lg">ID</th>
        <th class="border-2 border-gray-300 py-2 font-bold trcking-wide text-lg">Name</th>
        <th class="border-2 border-gray-300 py-2 font-bold trcking-wide text-lg">Location</th>
        <th class="border-2 border-gray-300 py-2 font-bold trcking-wide text-lg">Contact</th>
        <th class="border-2 border-gray-300 py-2 font-bold trcking-wide text-lg">Action</th>
      </thead>

      <tbody v-for="i in restaurants" :key="i.id" class="text-center">
        <td class="border-2 border-gray-300 py-2">{{ i.id }}</td>
        <td class="border-2 border-gray-300 py-2">{{ i.name }}</td>
        <td class="border-2 border-gray-300 py-2">{{ i.location }}</td>
        <td class="border-2 border-gray-300 py-2">{{ i.contact }}</td>
        <td class=" border-t border-gray-300 py-2 text-blue-500 flex items-center justify-center gap-5 px-2">

          <router-link :to="'/update/' + i.id"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4"
              viewBox="0 0 16 16">
              <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg></router-link>


          <button @click="trash(i.id)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 text-red-600">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </td>

      </tbody>

    </table>

  </div>
</template>

<script>
import axios from "axios";
import Header from "./header.vue";

export default {
  name: "home",
  components: {
    Header
  },
  data() {
    return {
      userName: '',
      restaurants: [],
    }
  },
  methods: {
    async trash(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if (result.status == 200)
      {
        this.loadData()
        console.error("Data delete "+id);
      }
    },
    async loadData() {
      // To show Login userName 
      let user = localStorage.getItem("user-Info")
      this.userName = JSON.parse(user).name
      
      // if User not login 
      if (!user)
      {
        this.$router.push({ name: 'signup' });
      }

      // To Show all Data 
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurants = result.data
    }
  },

  mounted() {
    this.loadData()
  }
}

</script>