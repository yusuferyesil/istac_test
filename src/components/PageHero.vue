<template>
  <section class="page-hero">
    <div class="container">
      <div class="page-hero-card">
        <div class="page-hero-content">
          <span class="section-kicker">ISTAC 2026</span>
          <h1>{{ title }}</h1>
          <p>{{ subtitle }}</p>
        </div>
        <div class="hero-deco hero-deco-1" aria-hidden="true"></div>
        <div class="hero-deco hero-deco-2" aria-hidden="true"></div>
        <div class="hero-deco hero-deco-3" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true }
})
</script>

<style scoped>
.hero-deco {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.55;
}

.hero-deco-1 {
  width: 180px;
  height: 180px;
  top: -60px;
  right: -40px;
  background: radial-gradient(circle, rgba(27, 153, 139, 0.18), transparent 70%);
  animation: floatSlow 8s ease-in-out infinite;
}

.hero-deco-2 {
  width: 100px;
  height: 100px;
  bottom: -30px;
  left: 10%;
  background: radial-gradient(circle, rgba(231, 111, 81, 0.14), transparent 70%);
  animation: floatSlow 10s ease-in-out infinite reverse;
}

.hero-deco-3 {
  width: 60px;
  height: 60px;
  top: 30%;
  right: 12%;
  background: radial-gradient(circle, rgba(27, 153, 139, 0.12), transparent 70%);
  animation: floatSlow 6s ease-in-out infinite 1s;
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-18px) scale(1.06); }
}
</style>
