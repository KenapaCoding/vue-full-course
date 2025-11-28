import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/pages/Home.vue";
import Profile from "@/components/pages/Profile.vue";
import Setting from "@/components/pages/Setting.vue";
import User from "@/components/pages/User.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/setting', component: Setting},
    {path: '/users/:id', component: User, props:true},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})