<template>
  <section class="page-section">
    <div class="container not-found card">
      <span class="section-kicker">404</span>
      <h1>{{ lang === 'tr' ? 'Sayfa bulunamadı' : 'Page not found' }}</h1>
      <p>{{ lang === 'tr' ? 'Aradığınız sayfa taşınmış veya yayından kaldırılmış olabilir.' : 'The page you are looking for may have been moved or removed.' }}</p>
      <BaseButton :to="routeMap.home[lang]">{{ lang === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home' }}</BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import { routeMap } from '../data/siteContent'
import { useLocalizedContent } from '../composables/useLocalizedContent'

const { lang } = useLocalizedContent()
</script>

<style scoped>
.not-found {
  max-width: 720px;
  padding: clamp(34px, 6vw, 70px);
  text-align: center;
}

h1 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: .92;
  letter-spacing: -.05em;
}

p {
  margin: 18px auto 26px;
  max-width: 520px;
  color: var(--color-muted);
}
</style>
