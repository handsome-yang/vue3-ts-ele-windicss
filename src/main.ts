import { createApp } from 'vue'
import App from './App.vue'

import { setFlexible } from "./plugins"
import { setStore } from "./store"
import { setRouter } from "./router"
const app = createApp(App)

setFlexible()
setStore(app)
setRouter(app)
app.mount('#app')
