<template>
  <div>
    <PageHero :title="t.submission.title" :subtitle="t.submission.subtitle" />

    <section class="page-section compact">
      <div class="container">
        <div class="top-banners">
          <!-- Review Process Banner -->
          <div class="review-process-banner">
            <div class="review-header">
              <h2>{{ t.submission.reviewTitle }}</h2>
              <p>{{ lang === 'tr' ? 'Şeffaf ve akademik standartlara uygun süreç' : 'Transparent process adhering to academic standards' }}</p>
            </div>
            <div class="review-steps">
              <div class="step-card" v-for="(item, index) in t.submission.review" :key="item">
                <span class="step-number">{{ index + 1 }}</span>
                <p>{{ item }}</p>
              </div>
            </div>
          </div>

          <!-- Fees Banner -->
          <div class="fees-banner">
            <div class="review-header">
              <h2>{{ t.submission.feesTitle }}</h2>
            </div>
            <div class="fees-list">
              <div class="fee-card" v-for="fee in t.submission.fees" :key="fee.label">
                <span>{{ fee.label }}</span>
                <strong>{{ fee.price }}</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- 2x2 Rules Grid -->
        <div class="rules-grid">
          <article v-for="(section, idx) in t.submission.detailedRules" :key="idx" class="block-card card detailed-rule-card">
            <h2>{{ section.title }}</h2>
            <ul class="elegant-list">
              <li v-for="(item, i) in section.items" :key="i" v-html="item"></li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section compact">
      <div class="container submission-cta soft-panel">
        <div>
          <span class="section-kicker">ISTAC 2026</span>
          <h2>{{ t.submission.ctaTitle }}</h2>
          <p v-html="t.submission.ctaText"></p>
        </div>
        <a :href="'mailto:istac2026@gmail.com'" class="email-cta-btn"><Mail :size="20" /> {{ t.submission.ctaButton }}</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Mail } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import { useLocalizedContent } from '../composables/useLocalizedContent'

const { lang, t } = useLocalizedContent()
</script>

<style scoped>
.top-banners {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

.review-process-banner {
  background: var(--color-navy);
  border-radius: 16px;
  padding: 30px;
  color: white;
}

.review-header {
  margin-bottom: 30px;
}

.review-header h2 {
  color: white;
  margin: 0 0 8px 0;
  font-family: var(--font-serif);
  font-size: 2.2rem;
}

.review-header p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 1.05rem;
}

.review-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.step-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.2s ease, background 0.2s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.08);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--color-teal);
  color: white;
  font-weight: 800;
  border-radius: 50%;
  font-size: 1rem;
}

.step-card p {
  margin: 0;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #fff;
}

.fees-banner {
  background: rgba(27, 153, 139, 0.05);
  border: 1px solid rgba(27, 153, 139, 0.15);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.fees-banner .review-header h2 {
  color: var(--color-navy);
}

.fees-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
  margin-bottom: auto;
}

.fee-card {
  background: white;
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  border: 1px solid var(--color-border);
}

.fee-card span {
  font-size: 0.8rem;
  color: var(--color-muted);
  font-weight: 700;
  text-transform: uppercase;
}

.fee-card strong {
  font-size: 1.3rem;
  color: var(--color-coral);
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.detailed-rule-card {
  height: 100%;
}

.detailed-rule-card h2 {
  color: var(--color-teal);
  margin-bottom: 24px;
}

@media (max-width: 1024px) {
  .top-banners {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .review-steps {
    grid-template-columns: repeat(2, 1fr);
  }
  .rules-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .review-steps {
    grid-template-columns: 1fr;
  }
  .review-process-banner {
    padding: 30px 20px;
  }
}

.submission-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: clamp(30px, 5vw, 54px);
}

.submission-cta h2 {
  max-width: 740px;
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(2.6rem, 5vw, 4.7rem);
  line-height: 0.95;
  letter-spacing: -0.048em;
}

.submission-cta p {
  max-width: 620px;
  margin: 16px 0 0;
  color: var(--color-muted);
}

.email-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 28px;
  border-radius: 9px;
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  color: #fff;
  background: var(--color-coral);
  box-shadow: 0 14px 28px rgba(231, 111, 81, 0.24);
  transition: transform 180ms ease, box-shadow 180ms ease;
  text-decoration: none;
  white-space: nowrap;
}
.email-cta-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 36px rgba(231, 111, 81, 0.28);
}

@media (max-width: 820px) {
  .submission-cta {
    display: grid;
  }
}
</style>
