<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <RouterLink :to="homePath" class="brand-line">
          <LogoMark />
          <span>
            <strong>{{ t.common.brand }}</strong>
            <small>{{ t.common.tagline }}</small>
          </span>
        </RouterLink>
        <p>{{ footerText }}</p>
      </div>

      <div class="footer-links">
        <div class="footer-col">
          <h2>{{ lang === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links' }}</h2>
          <RouterLink v-for="item in nav" :key="item.path" :to="item.path">
            {{ item.label }}
          </RouterLink>
        </div>

        <div class="footer-col contact-col">
          <h2>{{ lang === 'tr' ? 'İletişim' : 'Contact' }}</h2>
          <a href="mailto:istac2026@gmail.com" class="email-link">
            <Mail :size="16" />
            istac2026@gmail.com
          </a>
          <span>
            <MapPin :size="16" />
            {{ lang === 'tr' ? 'Hibrit / Uluslararası' : 'Hybrid / International' }}
          </span>
          <div class="social-links">
            <a href="#" aria-label="Twitter">
              <Twitter :size="20" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin :size="20" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram :size="20" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container footer-bottom">
      <span>© 2026 {{ t.common.brand }}. {{ lang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.' }}</span>
      <span>{{ lang === 'tr' ? 'Akademik, uluslararası ve disiplinlerarası kongre.' : 'Academic, international and interdisciplinary congress.' }}</span>
    </div>

    <!-- Scroll to Top Button -->
    <button 
      class="scroll-to-top" 
      :class="{ 'visible': showScrollTop }"
      @click="scrollToTop"
      :aria-label="lang === 'tr' ? 'Yukarı Çık' : 'Scroll to Top'"
    >
      <ArrowUp :size="24" stroke-width="2.5" />
    </button>
  </footer>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Mail, MapPin, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-vue-next'
import LogoMark from './LogoMark.vue'
import { content, navItems, routeMap } from '../data/siteContent'

const route = useRoute()
const lang = computed(() => route.meta.lang || 'tr')
const t = computed(() => content[lang.value])
const nav = computed(() => navItems[lang.value])
const homePath = computed(() => routeMap.home[lang.value])
const footerText = computed(() => lang.value === 'tr'
  ? 'Bilim, teknoloji ve sanatı aynı entelektüel zeminde buluşturan prestijli uluslararası kongre.'
  : 'A prestigious international congress bringing science, technology and art together on a shared intellectual ground.'
)

const showScrollTop = ref(false)

const checkScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.site-footer {
  margin-top: 54px;
  padding: 60px 0 24px;
  background: var(--color-navy);
  color: rgba(255, 255, 255, 0.85);
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 60px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.brand-line {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  color: #fff;
}

.brand-line strong {
  display: block;
  font-family: var(--font-serif);
  font-size: 2.2rem;
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: #fff;
}

.brand-line small {
  display: block;
  margin-top: 6px;
  color: var(--color-teal);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

:deep(.logo-mark) {
  color: var(--color-teal);
}

.footer-brand p {
  max-width: 380px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-col h2 {
  margin: 0 0 12px;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: -0.01em;
}

.footer-col a,
.footer-col span {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  transition: color 200ms ease, transform 200ms ease;
}

.footer-col a:hover {
  color: var(--color-teal);
  transform: translateX(4px);
}

.email-link {
  font-weight: 600;
  color: #fff !important;
}

.email-link:hover {
  color: var(--color-teal) !important;
}

.social-links {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.social-links a {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  transition: transform 200ms ease, background-color 200ms ease;
}

.social-links a:hover {
  background: var(--color-teal);
  transform: translateY(-3px);
  color: #fff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 60px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 640px) {
  .footer-links {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
