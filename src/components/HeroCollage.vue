<template>
  <div class="hero-image-wrapper">
    <div class="image-container">
      <img src="/hero.png" alt="ISTAC 2026 Hero" class="hero-image" />
      <div class="deco-dots"></div>
      <div class="deco-circle deco-circle-teal"></div>
      <div class="deco-circle deco-circle-coral"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(16, 42, 67, 0.15);
  position: relative;
  z-index: 2;
  transition: transform 0.4s ease;
  object-fit: cover;
  background: var(--color-light); /* fallback background */
}

.hero-image:hover {
  transform: translateY(-4px);
}

.deco-dots {
  position: absolute;
  top: -24px;
  right: -24px;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(circle, rgba(16, 42, 67, 0.15) 2px, transparent 2px);
  background-size: 14px 14px;
  z-index: 1;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.deco-circle-teal {
  width: 140px;
  height: 140px;
  left: -40px;
  bottom: -40px;
  background: rgba(27, 153, 139, 0.15);
  z-index: 0;
}

.deco-circle-coral {
  width: 60px;
  height: 60px;
  right: -10px;
  bottom: 20%;
  background: rgba(231, 111, 81, 0.2);
  z-index: 3;
}

@media (max-width: 1120px) {
  .hero-image-wrapper {
    margin-top: 20px;
    min-height: auto;
  }
}
</style>
