<template>
    <div>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <img src="../assets/restaurant.png" class="h-20 w-20 mx-auto">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">Login account</h1>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium">Your Email</label>
                        <input type="email" name="email"
                            class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-sm rounded-lg block w-full p-2 placeholder:text-sm"
                            placeholder="name@gmail.com" required v-model="email" />
                    </div>

                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium">Your Password</label>
                        <input type="password" name="password"
                            class="bg-gray-50 border border-gray-300 focus:outline-none sm:text-sm rounded-lg block w-full p-2 placeholder:text-sm"
                            placeholder="*****" required v-model="password" />
                    </div>

                    <button type="button"
                        class="w-full text-white bg-gray-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        @click="login">
                        Login
                    </button>
                    
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don't have account? <RouterLink to="/signup" class="font-medium text-primary-600"> Signup here
                        </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
import axios from "axios";

export default {
    name: "login",
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            let loginDetials = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);

            if (loginDetials.status == 200 && loginDetials.length > 0) {
                alert("Login Successfully");
            }
            localStorage.setItem("user-Info", JSON.stringify(loginDetials.data[0]));
            this.$router.push({ name: 'home' });

            console.warn(loginDetials);
        }
    }, 
    mounted() {
        let user = localStorage.getItem("user-Info")
        if (user) {
            this.$router.push({ name: 'home' });
        }
    }
};
</script>
  
  