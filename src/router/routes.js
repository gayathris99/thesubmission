const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' },
      { path: '/surrender/trainers', component: () => import('pages/TrainerApplication.vue'), name: 'trainers' },
      { path: 'surrender/objects', component: () => import('pages/ObjectApplication.vue'), name: 'objects' },
      { path: '/rules', component: () => import('pages/RulesPage.vue'), name: 'rules' },
      { path: '/contact', component: () => import('pages/ContactPage.vue'), name: 'contact' },
      { path: '/gallery', component: () => import('pages/GalleryPage.vue'), name: 'gallery' },
      { path: '/requirements', component: () => import('pages/RequirementsPage.vue'), name: 'requirements' }
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
