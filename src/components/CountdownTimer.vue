<template>
  <div class="countdown-card card">
    <div class="countdown-inner">
      <div class="countdown-label">
        <Clock :size="20" />
        <span>{{ lang === 'tr' ? 'Kongreye Kalan Zaman' : 'Time Until Congress' }}</span>
      </div>
      <div class="time-blocks">
        <div class="time-block">
          <strong>{{ days }}</strong>
          <span>{{ lang === 'tr' ? 'Gün' : 'Days' }}</span>
        </div>
        <div class="time-block">
          <strong>{{ hours }}</strong>
          <span>{{ lang === 'tr' ? 'Saat' : 'Hours' }}</span>
        </div>
        <div class="time-block">
          <strong>{{ minutes }}</strong>
          <span>{{ lang === 'tr' ? 'Dakika' : 'Mins' }}</span>
        </div>
        <div class="time-block">
          <strong>{{ seconds }}</strong>
          <span>{{ lang === 'tr' ? 'Saniye' : 'Secs' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Clock } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const lang = computed(() => route.meta.lang || 'tr')

// Target date: October 9, 2026
const targetDate = new Date('2026-10-09T09:00:00').getTime()

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

let timerInterval = null

const updateTimer = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    clearInterval(timerInterval)
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
}

onMounted(() => {
  updateTimer()
  timerInterval = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<style scoped>
.countdown-card {
  margin-top: 36px;
  background: linear-gradient(135deg, rgba(27, 153, 139, 0.94), rgba(13, 94, 102, 0.96));
  border-color: rgba(255, 255, 255, 0.1);
  color: white;
  overflow: hidden;
  position: relative;
  box-shadow: 0 16px 32px rgba(16, 42, 67, 0.14);
}

.countdown-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.15), transparent 25%),
                    radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.1), transparent 30%);
  pointer-events: none;
}

.countdown-inner {
  position: relative;
  z-index: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.countdown-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.time-blocks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.time-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 16px 8px;
  backdrop-filter: blur(8px);
}

.time-block strong {
  font-size: 1.85rem;
  font-weight: 700;
  line-height: 1;
  font-family: var(--font-serif);
}

.time-block span {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 6px;
  opacity: 0.9;
}

@media (max-width: 500px) {
  .time-blocks {
    gap: 8px;
  }
  .time-block {
    padding: 12px 4px;
  }
  .time-block strong {
    font-size: 1.4rem;
  }
  .time-block span {
    font-size: 0.65rem;
  }
}
</style>
