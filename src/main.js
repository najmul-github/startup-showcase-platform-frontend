import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'popper.js'
import '../public/styles/sass/app.scss'
import store from './store'

import middleware from "@grafikri/vue-middleware"

router.beforeEach(middleware())
const app = createApp(App).use(store);

app.use(router).mount('#app')
