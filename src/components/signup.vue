<template>
  <div>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <img src="../assets/restaurant.png" class="h-20 w-20 mx-auto">
          <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">Create an account</h1>
          <div>
            <label for="name" class="block mb-2 text-sm font-medium">Your Name</label>
            <input type="text" name="name"
              class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-sm rounded-lg block w-full p-2 placeholder:text-sm"
              placeholder="Enter Your Name" required v-model="name" />
          </div>

          <div>
            <label for="email" class="block mb-2 text-sm font-medium">Your Email</label>
            <input type="email" name="email"
              class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-sm rounded-lg block w-full p-2 placeholder:text-sm"
              placeholder="name@gmail.com" required v-model="email" />
          </div>

          <div>
            <label for="location" class="block mb-2 text-sm font-medium">Your Location</label>
            <input type="text" name="location" id="location"
              class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-sm rounded-lg block w-full p-2 placeholder:text-sm"
              placeholder="Enter Your City" required v-model="location" />
          </div>

          <div>
            <label for="password" class="block mb-2 text-sm font-medium">Your Password</label>
            <input type="password" name="password"
              class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-sm rounded-lg block w-full p-2 placeholder:text-sm"
              placeholder="*****" required v-model="password" />
          </div>

          <button type="button"
            class="w-full text-white bg-gray-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            @click="signUp">
            Create an account
          </button>

          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <RouterLink to="/login" class="font-medium text-primary-600"> Login here</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
      name: '',
      email: '',
      location: '',
      password: ''
    };
  },
  methods: {
    async signUp() {
      console.warn("Name :", this.name,":", "Email :",":", this.email,":", "Location :",":", this.location,":", "Password :", this.password);
      let user = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        location: this.location,
        password: this.password
      });

      // console.log(user);
      if (user.status == 201) {
        alert("Sign Up Successfully");
      }

      localStorage.setItem("user-Info", JSON.stringify(user.data));
      this.$router.push({ name: 'home' });
    }
  },
  mounted(){
    let user = localStorage.getItem("user-Info")
    if(user){
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

