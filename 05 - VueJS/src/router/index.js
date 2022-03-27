import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pastelero from '../views/Pastelero.vue'
import Comprar from '../views/Comprar.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/pastelero',
        name: 'pastelero',
        component: Pastelero
    },
    {
        path: '/comprar',
        name: 'comprar',
        component: Comprar
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router