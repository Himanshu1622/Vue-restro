<template>
  <Header />

  <h1 class="text-2xl font-bold tracking-wide text-center p-3">Hello User, Welcome to Add Restaurant Page</h1>


  <div class="flex flex-col items-center mx-auto md:h-screen lg:py-0">
    <div class="w-full bg-white rounded-lg shadow md:mt-10 sm:max-w-md xl:p-0">
      <form class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <img src="../assets/restaurant.png" class="h-20 w-20 mx-auto">
        <!-- <h1 class="text-xl font-bold leading-tight md:text-2xl">Add Restaurant</h1> -->

        <div>
          <label for="name" class="block mb-2 text-sm font-medium">Name</label>
          <input type="text" name="name"
            class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-xs rounded-lg block w-full p-2 placeholder:text-xs"
            placeholder="Enter Restaurant Name" required v-model="restaurant.name" />
        </div>

        <div>
          <label for="location" class="block mb-2 text-sm font-medium">Location</label>
          <input type="text" name="location" id="location"
            class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-xs rounded-lg block w-full p-2 placeholder:text-xs"
            placeholder="Enter Reastaurant location" required v-model="restaurant.location" />
        </div>

        <div>
          <label for="contact" class="block mb-2 text-sm font-medium">Contact</label>
          <input type="text" name="contact"
            class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-xs rounded-lg block w-full p-2 placeholder:text-xs"
            placeholder="Enter Restaurant Contact" required v-model="restaurant.contact" />
        </div>

        <button type="button"
          class="w-full text-white bg-gray-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center"
          @click="add">
          Add Restaurant
        </button>

      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./header.vue";

export default {
  name: "addRestro",
  components: {
    Header
  },
  data() {
    return {
      restaurant: {
        name: '',
        location: '',
        contact: ''
      }
    }
  },
  methods: {
    async add() {
      let user = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        location: this.restaurant.location,
        contact: this.restaurant.contact
      });

      // console.log(user);
      if (user.status == 201) {
        this.$router.push({ name: 'home' });
      }
      console.warn("result",user);
    }
  },
  mounted() {
    // let user = localStorage.getItem("user-Info")
    // if (!user) {
    //   this.$router.push({ name: 'signup' });
    // }
  }
}

</script>

