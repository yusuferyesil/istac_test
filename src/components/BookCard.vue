<template>
  <div class="book-card">
    <div class="book-cover">
      <img v-if="image" :src="image" :alt="title" class="cover-image" />
      <template v-else>
        <div class="book-spine"></div>
        <div class="cover-content">
          <BookIcon :size="32" stroke-width="1.5" />
          <span class="cover-brand">ISTAC</span>
        </div>
      </template>
    </div>
    <div class="book-details">
      <h3>{{ title }}</h3>
      <div class="book-meta">
        <span class="meta-item"><User :size="14" /> Editör: {{ editor }}</span>
        <span class="meta-item"><Calendar :size="14" /> {{ date }}</span>
        <span class="meta-item"><Hash :size="14" /> ISBN: {{ isbn }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Book as BookIcon, User, Calendar, Hash } from 'lucide-vue-next'

defineProps({
  title: String,
  editor: String,
  date: String,
  isbn: String,
  image: String
})
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px 24px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.6);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.book-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(16, 42, 67, 0.08);
}

.book-cover {
  position: relative;
  width: 160px;
  height: 230px;
  margin: 0 auto;
  border-radius: 4px 12px 12px 4px;
  background: linear-gradient(135deg, var(--color-teal), #126b61);
  box-shadow: -4px 4px 12px rgba(0, 0, 0, 0.15), inset 4px 0 8px rgba(255, 255, 255, 0.2);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.book-spine {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.cover-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #fff;
}

.cover-brand {
  font-family: var(--font-serif);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  opacity: 0.9;
}

.book-details {
  text-align: center;
}

.book-details h3 {
  margin: 0 0 16px;
  font-family: var(--font-serif);
  font-size: 1.15rem;
  line-height: 1.35;
  color: var(--color-navy);
}

.book-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--color-muted);
}
</style>
