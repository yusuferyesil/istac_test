<template>
  <div>
    <PageHero :title="t.submission.title" :subtitle="t.submission.subtitle" />

    <!-- Review Process — Full-width horizontal timeline -->
    <section class="page-section compact">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">{{ lang === 'tr' ? 'Şeffaf Süreç' : 'Transparent Process' }}</span>
          <h2 class="section-title">{{ t.submission.reviewTitle }}</h2>
          <p class="section-desc">{{ lang === 'tr' ? 'Şeffaf ve akademik standartlara uygun süreç' : 'Transparent process adhering to academic standards' }}</p>
        </div>

        <div class="timeline">
          <div class="timeline-track"></div>
          <div class="timeline-steps">
            <div class="timeline-step" v-for="(item, index) in t.submission.review" :key="item">
              <div class="timeline-dot">
                <span>{{ index + 1 }}</span>
              </div>
              <div class="timeline-label">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fees Section -->
    <section class="page-section compact fees-section">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">{{ lang === 'tr' ? 'Ücretler' : 'Pricing' }}</span>
          <h2 class="section-title">{{ t.submission.feesTitle }}</h2>
        </div>

        <div class="fees-grid">
          <div class="fee-tile" v-for="(fee, idx) in t.submission.fees" :key="fee.label" :class="{ 'fee-highlight': idx === 0 }">
            <span class="fee-label">{{ fee.label }}</span>
            <strong class="fee-price">{{ fee.price }}</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Rules -->
    <section class="page-section compact">
      <div class="container">
        <div class="section-header">
          <span class="section-kicker">{{ lang === 'tr' ? 'Yazım Kuralları' : 'Guidelines' }}</span>
          <h2 class="section-title">{{ lang === 'tr' ? 'Bildiri Yazım Kuralları' : 'Submission Guidelines' }}</h2>
        </div>

        <div class="rules-grid">
          <article v-for="(section, idx) in t.submission.detailedRules" :key="idx" class="rule-card">
            <div class="rule-card-header">
              <span class="rule-number">{{ String(idx + 1).padStart(2, '0') }}</span>
              <h3>{{ section.title }}</h3>
            </div>
            <ul class="rule-list">
              <li v-for="(item, i) in section.items" :key="i" v-html="item"></li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="page-section compact">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-content">
            <span class="section-kicker light">ISTAC 2026</span>
            <h2>{{ t.submission.ctaTitle }}</h2>
            <p v-html="t.submission.ctaText"></p>
          </div>
          <a :href="'mailto:istac2026@gmail.com'" class="cta-btn">
            <Mail :size="20" />
            {{ t.submission.ctaButton }}
          </a>
        </div>
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
/* ── Section Headers ── */
.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  margin: 8px 0 0;
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  color: var(--color-navy);
  letter-spacing: -0.03em;
}

.section-desc {
  margin: 10px auto 0;
  max-width: 540px;
  color: var(--color-muted);
  font-size: 1.02rem;
}

/* ── Timeline ── */
.timeline {
  position: relative;
  padding: 0 20px;
}

.timeline-track {
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-teal), var(--color-coral));
  border-radius: 3px;
  opacity: 0.25;
}

.timeline-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  z-index: 1;
}

.timeline-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.timeline-dot {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-navy);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 6px var(--color-bg, #f5f7fa), 0 8px 24px rgba(16, 42, 67, 0.18);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.timeline-step:hover .timeline-dot {
  transform: scale(1.12);
  box-shadow: 0 0 0 6px var(--color-bg, #f5f7fa), 0 12px 32px rgba(16, 42, 67, 0.25);
}

.timeline-dot span {
  color: white;
  font-weight: 800;
  font-size: 1.05rem;
}

.timeline-label {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--color-navy);
  max-width: 160px;
  line-height: 1.45;
}

/* ── Fees ── */
.fees-section {
  background: linear-gradient(135deg, rgba(16, 42, 67, 0.02), rgba(27, 153, 139, 0.04));
}

.fees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.fee-tile {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.fee-tile:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(16, 42, 67, 0.08);
  border-color: var(--color-teal);
}

.fee-highlight {
  border-color: var(--color-teal);
  background: linear-gradient(135deg, rgba(27, 153, 139, 0.04), rgba(27, 153, 139, 0.01));
}

.fee-label {
  font-size: 0.82rem;
  color: var(--color-muted);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.35;
}

.fee-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-coral);
  letter-spacing: -0.02em;
}

/* ── Rules Grid ── */
.rules-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.rule-card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 28px 28px 32px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.rule-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(16, 42, 67, 0.07);
}

.rule-card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
  padding-bottom: 18px;
  border-bottom: 2px solid rgba(27, 153, 139, 0.12);
}

.rule-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--color-navy);
  color: white;
  font-weight: 800;
  font-size: 1rem;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.rule-card-header h3 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--color-navy);
  line-height: 1.3;
}

.rule-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rule-list li {
  position: relative;
  padding-left: 20px;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #334e68;
}

.rule-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-teal);
}

/* ── CTA Banner ── */
.cta-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  background: var(--color-navy);
  border-radius: 20px;
  padding: clamp(32px, 5vw, 56px);
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  top: -40%;
  right: -10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(27, 153, 139, 0.15), transparent 70%);
  pointer-events: none;
}

.cta-banner::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: 10%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(231, 111, 81, 0.1), transparent 70%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-content .section-kicker.light {
  color: var(--color-teal);
  opacity: 0.8;
}

.cta-content h2 {
  margin: 8px 0 0;
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: white;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.cta-content p {
  margin: 14px 0 0;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  font-size: 1rem;
  line-height: 1.6;
}

.cta-btn {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 54px;
  padding: 0 32px;
  border-radius: 12px;
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: white;
  background: var(--color-coral);
  box-shadow: 0 12px 28px rgba(231, 111, 81, 0.3);
  transition: transform 180ms ease, box-shadow 180ms ease;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 36px rgba(231, 111, 81, 0.38);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .fees-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}

@media (max-width: 900px) {
  .rules-grid {
    grid-template-columns: 1fr;
  }
  .cta-banner {
    flex-direction: column;
    text-align: center;
    align-items: stretch;
  }
  .cta-content p {
    max-width: none;
  }
  .cta-btn {
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .timeline-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 0;
  }
  .timeline-track {
    display: none;
  }
}

@media (max-width: 480px) {
  .timeline-steps {
    grid-template-columns: 1fr;
  }
  .fees-grid {
    grid-template-columns: 1fr;
  }
  .rule-card {
    padding: 22px 20px 26px;
  }
}
</style>
