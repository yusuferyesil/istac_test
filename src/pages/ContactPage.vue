<template>
  <div>
    <PageHero :title="t.contact.title" :subtitle="t.contact.subtitle" />

    <section class="page-section compact">
      <div class="container grid-two">
        <div class="content-stack">
          <article class="block-card card contact-info">
            <h2>{{ t.contact.infoTitle }}</h2>
            <div class="contact-line">
              <Mail :size="24" stroke-width="1.7" />
              <a :href="`mailto:${t.contact.email}`">{{ t.contact.email }}</a>
            </div>
            <div class="contact-line">
              <Instagram :size="24" stroke-width="1.7" />
              <span>{{ t.contact.social }}</span>
            </div>
          </article>

          <!-- Kongre Kurulları & Sekreterya İletişim Bilgileri -->
          <article class="block-card card contact-persons-card">
            <div class="card-header-with-icon">
              <Phone :size="28" class="icon-teal" />
              <h2>{{ lang === 'tr' ? 'Kongre Kurulları & Sekreterya' : 'Congress Boards & Secretariat' }}</h2>
            </div>
            <div class="contact-sections">
              <div v-for="section in t.contact.sections" :key="section.title" class="contact-sec">
                <h3 class="sec-title">{{ section.title }}</h3>
                <div class="contacts-grid">
                  <div class="contact-person-box" v-for="person in section.members" :key="person.name">
                    <span class="person-role">{{ person.role }}</span>
                    <strong class="person-name">{{ person.name }}</strong>
                    <div class="person-links">
                      <a :href="'tel:' + person.phone.replace(/\s+/g, '')">
                        <Phone :size="13" /> {{ person.phone }}
                      </a>
                      <a v-if="person.email" :href="'mailto:' + person.email">
                        <Mail :size="13" /> {{ person.email }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article class="block-card card online-card">
            <Globe2 :size="44" stroke-width="1.5" />
            <h2>{{ t.contact.onlineTitle }}</h2>
            <p>{{ t.contact.onlineText }}</p>
          </article>
        </div>

        <article class="block-card card">
          <h2>{{ t.contact.formTitle }}</h2>
          <form class="form-grid" @submit.prevent>
            <div class="form-grid two-col">
              <label class="field">
                <span>{{ t.contact.placeholders.name }}</span>
                <input class="input" type="text" autocomplete="name" />
              </label>
              <label class="field">
                <span>{{ t.contact.placeholders.email }}</span>
                <input class="input" type="email" autocomplete="email" />
              </label>
            </div>
            <label class="field">
              <span>{{ t.contact.placeholders.subject }}</span>
              <input class="input" type="text" />
            </label>
            <label class="field">
              <span>{{ t.contact.placeholders.message }}</span>
              <textarea class="textarea"></textarea>
            </label>
            <BaseButton type="submit">{{ t.contact.button }}</BaseButton>
          </form>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Globe2, Instagram, Mail, Phone } from 'lucide-vue-next'
import BaseButton from '../components/BaseButton.vue'
import PageHero from '../components/PageHero.vue'
import { useLocalizedContent } from '../composables/useLocalizedContent'

const { lang, t } = useLocalizedContent()
</script>

<style scoped>
.contact-line {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 16px;
  color: #334e68;
  font-weight: 700;
}

.contact-line svg,
.online-card svg,
.icon-teal {
  color: var(--color-teal);
}

.contact-line a:hover {
  color: var(--color-teal);
}

.online-card h2 {
  margin-top: 18px;
}

.form-grid {
  margin-top: 20px;
}

/* Detailed contacts styling */
.card-header-with-icon {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.card-header-with-icon h2 {
  margin: 0 !important;
}

.contact-sections {
  display: grid;
  gap: 24px;
}

.contact-sec {
  display: grid;
  gap: 12px;
}

.sec-title {
  margin: 0 0 4px !important;
  font-family: var(--font-serif);
  font-size: 1.35rem !important;
  color: var(--color-navy);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 6px;
}

.contacts-grid {
  display: grid;
  gap: 12px;
}

.contact-person-box {
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.45);
  display: grid;
  gap: 4px;
}

.person-role {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-muted);
  letter-spacing: 0.05em;
}

.person-name {
  font-size: 1rem;
  color: var(--color-navy);
  font-weight: 700;
}

.person-links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 2px;
}

.person-links a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.84rem;
  font-weight: 600;
  color: #243b53;
  transition: color 150ms ease;
}

.person-links a:hover {
  color: var(--color-teal);
}
</style>
