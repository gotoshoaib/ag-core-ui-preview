import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import agCoreUi from "ag-ui-vite";

createApp(App).use(agCoreUi).use(router).mount('#app')
