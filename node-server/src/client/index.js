import { createPinia } from 'pinia';
import { createApp } from "vue";
import { createWebHistory } from 'vue-router';
import App from '../App.vue';
import createRouter from '../router';

let app = createApp(App)


let router = createRouter(createWebHistory())
app.use(router)

let pinia = createPinia()
app.use(pinia)

router.isReady().then(() => {
  app.mount('#app')
})

