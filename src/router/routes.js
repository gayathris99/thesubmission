const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' },
      { path: '/surrender', component: () => import('pages/SurrenderPage.vue'), name: 'surrender' },
      { path: '/rules', component: () => import('pages/RulesPage.vue'), name: 'rules' },
      { path: '/contact', component: () => import('pages/ContactPage.vue'), name: 'contact' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
