<template>
    <div class="bg-gray-400 p-4">
        <div class="container mx-auto">
            <div class="flex pr-6 justify-between items-center">
                <div class="text-white text-xl font-semibold">Logo</div>
                <!-- Desktop Navigation Menu -->
                <nav class="hidden md:flex space-x-6 font-medium text-sm text-white tracking-wide pr-5">
                    <router-link to="/">Home</router-link>
                    <router-link to="/add">Add </router-link>
                    <a @click="logout" href="#">Logout</a>
                </nav>
                <!-- Mobile Navigation Menu Button -->
                <button class="md:hidden text-white" @click="toggleMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- Mobile Navigation Menu -->
        <div class="md:hidden flex flex-col space-y-2 mt-4 font-medium text-sm text-white text-end tracking-wide pr-5" :class="{ 'hidden': !isMobileMenuOpen }">
            <router-link to="/">Home</router-link>
            <router-link to="/add">Add</router-link>
            <a @click="logout" href="#">Logout</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isMobileMenuOpen: false,
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        logout(){
            localStorage.clear()
            this.$router.push({name:'login'})
        },
    }
};

</script>