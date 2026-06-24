<template>
  <RouterLink v-if="to" :to="to" :class="buttonClass">
    <span><slot /></span>
    <ArrowRight :size="18" aria-hidden="true" />
  </RouterLink>
  <button v-else :type="type" :class="buttonClass">
    <span><slot /></span>
    <ArrowRight v-if="showArrow" :size="18" aria-hidden="true" />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  to: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' },
  showArrow: { type: Boolean, default: true }
})

const buttonClass = computed(() => ['base-btn', `base-btn--${props.variant}`])
</script>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  min-height: 52px;
  padding: 0 26px;
  border: 1px solid transparent;
  border-radius: 9px;
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
}

.base-btn:hover {
  transform: translateY(-1px);
}

.base-btn--primary {
  color: #fff;
  background: var(--color-coral);
  box-shadow: 0 14px 28px rgba(231, 111, 81, 0.24);
}

.base-btn--primary:hover {
  box-shadow: 0 18px 36px rgba(231, 111, 81, 0.28);
}

.base-btn--secondary {
  color: var(--color-navy);
  background: rgba(255, 255, 255, 0.44);
  border-color: rgba(16, 42, 67, 0.58);
}

.base-btn--secondary:hover {
  border-color: var(--color-teal);
  box-shadow: 0 12px 24px rgba(16, 42, 67, 0.08);
}

@media (max-width: 520px) {
  .base-btn {
    width: 100%;
  }
}
</style>
