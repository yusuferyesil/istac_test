<template>
  <div>
    <PageHero :title="t.registration.title" :subtitle="t.registration.subtitle" />

    <section class="page-section compact animate-fade-in">
      <div class="container grid-two">
        <!-- Left Column: Registration Forms, Fees, Services, Bank accounts -->
        <div class="content-stack">
          <!-- Exhibition Registration Form Link -->
          <article class="block-card card">
            <div class="card-header-with-icon">
              <FileText :size="28" class="icon-teal" />
              <h2>{{ t.registration.exhibitionCardTitle }}</h2>
            </div>
            <p>{{ t.registration.exhibitionCardText }}</p>
            <div class="cta-wrapper">
              <a :href="t.registration.exhibitionCtaUrl" target="_blank" rel="noopener" class="pdf-btn">
                {{ t.registration.exhibitionCtaText }}
                <ExternalLink :size="16" />
              </a>
            </div>
          </article>

          <!-- Registration Fees -->
          <article class="block-card card">
            <div class="card-header-with-icon">
              <CreditCard :size="28" class="icon-teal" />
              <h2>{{ t.registration.feesCardTitle }}</h2>
            </div>
            <p v-html="t.registration.feesCardText"></p>
            
            <div class="fees-table-wrapper">
              <table class="premium-table">
                <thead>
                  <tr>
                    <th>{{ lang === 'tr' ? 'Katılım Türü' : 'Participation Type' }}</th>
                    <th class="text-right">{{ lang === 'tr' ? 'Ücret' : 'Fee' }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="fee in t.submission.fees" :key="fee.label">
                    <td>{{ fee.label }}</td>
                    <td class="text-right fee-amount">{{ fee.price }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="submission-notebox">
              <p v-for="(note, idx) in t.registration.submissionNotes" :key="idx" v-html="note"></p>
            </div>
          </article>

          <!-- Services Included in the Fee -->
          <article class="block-card card">
            <div class="card-header-with-icon">
              <CheckCircle2 :size="28" class="icon-teal" />
              <h2>{{ t.registration.includedTitle }}</h2>
            </div>
            <p class="muted-description">{{ t.registration.includedDescription }}</p>
            <ul class="elegant-list">
              <li v-for="(item, idx) in t.registration.includedItems" :key="idx">
                {{ item }}
              </li>
            </ul>

            <h3 class="sub-section-title">{{ t.registration.dailyIncludedTitle }}</h3>
            <ul class="elegant-list">
              <li v-for="(item, idx) in t.registration.dailyIncludedItems" :key="idx">
                {{ item }}
              </li>
            </ul>
          </article>

          <!-- Bank Account Details -->
          <article class="block-card card bank-card">
            <div class="card-header-with-icon">
              <CreditCard :size="28" class="icon-teal" />
              <h2>{{ t.registration.bankCardTitle }}</h2>
            </div>
            <div class="bank-details-grid">
              <div class="bank-detail-item" v-for="detail in t.registration.bankDetails" :key="detail.label">
                <span>{{ detail.label }}</span>
                <strong v-html="detail.value"></strong>
              </div>
            </div>
            <div class="agency-banner" style="margin-top: 24px; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--color-border);">
              <img src="/newstour.png" alt="News Tour Agency" style="width: 100%; display: block;" />
            </div>
          </article>
        </div>

        <!-- Right Column: Accommodation and Contacts -->
        <aside class="content-stack">
          <!-- Transportation and Hotel Accommodation -->
          <article class="block-card card hotel-card">
            <div class="card-header-with-icon">
              <Building2 :size="28" class="icon-teal" />
              <h2>{{ t.registration.accommodationTitle }}</h2>
            </div>
            
            <div class="hotel-info">
              <h3>{{ t.registration.hotelName }}</h3>
              <a :href="t.registration.hotelWebsiteUrl" target="_blank" rel="noopener" class="hotel-link">
                {{ t.registration.hotelWebsiteLabel }}
                <ExternalLink :size="14" />
              </a>
              
              <div class="hotel-meta-list">
                <div class="meta-item">
                  <strong>{{ t.registration.hotelAddressLabel }}:</strong>
                  <p>{{ t.registration.hotelAddressValue }}</p>
                </div>
                <div class="meta-item">
                  <strong>{{ t.registration.hotelContactLabel }}:</strong>
                  <div class="meta-links">
                    <a :href="'tel:' + t.registration.hotelContactPhone.replace(/\s+/g, '')">
                      <Phone :size="14" /> {{ t.registration.hotelContactPhone }}
                    </a>
                    <a :href="'mailto:' + t.registration.hotelContactEmail">
                      <Mail :size="14" /> {{ t.registration.hotelContactEmail }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="price-section">
              <h4>{{ t.registration.priceTitle }}</h4>
              <span class="price-subtitle">{{ t.registration.priceSubtitle }}</span>
              
              <ul class="hotel-prices">
                <li v-for="item in t.registration.prices" :key="item.label">
                  <span>{{ item.label }}</span>
                  <strong>{{ item.price }}</strong>
                </li>
              </ul>
              
              <p class="price-note">{{ t.registration.priceNote }}</p>
            </div>
          </article>

          <!-- Congress Contacts -->
          <article class="block-card card contacts-card">
            <div class="card-header-with-icon">
              <Phone :size="26" class="icon-teal" />
              <h2>{{ t.registration.contactTitle }}</h2>
            </div>
            
            <div class="contacts-list">
              <div class="contact-person-card" v-for="person in t.registration.contacts" :key="person.name">
                <span class="contact-role">{{ person.role }}</span>
                <strong class="contact-name">{{ person.name }}</strong>
                <div class="contact-person-links">
                  <a :href="'tel:' + person.phone.replace(/\s+/g, '')">
                    <Phone :size="13" /> {{ person.phone }}
                  </a>
                  <a v-if="person.email" :href="'mailto:' + person.email">
                    <Mail :size="13" /> {{ person.email }}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Building2, CheckCircle2, CreditCard, ExternalLink, FileText, Mail, Phone } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import { useLocalizedContent } from '../composables/useLocalizedContent'

const { lang, t } = useLocalizedContent()
</script>

<style scoped>
/* Card structure additions */
.card-header-with-icon {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
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

/* Premium Table layout */
.fees-table-wrapper {
  margin: 22px 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 4px 12px rgba(16, 42, 67, 0.02);
}

.premium-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.94rem;
}

.premium-table th,
.premium-table td {
  padding: 15px 18px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.premium-table th {
  background: rgba(16, 42, 67, 0.04);
  color: var(--color-navy);
  font-weight: 700;
}

.premium-table tr:last-child td {
  border-bottom: none;
}

.text-right {
  text-align: right;
}

.fee-amount {
  font-weight: 800;
  color: var(--color-coral);
  white-space: nowrap;
}

/* Attention / Note block */
.submission-notebox {
  margin-top: 18px;
  padding: 16px;
  border-left: 4px solid var(--color-teal);
  background: rgba(27, 153, 139, 0.05);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.submission-notebox p {
  margin: 0;
  color: var(--color-navy);
  font-size: 0.9rem;
  line-height: 1.55;
}

.submission-notebox p + p {
  margin-top: 8px;
}

/* Included items and structures */
.muted-description {
  margin-bottom: 18px;
  color: var(--color-muted);
  font-size: 0.95rem;
}

.sub-section-title {
  margin: 32px 0 16px !important;
  font-size: 1.35rem !important;
  color: var(--color-navy);
  font-family: var(--font-serif);
}

/* Bank detail fields */
.bank-details-grid {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.bank-detail-item {
  display: grid;
  gap: 5px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.45);
}

.bank-detail-item span {
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-muted);
  letter-spacing: 0.06em;
}

.bank-detail-item strong {
  font-size: 1.02rem;
  color: var(--color-navy);
  line-height: 1.4;
  word-break: break-all;
}

/* Hotel Details block */
.hotel-info {
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
}

.hotel-info h3 {
  margin: 0 0 6px;
  font-size: 1.55rem !important;
  color: var(--color-navy);
  font-family: var(--font-serif);
}

.hotel-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-teal);
  font-weight: 800;
  font-size: 0.88rem;
  text-decoration: underline;
  margin-bottom: 18px;
}

.hotel-meta-list {
  display: grid;
  gap: 14px;
}

.meta-item strong {
  display: block;
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-muted);
  letter-spacing: 0.06em;
  margin-bottom: 5px;
}

.meta-item p {
  margin: 0;
  font-size: 0.95rem;
  color: #243b53;
  line-height: 1.5;
}

.meta-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meta-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: #243b53;
  font-weight: 600;
  transition: color 150ms ease;
}

.meta-links a:hover {
  color: var(--color-teal);
}

/* Pricing Grid */
.price-section h4 {
  margin: 0 0 4px;
  font-family: var(--font-serif);
  font-size: 1.45rem;
  color: var(--color-navy);
}

.price-subtitle {
  display: block;
  font-size: 0.84rem;
  color: var(--color-muted);
  margin-bottom: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.hotel-prices {
  display: grid;
  gap: 10px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
}

.hotel-prices li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.45);
  font-size: 0.92rem;
}

.hotel-prices li span {
  color: #243b53;
  font-weight: 600;
}

.hotel-prices li strong {
  color: var(--color-coral);
  font-weight: 800;
  font-size: 1.1rem;
}

.price-note {
  margin: 0;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--color-muted);
  line-height: 1.5;
}

/* Contacts card styling */
.contacts-list {
  display: grid;
  gap: 14px;
  margin-top: 10px;
}

.contact-person-card {
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.45);
  display: grid;
  gap: 5px;
}

.contact-role {
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-muted);
  letter-spacing: 0.06em;
}

.contact-name {
  font-family: var(--font-serif);
  font-size: 1.22rem;
  color: var(--color-navy);
  font-weight: 700;
}

.contact-person-links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 4px;
}

.contact-person-links a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #243b53;
  transition: color 150ms ease;
}

.contact-person-links a:hover {
  color: var(--color-teal);
}

/* Fade in animation */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 720px) {
  .premium-table th,
  .premium-table td {
    padding: 12px 14px;
    font-size: 0.88rem;
  }
  
  .hotel-prices li {
    padding: 12px 14px;
    font-size: 0.88rem;
  }
}
</style>
