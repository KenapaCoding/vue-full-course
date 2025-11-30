import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/pages/Home.vue";
import Profile from "@/components/pages/Profile.vue";
import Setting from "@/components/pages/Setting.vue";
import User from "@/components/pages/User.vue";
import Dashboard from "@/components/pages/Dashboard.vue";
import Profit from "@/components/pages/Profit.vue";
import Account from "@/components/pages/Account.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/setting', component: Setting},
    {path: '/users/:id', component: User, props:true},
    {
        path: '/dashboard', 
        component: Dashboard, 
        children: [
            {path: 'profit', component: Profit},
            {path: 'account', component: Account}
        ]
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:"aktif",
    linkExactActiveClass:"aktif-banget"
})