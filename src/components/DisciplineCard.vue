<template>
  <article class="discipline-card card">
    <div class="discipline-icon">
      <FlaskConical v-if="icon === 'flask'" :size="46" stroke-width="1.6" />
      <Cpu v-else-if="icon === 'chip'" :size="46" stroke-width="1.6" />
      <Brush v-else :size="46" stroke-width="1.6" />
    </div>
    <div class="discipline-body">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <RouterLink class="text-link" :to="to">
        {{ linkLabel }}
        <ArrowRight aria-hidden="true" />
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, Brush, Cpu, FlaskConical } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  icon: { type: String, default: 'flask' },
  to: { type: String, required: true },
  linkLabel: { type: String, required: true }
})
</script>

<style scoped>
.discipline-card {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 24px;
  min-height: 180px;
  padding: 27px;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.discipline-card:hover {
  transform: translateY(-3px);
  border-color: rgba(27, 153, 139, 0.26);
  box-shadow: 0 18px 40px rgba(16, 42, 67, 0.1);
}

.discipline-icon {
  display: grid;
  place-items: center;
  width: 88px;
  height: 88px;
  border-radius: 999px;
  color: var(--color-teal);
  background: #F0ECE6;
}

h3 {
  margin: 0;
  color: var(--color-teal);
  font-family: var(--font-serif);
  font-size: 2rem;
  line-height: 1;
  letter-spacing: -0.02em;
}

p {
  margin: 10px 0 17px;
  color: #334e68;
  font-size: 0.94rem;
  line-height: 1.55;
}

@media (max-width: 640px) {
  .discipline-card {
    grid-template-columns: 1fr;
  }
}
</style>
