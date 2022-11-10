import { createRouter, createWebHistory } from 'vue-router'
import LogInForm from "@/views/LogInForm"
import RegisterForm from "@/views/RegisterForm"
import RecoveryForm from "@/views/RecoveryForm"
import ActivateAccount from "@/views/ActivateAccount"


const routes = [
  {
    path: '/',
    component: LogInForm
  },
  {
    path: '/register',
    component: RegisterForm
  },
  {
    path: '/recovery',
    component: RecoveryForm
  },
  {
    path: '/activate-account',
    component: ActivateAccount
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
