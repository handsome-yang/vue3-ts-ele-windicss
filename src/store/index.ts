import { createPinia } from 'pinia'
import type { App } from 'vue'
const store = createPinia()

export const setStore = (app: App) => {
    app.use(store)
}