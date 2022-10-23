import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from "@/plugins/vuetify";
import router from "@/router/routes";
import store from "@/store";

createApp(App)
    .use(Vuetify)
    .use(router)
    .use(store)
    .mount('#app')
