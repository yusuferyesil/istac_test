<template>
  <div>
    <PageHero :title="t.congress.title" :subtitle="t.congress.subtitle" />

    <section class="page-section compact">
      <div class="container grid-two">
        <div class="content-stack">
          <article class="block-card card">
            <h2>{{ t.congress.aboutTitle }}</h2>
            <p>{{ t.congress.aboutText }}</p>
          </article>

          <article class="block-card card">
            <h2>{{ t.congress.purposeTitle }}</h2>
            <ul class="elegant-list">
              <li v-for="item in t.congress.purpose" :key="item">{{ item }}</li>
            </ul>
          </article>

          <article class="block-card card">
            <h2>{{ t.congress.topicsTitle }}</h2>
            <div class="badge-grid">
              <span v-for="topic in t.congress.topics" :key="topic">{{ topic }}</span>
            </div>
          </article>
        </div>

        <aside class="content-stack">
          <article class="block-card card">
            <h2>{{ t.congress.datesTitle }}</h2>
            <ul class="timeline">
              <li v-for="item in t.congress.dates" :key="item.label">
                <span>{{ item.label }}</span>
                <span>{{ item.date }}</span>
              </li>
            </ul>
          </article>

          <article class="block-card card committees-link-card">
            <Award :size="38" stroke-width="1.5" />
            <h2>{{ lang === 'tr' ? 'Kongre Kurulları' : 'Congress Committees' }}</h2>
            <p>{{ lang === 'tr' ? 'Onur kurulu, bilim sanat kurulu, düzenleme kurulu ve sekreterya üyelerini görüntüleyin.' : 'View honorary board, science and art board, organizing committee and secretariat members.' }}</p>
            <RouterLink class="text-link" :to="routeMap.committees[lang]">
              {{ lang === 'tr' ? 'Kurulları Görüntüle' : 'View Committees' }}
              <ArrowRight aria-hidden="true" />
            </RouterLink>
          </article>
        </aside>
      </div>
    </section>

    <section class="page-section compact">
      <div class="container">
        <SectionTitle :kicker="t.congress.faqTitle" :title="t.congress.faqTitle" centered />
        <div class="faq-list">
          <details v-for="faq in t.congress.faqs" :key="faq.q" class="faq-item" name="faq-group">
            <summary class="faq-summary">
              <h3>{{ faq.q }}</h3>
              <ChevronDown class="faq-chevron" :size="20" stroke-width="2.5" />
            </summary>
            <div class="faq-answer">
              <p v-html="faq.a"></p>
            </div>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Award, ArrowRight, ChevronDown } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { routeMap } from '../data/siteContent'
import { useLocalizedContent } from '../composables/useLocalizedContent'

const { lang, t } = useLocalizedContent()
</script>

<style scoped>
.committees-link-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.committees-link-card svg {
  color: var(--color-teal);
}
.committees-link-card h2 {
  margin: 8px 0 0 !important;
}
.committees-link-card p {
  margin: 0 0 12px;
}
</style>
