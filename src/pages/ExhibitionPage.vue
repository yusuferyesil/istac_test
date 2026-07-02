<template>
  <div>
    <PageHero :title="t.exhibition.title" :subtitle="t.exhibition.subtitle" />

    <section class="page-section compact">
      <div class="container exhibition-layout">
        <div class="content-stack">
          <article class="block-card card">
            <h2>{{ t.exhibition.aboutTitle }}</h2>
            <p>{{ t.exhibition.aboutText }}</p>
          </article>

          <article class="block-card card">
            <h2>{{ t.exhibition.conditionsTitle }}</h2>
            <ul class="elegant-list">
              <li v-for="item in t.exhibition.conditions" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>

        <div class="visual-card soft-panel">
          <ExhibitionIllustration />
        </div>
      </div>
    </section>

    <section class="page-section compact">
      <div class="container grid-two">
        <article class="block-card card">
          <h2>{{ t.exhibition.processTitle }}</h2>
          <ul class="elegant-list numbered">
            <li v-for="item in t.exhibition.process" :key="item">{{ item }}</li>
          </ul>
        </article>
        <div class="content-stack">
          <article class="block-card card">
            <h2>{{ t.exhibition.sendTitle }}</h2>
            <p v-html="t.exhibition.sendText"></p>
            <div class="cta-wrapper" style="margin-top: 20px;">
              <a :href="t.exhibition.ctaUrl" target="_blank" rel="noopener" class="pdf-btn">
                {{ t.exhibition.ctaText }}
                <ExternalLink :size="16" />
              </a>
            </div>
          </article>

          <!-- Exhibition Fees & Contact Card -->
          <article class="block-card card">
            <div class="card-header-with-icon">
              <CreditCard :size="26" class="icon-teal" />
              <h2>{{ t.exhibition.feesTitle }}</h2>
            </div>
            <p>{{ t.exhibition.feesText }}</p>
            
            <ul class="exhibition-fees-list">
              <li v-for="item in t.exhibition.fees" :key="item.label">
                <span>{{ item.label }}</span>
                <strong>{{ item.price }}</strong>
              </li>
            </ul>

            <div class="exhibition-email-box">
              <Mail :size="16" class="icon-teal" />
              <p v-html="t.exhibition.emailText"></p>
            </div>
          </article>

          <article class="block-card card">
            <h2>{{ t.exhibition.calendarTitle }}</h2>
            <ul class="timeline">
              <li v-for="item in t.exhibition.calendar" :key="item.label">
                <span>{{ item.label }}</span>
                <span>{{ item.date }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Mail, CreditCard, ExternalLink } from 'lucide-vue-next'
import ExhibitionIllustration from '../components/ExhibitionIllustration.vue'
import PageHero from '../components/PageHero.vue'
import { useLocalizedContent } from '../composables/useLocalizedContent'

const { t } = useLocalizedContent()
</script>

<style scoped>
.exhibition-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.78fr);
  gap: 28px;
  align-items: stretch;
}

.visual-card {
  display: grid;
  place-items: center;
  padding: 34px;
}

.numbered {
  counter-reset: step;
}

.numbered li {
  counter-increment: step;
}

.numbered li::before {
  content: counter(step);
  display: grid;
  place-items: center;
  top: 15px;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 999px;
  background: var(--color-teal);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 800;
}

/* Fee & Contact card styles */
.card-header-with-icon {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.card-header-with-icon h2 {
  margin: 0 !important;
}

.icon-teal {
  color: var(--color-teal);
  flex-shrink: 0;
}

/* Call to Action Button styling */
.pdf-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: var(--radius-sm);
  background: var(--color-teal);
  color: white;
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
  box-shadow: 0 10px 20px rgba(27, 153, 139, 0.2);
}

.pdf-btn:hover {
  transform: translateY(-1px);
  background: #178579;
  box-shadow: 0 14px 28px rgba(27, 153, 139, 0.28);
}

.cta-wrapper {
  margin-top: 20px;
}

.exhibition-fees-list {
  display: grid;
  gap: 8px;
  margin: 16px 0;
  padding: 0;
  list-style: none;
}

.exhibition-fees-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm, 12px);
  background: rgba(255, 255, 255, 0.45);
  font-size: 0.9rem;
}

.exhibition-fees-list li span {
  color: #243b53;
  font-weight: 600;
}

.exhibition-fees-list li strong {
  color: var(--color-coral);
  font-weight: 800;
  font-size: 1.05rem;
}

.exhibition-email-box {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 14px;
  border-left: 3px solid var(--color-teal);
  background: rgba(27, 153, 139, 0.04);
  border-radius: 0 var(--radius-sm, 12px) var(--radius-sm, 12px) 0;
  margin-top: 16px;
}

.exhibition-email-box p {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--color-navy);
}

.exhibition-email-box p :deep(strong) {
  color: var(--color-teal);
}

@media (max-width: 940px) {
  .exhibition-layout {
    grid-template-columns: 1fr;
  }
}
</style>
