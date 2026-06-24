import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { content } from '../data/siteContent'

export function useLocalizedContent() {
  const route = useRoute()
  const lang = computed(() => route.meta.lang || 'tr')
  const pageKey = computed(() => route.meta.pageKey || 'home')
  const t = computed(() => content[lang.value])

  watchEffect(() => {
    const seo = t.value.seo?.[pageKey.value]
    if (!seo) return
    document.title = seo.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', seo.description)
  })

  return { lang, pageKey, t }
}
