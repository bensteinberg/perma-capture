import { createRouter, createWebHistory } from 'vue-router'

import TheRootPage from './components/TheRootPage.vue'
import TheDocsPage from './components/TheDocsPage.vue'
import TheSignUpPage from './components/TheSignUpPage.vue'
import TheLoginPage from './components/TheLoginPage.vue'
import TheLoggedOutPage from './components/TheLoggedOutPage.vue'
import TheAccountSettingsPage from './components/TheAccountSettingsPage.vue'
import ThePasswordResetPage from './components/ThePasswordResetPage.vue'

const routes = [
  { path: '/', name: 'root', component: TheRootPage },
  { path: '/docs/', name: 'docs', component: TheDocsPage },
  { path: '/sign-up/', name: 'sign_up', component: TheSignUpPage },
  { path: '/user/login/', name: 'login', component: TheLoginPage },
  { path: '/user/logout/', name: 'logout', component: TheLoggedOutPage },
  { path: '/user/account/', name: 'account', component: TheAccountSettingsPage },
  { path: '/user/password_reset/', name: 'password_reset', component: ThePasswordResetPage },
  { path: '/user/password_change/', redirect: { name: 'account' } },
  { path: '/user/password_change/done/', redirect: { name: 'account' } },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
