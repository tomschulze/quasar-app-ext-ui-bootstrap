import pages from './pages'

const children = pages.map(page => ({
  path: page.slug,
  component: () => import('../' + page.file + '.vue')
}))

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/IndexPage.vue') }
    ].concat(children)
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorPage.vue')
  }
]

export default routes
