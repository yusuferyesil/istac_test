<template>
  <div>
    <PageHero :title="t.committees.title" :subtitle="t.committees.subtitle" />

    <section class="page-section compact">
      <div class="container">
        <div v-for="committee in committeesData.committees" :key="committee.id" class="committee-section">
          <h2 class="committee-title">
            <component :is="getIcon(committee.id)" :size="28" stroke-width="1.7" />
            {{ lang === 'tr' ? committee.titleTr : committee.titleEn }}
          </h2>
          <div class="members-grid">
            <CommitteeMemberCard
              v-for="(member, idx) in committee.members"
              :key="idx"
              :name="member.name"
              :university="member.university"
              :country="member.country"
              :role="lang === 'tr' ? member.roleTr : member.roleEn"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Award, Crown, GraduationCap, Settings, Mail } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import CommitteeMemberCard from '../components/CommitteeMemberCard.vue'
import { useLocalizedContent } from '../composables/useLocalizedContent'
import committeesData from '../data/committees.json'

const { lang, t } = useLocalizedContent()

function getIcon(id) {
  switch (id) {
    case 'honorary': return Award
    case 'honorary-president': return Crown
    case 'scientific': return GraduationCap
    case 'organizing': return Settings
    case 'secretariat': return Mail
    default: return Award
  }
}
</script>

<style scoped>
.committee-section {
  margin-bottom: 54px;
  padding-bottom: 54px;
  border-bottom: 1px solid var(--color-border);
}

.committee-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.committee-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 28px;
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: var(--color-navy);
  line-height: 1;
}

.committee-title svg {
  color: var(--color-teal);
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 1120px) {
  .members-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .members-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 540px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
}
</style>
