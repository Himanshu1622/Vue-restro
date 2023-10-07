import home from "./components/home.vue"
import signup from "./components/signup.vue"
import login from "./components/login.vue"
import add from "./components/add.vue"
import update from "./components/update.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name : 'home',
        component : home,
        path:'/'
    },
    {
        name : 'signup',
        component : signup,
        path:'/signup'
    },
    {
        name : 'login',
        component : login,
        path:'/login'
    },
    {
        name : 'add',
        component : add,
        path:'/add'
    },
    {
        name : 'update',
        component : update,
        path:'/update/:id'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;