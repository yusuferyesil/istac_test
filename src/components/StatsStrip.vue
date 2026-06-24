<template>
  <section class="stats-strip card" aria-label="Kongre istatistikleri">
    <div v-for="(stat, index) in stats" :key="stat.label" class="stat-item">
      <component :is="icons[index]" :size="34" stroke-width="1.6" />
      <div>
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChartNoAxesColumnIncreasing, GalleryHorizontalEnd, Globe2, Landmark, UsersRound } from 'lucide-vue-next'

defineProps({
  stats: { type: Array, required: true }
})

const icons = [UsersRound, Globe2, Landmark, ChartNoAxesColumnIncreasing, GalleryHorizontalEnd]
</script>

<style scoped>
.stats-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 22px 12px;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-height: 78px;
  padding: 12px 18px;
  border-right: 1px solid var(--color-border);
  transition: background-color 200ms ease;
}

.stat-item:hover {
  background: rgba(27, 153, 139, 0.04);
}

.stat-item:last-child {
  border-right: none;
}

.stat-item svg {
  color: var(--color-teal);
  flex: 0 0 auto;
  transition: transform 260ms ease;
}

.stat-item:hover svg {
  transform: scale(1.12);
}

.stat-item strong {
  display: block;
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.8vw, 3.15rem);
  line-height: 0.92;
  letter-spacing: -0.04em;
}

.stat-item span {
  display: block;
  margin-top: 4px;
  color: var(--color-muted);
  font-size: 0.9rem;
}

@media (max-width: 1040px) {
  .stats-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stat-item {
    justify-content: flex-start;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }

  .stat-item:nth-last-child(-n + 1) {
    border-bottom: none;
  }
}

@media (max-width: 620px) {
  .stats-strip {
    grid-template-columns: 1fr;
  }

  .stat-item {
    border-bottom: 1px solid var(--color-border);
  }
}
</style>
