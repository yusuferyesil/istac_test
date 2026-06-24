<template>
  <article class="feature-card card">
    <div class="feature-visual">
      <ExhibitionIllustration v-if="type === 'exhibition'" />
      <BookIllustration v-else />
    </div>
    <div class="feature-copy">
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
import { ArrowRight } from 'lucide-vue-next'
import ExhibitionIllustration from './ExhibitionIllustration.vue'
import BookIllustration from './BookIllustration.vue'

defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  type: { type: String, default: 'exhibition' },
  to: { type: String, required: true },
  linkLabel: { type: String, required: true }
})
</script>

<style scoped>
.feature-card {
  display: grid;
  grid-template-columns: minmax(210px, 0.82fr) minmax(0, 1fr);
  gap: 22px;
  min-height: 240px;
  overflow: hidden;
  padding: 20px;
  background:
    radial-gradient(circle at 10% 10%, rgba(27, 153, 139, 0.1), transparent 32%),
    rgba(255, 255, 255, 0.68);
  transition: transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(27, 153, 139, 0.22);
  box-shadow: 0 20px 44px rgba(16, 42, 67, 0.12);
}

.feature-visual {
  display: grid;
  place-items: center;
  min-height: 200px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(248,247,243,.8), rgba(255,255,255,.42));
  overflow: hidden;
}

.feature-copy {
  align-self: center;
  padding-right: 16px;
}

h3 {
  margin: 0;
  font-family: var(--font-serif);
  color: var(--color-navy);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

p {
  margin: 15px 0 20px;
  color: #334e68;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 780px) {
  .feature-card {
    grid-template-columns: 1fr;
  }

  .feature-copy {
    padding: 0 4px 8px;
  }
}
</style>
