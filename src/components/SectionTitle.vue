<template>
  <div :class="['section-title', { centered }]">
    <span class="section-kicker">{{ kicker }}</span>
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, default: '' },
  centered: { type: Boolean, default: false }
})
</script>

<style scoped>
.section-title {
  max-width: 760px;
  margin-bottom: 30px;
}

.section-title.centered {
  margin-inline: auto;
  text-align: center;
}

.section-title.centered :deep(.section-kicker) {
  justify-content: center;
}

.section-title.centered :deep(.section-kicker)::after {
  content: '';
  display: inline-block;
  width: 34px;
  height: 2px;
  background: var(--color-teal);
}

.section-title h2 {
  margin: 0;
  font-family: var(--font-serif);
  color: var(--color-navy);
  font-size: clamp(2.55rem, 5vw, 4.8rem);
  line-height: 0.94;
  letter-spacing: -0.05em;
}

.section-title p {
  margin: 18px 0 0;
  color: var(--color-muted);
  font-size: 1.06rem;
}
</style>
