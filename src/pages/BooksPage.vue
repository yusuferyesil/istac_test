<template>
  <div>
    <PageHero :title="t.books.title" :subtitle="t.books.subtitle" />

    <section class="page-section compact">
      <div class="container">
        <div class="books-gallery">
          <BookCard
            v-for="book in booksData.books"
            :key="book.id"
            :title="lang === 'tr' ? book.titleTr : book.titleEn"
            :editor="book.editor"
            :date="book.date"
            :isbn="book.isbn"
            :image="book.image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, Mail } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import BookCard from '../components/BookCard.vue'
import { useLocalizedContent } from '../composables/useLocalizedContent'
import booksData from '../data/books.json'

const { lang, t } = useLocalizedContent()
</script>

<style scoped>
.books-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
  margin-bottom: 24px;
}

@media (max-width: 900px) {
  .books-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .books-gallery {
    grid-template-columns: 1fr;
  }
}

</style>
