<template>
  <article class="info-card card">
    <div class="info-icon">
      <component :is="iconComponent" :size="30" stroke-width="1.8" />
    </div>
    <div>
      <span>{{ label }}</span>
      <strong v-html="value"></strong>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { CalendarDays, Globe2, Languages, MapPin, UsersRound, BookOpen } from 'lucide-vue-next'

const props = defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  index: { type: Number, default: 0 }
})

const icons = [CalendarDays, MapPin, BookOpen, Languages, UsersRound, Globe2]
const iconComponent = computed(() => icons[props.index] || Globe2)
</script>

<style scoped>
.info-card {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 16px;
  align-items: center;
  padding: 19px 20px;
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}

.info-card:hover {
  transform: translateY(-3px);
  border-color: rgba(27, 153, 139, 0.26);
  box-shadow: 0 14px 28px rgba(16, 42, 67, 0.1);
}

.info-icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border: 1px solid rgba(27, 153, 139, 0.32);
  border-radius: 16px;
  color: var(--color-teal);
  background: rgba(27, 153, 139, 0.07);
  transition: transform 260ms ease, background-color 260ms ease;
}

.info-card:hover .info-icon {
  transform: scale(1.08);
  background: rgba(27, 153, 139, 0.12);
}

span {
  display: block;
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

strong {
  display: block;
  margin-top: 3px;
  color: var(--color-navy);
  font-size: 1rem;
  line-height: 1.35;
}
</style>
