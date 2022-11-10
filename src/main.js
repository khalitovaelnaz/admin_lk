import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyButton from "@/components/UI/MyButton"
import MyInput from "./components/UI/MyInput.vue"

const app = createApp(App);
app.component('my-button', MyButton)
app.component('my-input', MyInput)

app.use(store).use(router).mount('#app')
