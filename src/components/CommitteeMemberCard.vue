<template>
  <div class="member-card">
    <div class="member-avatar">
      <User :size="22" stroke-width="1.8" />
    </div>
    <div class="member-info">
      <strong>{{ name }}</strong>
      <span v-if="role" class="member-role">{{ role }}</span>
      <span class="member-university">{{ university }}</span>
      <span class="member-country">
        <MapPin :size="13" stroke-width="2" />
        {{ country }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { User, MapPin } from 'lucide-vue-next'

defineProps({
  name: { type: String, required: true },
  university: { type: String, required: true },
  country: { type: String, required: true },
  role: { type: String, default: '' }
})
</script>

<style scoped>
.member-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 18px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.58);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.member-card:hover {
  transform: translateY(-2px);
  border-color: rgba(27, 153, 139, 0.24);
  box-shadow: 0 8px 24px rgba(16, 42, 67, 0.08);
}

.member-avatar {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: rgba(27, 153, 139, 0.08);
  color: var(--color-teal);
  flex: 0 0 auto;
}

.member-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.member-info strong {
  font-size: 0.92rem;
  color: var(--color-navy);
  line-height: 1.3;
}

.member-role {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 800;
  color: var(--color-coral);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 1px;
  margin-bottom: 2px;
}

.member-university {
  font-size: 0.82rem;
  color: var(--color-muted);
  line-height: 1.4;
}

.member-country {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
  font-size: 0.78rem;
  color: var(--color-teal);
  font-weight: 700;
}
</style>
