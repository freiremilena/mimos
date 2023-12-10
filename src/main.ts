/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from '@/router'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

app.component('Navbar', Navbar)
app.component('Footer', Footer)

import 'bootstrap/dist/js/bootstrap.js'