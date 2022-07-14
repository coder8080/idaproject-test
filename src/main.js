import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import UIComponents from '@/components/UI'

const app = createApp(App)
UIComponents.map((component) => app.component(component.name, component))
app.use(store)
app.mount('#app')
