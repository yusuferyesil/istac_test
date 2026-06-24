<template>
  <div>
    <section class="home-hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="section-kicker">{{ t.home.eyebrow }}</span>
          <h1 class="serif-title">
            {{ t.home.title }} <em>{{ t.home.year }}</em>
          </h1>
          <p>{{ t.home.description }}</p>
          <div class="hero-actions">
            <BaseButton :to="paths.submission">{{ t.common.ctaSubmission }}</BaseButton>
            <BaseButton :to="paths.congress" variant="secondary">{{ t.common.ctaCongress }}</BaseButton>
          </div>
          <CountdownTimer />
        </div>

        <HeroCollage />
      </div>
    </section>

    <!-- Info Cards Row -->
    <section class="container info-row">
      <div class="info-grid">
        <InfoCard
          v-for="(item, index) in t.home.infoCards"
          :key="item.label"
          :label="item.label"
          :value="item.value"
          :index="index"
        />
      </div>
    </section>

    <!-- Disciplines Row -->
    <section class="container disciplines-row">
      <div class="disciplines-grid">
        <DisciplineCard
          v-for="item in t.home.disciplines"
          :key="item.key"
          :title="item.title"
          :text="item.text"
          :icon="item.icon"
          :to="item.key === 'art' ? paths.exhibition : paths.congress"
          :link-label="t.common.details"
        />
      </div>
    </section>

    <section class="container feature-grid" aria-label="Öne çıkan bölümler">
      <FeatureCard
        v-for="feature in t.home.featured"
        :key="feature.title"
        :title="feature.title"
        :text="feature.text"
        :type="feature.type"
        :to="feature.type === 'exhibition' ? paths.exhibition : paths.books"
        :link-label="feature.link"
      />
    </section>

    <div class="container stats-wrapper">
      <StatsStrip :stats="t.home.stats" />
    </div>

    <section class="page-section compact">
      <div class="container intro-panel soft-panel">
        <div>
          <span class="section-kicker">ISTAC 2026</span>
          <h2>{{ t.home.introTitle }}</h2>
        </div>
        <p>{{ t.home.introText }}</p>
      </div>
    </section>

    <!-- Congress Poster Section -->
    <section class="page-section poster-section">
      <div class="container poster-grid">
        <div class="poster-copy">
          <span class="section-kicker">{{ lang === 'tr' ? 'RESMİ TANITIM' : 'OFFICIAL PROMOTION' }}</span>
          <h2 class="serif-title">{{ t.home.posterTitle }}</h2>
          <h3 class="poster-subtitle">{{ t.home.posterSubtitle }}</h3>
          <p class="poster-desc">{{ t.home.posterText }}</p>
          <div class="poster-actions">
            <a href="/poster.jpg" download="ISTAC_2026_Kongre_Afisi.jpg" class="download-btn">
              <Download :size="18" />
              <span>{{ t.home.posterDownload }}</span>
            </a>
          </div>
        </div>
        
        <div class="poster-visual">
          <div class="poster-frame">
            <img src="/poster.jpg" :alt="t.home.posterTitle" class="poster-img" />
            <div class="poster-overlay">
              <a href="/poster.jpg" target="_blank" class="zoom-btn">
                <Maximize2 :size="20" />
                <span>{{ lang === 'tr' ? 'Tam Boyut Görüntüle' : 'View Full Size' }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Collaborators Infinite Marquee Slider -->
    <section class="collaborators-section">
      <div class="container">
        <h2 class="section-title-centered">
          {{ lang === 'tr' ? 'İşbirlikçi Kurumlar' : 'Collaborating Institutions' }}
        </h2>
        <div class="slider-wrapper">
          <div class="slider-track">
            <div class="slide" v-for="i in 14" :key="i">
              <img
                :src="`/collaborators/${collaboratorLogos[(i - 1) % collaboratorLogos.length]}`"
                :alt="lang === 'tr' ? `İşbirlikçi Kurum ${(i - 1) % collaboratorLogos.length + 1}` : `Collaborator ${(i - 1) % collaboratorLogos.length + 1}`"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Download, Maximize2 } from 'lucide-vue-next'
import BaseButton from '../components/BaseButton.vue'
import DisciplineCard from '../components/DisciplineCard.vue'
import FeatureCard from '../components/FeatureCard.vue'
import HeroCollage from '../components/HeroCollage.vue'
import InfoCard from '../components/InfoCard.vue'
import StatsStrip from '../components/StatsStrip.vue'
import CountdownTimer from '../components/CountdownTimer.vue'
import { routeMap } from '../data/siteContent'
import { useLocalizedContent } from '../composables/useLocalizedContent'

const { lang, t } = useLocalizedContent()
const paths = computed(() => ({
  congress: routeMap.congress[lang.value],
  exhibition: routeMap.exhibition[lang.value],
  submission: routeMap.submission[lang.value],
  books: routeMap.submission[lang.value]
}))

const collaboratorLogos = [
  'logo1.png',
  'logo2.png',
  'logo3.png',
  'logo4.jpg',
  'logo5.png',
  'logo6.png',
  'logo7.jpg'
]
</script>

<style scoped>
.home-hero {
  padding: clamp(44px, 6vw, 80px) 0 34px;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(380px, 1.1fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
}

.hero-copy h1 {
  max-width: 600px;
  margin: 0;
  font-size: clamp(2.8rem, 5vw, 4.6rem);
}

.hero-copy h1 em {
  color: var(--color-teal);
  font-style: normal;
  white-space: nowrap;
}

.hero-copy p {
  max-width: 520px;
  margin: 20px 0 0;
  color: #334e68;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
}

/* Info Cards and Disciplines */
.info-row {
  margin-top: 10px;
  margin-bottom: 24px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.disciplines-row {
  margin-bottom: 42px;
}

.disciplines-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.stats-wrapper {
  margin-top: 32px;
}

.intro-panel {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 36px;
  align-items: center;
  padding: clamp(32px, 5vw, 62px);
}

.intro-panel h2 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(2.7rem, 6vw, 5rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
}

.intro-panel p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: #334e68;
  font-size: 1.07rem;
}

/* Collaborators Infinite Marquee CSS */
.collaborators-section {
  padding: 48px 0 64px;
  background: rgba(255, 253, 249, 0.45);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
  margin-top: 24px;
}

.section-title-centered {
  text-align: center;
  margin-bottom: 36px;
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3.5vw, 2.3rem);
  color: var(--color-navy);
  letter-spacing: -0.02em;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-wrapper::before,
.slider-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.slider-wrapper::before {
  left: 0;
  background: linear-gradient(to right, #F8F7F3, transparent);
}

.slider-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #F8F7F3, transparent);
}

.slider-track {
  display: flex;
  width: calc(220px * 14);
  animation: scroll 24s linear infinite;
}

.slide {
  width: 220px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  flex-shrink: 0;
}

.slide img {
  max-width: 100%;
  max-height: 100%;
  opacity: 0.55;
  filter: grayscale(100%);
  transition: opacity 0.22s ease, filter 0.22s ease, transform 0.22s ease;
}

.slide img:hover {
  opacity: 1;
  filter: grayscale(0%);
  transform: scale(1.04);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-220px * 7));
  }
}

@media (max-width: 1120px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    max-width: 880px;
  }

  .info-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .disciplines-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .feature-grid,
  .intro-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .collaborators-section {
    padding: 36px 0 48px;
  }
  
  .slide {
    width: 180px;
    padding: 0 18px;
  }
  
  .slider-track {
    width: calc(180px * 14);
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-180px * 7));
    }
  }
}

@media (max-width: 640px) {
  .home-hero {
    padding-top: 36px;
  }

  .hero-copy h1 {
    font-size: clamp(2.4rem, 10vw, 3.4rem);
  }

  .info-grid,
  .disciplines-grid {
    grid-template-columns: 1fr;
  }
}

/* Poster Section Styles */
.poster-section {
  background: rgba(27, 153, 139, 0.02);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: clamp(40px, 6vw, 80px) 0;
}

.poster-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
}

.poster-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.poster-copy h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  margin: 10px 0 0 0;
  color: var(--color-navy);
}

.poster-subtitle {
  font-size: 1.25rem;
  color: var(--color-navy);
  font-weight: 700;
  margin: 20px 0 14px;
  line-height: 1.4;
  font-family: var(--font-serif);
}

.poster-desc {
  color: #334e68;
  font-size: 1.05rem;
  line-height: 1.65;
  margin: 0 0 30px 0;
}

.poster-actions {
  display: flex;
  gap: 16px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 28px;
  border-radius: 9px;
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  color: #fff;
  background: var(--color-teal);
  box-shadow: 0 10px 20px rgba(27, 153, 139, 0.18);
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
  text-decoration: none;
  cursor: pointer;
}

.download-btn:hover {
  transform: translateY(-1px);
  background: #158578;
  box-shadow: 0 14px 28px rgba(27, 153, 139, 0.24);
}

.poster-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.poster-frame {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  padding: 8px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  max-width: 380px;
  width: 100%;
}

.poster-frame:hover {
  transform: translateY(-4px) scale(1.015);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.18), 0 10px 24px rgba(0, 0, 0, 0.1);
}

.poster-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.poster-overlay {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background: rgba(18, 30, 49, 0.75);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.poster-frame:hover .poster-overlay {
  opacity: 1;
  pointer-events: auto;
}

.zoom-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #fff;
  color: var(--color-navy);
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.zoom-btn:hover {
  background: var(--color-teal);
  color: #fff;
  transform: scale(1.05);
}

/* Responsive adjustments for poster */
@media (max-width: 960px) {
  .poster-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .poster-copy {
    align-items: center;
    text-align: center;
  }
  
  .poster-actions {
    justify-content: center;
  }
}
</style>
