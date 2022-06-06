import { createRouter, createWebHistory } from "vue-router";
import { createRouterGuards } from "./guard"
import type { App } from "vue"

const config = {
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("@/pages/Home.vue")
        }
    ]
}

export const setRouter = (app:App) => {
    let router = createRouter(config)
    createRouterGuards(router)
    app.use(router)
}