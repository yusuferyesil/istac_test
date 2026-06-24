import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CongressPage from '../pages/CongressPage.vue'
import ExhibitionPage from '../pages/ExhibitionPage.vue'
import SubmissionPage from '../pages/SubmissionPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import CommitteesPage from '../pages/CommitteesPage.vue'
import BooksPage from '../pages/BooksPage.vue'
import RegistrationPage from '../pages/RegistrationPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  { path: '/', redirect: '/tr' },
  { path: '/tr', name: 'tr-home', component: HomePage, meta: { lang: 'tr', pageKey: 'home' } },
  { path: '/tr/kongre', name: 'tr-congress', component: CongressPage, meta: { lang: 'tr', pageKey: 'congress' } },
  { path: '/tr/sergi', name: 'tr-exhibition', component: ExhibitionPage, meta: { lang: 'tr', pageKey: 'exhibition' } },
  { path: '/tr/bildiri-gonderimi', name: 'tr-submission', component: SubmissionPage, meta: { lang: 'tr', pageKey: 'submission' } },
  { path: '/tr/kurullar', name: 'tr-committees', component: CommitteesPage, meta: { lang: 'tr', pageKey: 'committees' } },
  { path: '/tr/kitaplar', name: 'tr-books', component: BooksPage, meta: { lang: 'tr', pageKey: 'books' } },
  { path: '/tr/kayit-ve-konaklama', name: 'tr-registration', component: RegistrationPage, meta: { lang: 'tr', pageKey: 'registration' } },
  { path: '/tr/iletisim', name: 'tr-contact', component: ContactPage, meta: { lang: 'tr', pageKey: 'contact' } },

  { path: '/en', name: 'en-home', component: HomePage, meta: { lang: 'en', pageKey: 'home' } },
  { path: '/en/congress', name: 'en-congress', component: CongressPage, meta: { lang: 'en', pageKey: 'congress' } },
  { path: '/en/exhibition', name: 'en-exhibition', component: ExhibitionPage, meta: { lang: 'en', pageKey: 'exhibition' } },
  { path: '/en/submission', name: 'en-submission', component: SubmissionPage, meta: { lang: 'en', pageKey: 'submission' } },
  { path: '/en/committees', name: 'en-committees', component: CommitteesPage, meta: { lang: 'en', pageKey: 'committees' } },
  { path: '/en/books', name: 'en-books', component: BooksPage, meta: { lang: 'en', pageKey: 'books' } },
  { path: '/en/registration-accommodation', name: 'en-registration', component: RegistrationPage, meta: { lang: 'en', pageKey: 'registration' } },
  { path: '/en/contact', name: 'en-contact', component: ContactPage, meta: { lang: 'en', pageKey: 'contact' } },

  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  const lang = to.meta.lang || 'tr'
  document.documentElement.lang = lang
})

export default router

