<template>
  <header class="site-header">
    <a class="skip-link" href="#main-content">İçeriğe geç</a>
    <div class="header-inner container">
      <RouterLink :to="homePath" class="brand" :aria-label="t.common.brand">
        <LogoMark />
        <span>
          <strong>{{ t.common.brand }}</strong>
          <small>{{ t.common.tagline }}</small>
        </span>
      </RouterLink>

      <button class="menu-toggle" type="button" :aria-expanded="isOpen" aria-label="Menüyü aç/kapat" @click="isOpen = !isOpen">
        <Menu v-if="!isOpen" :size="24" />
        <X v-else :size="24" />
      </button>

      <nav :class="['main-nav', { 'is-open': isOpen }]" aria-label="Ana menü">
        <RouterLink
          v-for="item in nav"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: pageKey === item.key }"
          @click="isOpen = false"
        >
          {{ item.label }}
        </RouterLink>

        <div class="language-switcher" :aria-label="t.common.language">
          <Globe2 :size="18" />
          <RouterLink :class="{ active: lang === 'tr' }" :to="langPath('tr')">TR</RouterLink>
          <span>/</span>
          <RouterLink :class="{ active: lang === 'en' }" :to="langPath('en')">EN</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Globe2, Menu, X } from 'lucide-vue-next'
import LogoMark from './LogoMark.vue'
import { content, navItems, routeMap } from '../data/siteContent'

const route = useRoute()
const isOpen = ref(false)
const lang = computed(() => route.meta.lang || 'tr')
const pageKey = computed(() => route.meta.pageKey || 'home')
const t = computed(() => content[lang.value])
const nav = computed(() => navItems[lang.value])
const homePath = computed(() => routeMap.home[lang.value])

function langPath(targetLang) {
  const key = pageKey.value || 'home'
  return routeMap[key]?.[targetLang] || routeMap.home[targetLang]
}

watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(16, 42, 67, 0.08);
  background: rgba(248, 247, 243, 0.86);
  backdrop-filter: blur(18px);
}

.skip-link {
  position: absolute;
  left: 14px;
  top: -44px;
  z-index: 100;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--color-navy);
  color: white;
  transition: top 160ms ease;
}

.skip-link:focus {
  top: 12px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 86px;
  gap: 30px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: max-content;
}

.brand strong {
  display: block;
  font-family: var(--font-serif);
  color: var(--color-navy);
  font-size: clamp(1.65rem, 2.4vw, 2.2rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.brand small {
  display: block;
  margin-top: 4px;
  color: var(--color-teal);
  font-size: 0.79rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(18px, 2.8vw, 42px);
  width: 100%;
}

.nav-link {
  position: relative;
  padding: 31px 0 28px;
  color: var(--color-navy);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: color 200ms ease;
}

.nav-link:hover {
  color: var(--color-teal);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 17px;
  width: 0%;
  height: 2px;
  background: var(--color-teal);
  transform: translateX(-50%);
  transition: width 180ms ease;
}

.nav-link.active::after,
.nav-link:hover::after {
  width: 100%;
}

.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-navy);
  font-size: 0.88rem;
  font-weight: 800;
}

.language-switcher svg {
  color: var(--color-navy);
}

.language-switcher a {
  opacity: 0.55;
}

.language-switcher a.active {
  color: var(--color-teal);
  opacity: 1;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--color-navy);
}

@media (max-width: 980px) {
  .header-inner {
    min-height: 78px;
    position: relative;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }
  
  .menu-toggle:active {
    transform: scale(0.95);
  }

  .main-nav {
    position: absolute;
    left: 12px;
    right: 12px;
    top: calc(100% + 8px);
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px;
    border: 1px solid var(--color-border, rgba(16, 42, 67, 0.08));
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    box-shadow: var(--shadow-card, 0 16px 40px rgba(16, 42, 67, 0.12));
    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px) scale(0.98);
    transform-origin: top center;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .main-nav.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0) scale(1);
  }

  .nav-link {
    display: block;
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--color-navy);
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .nav-link.active,
  .nav-link:hover {
    background: rgba(27, 153, 139, 0.08);
    color: var(--color-teal);
  }

  .nav-link::after {
    display: none;
  }

  .language-switcher {
    display: flex;
    justify-content: center;
    padding: 16px 12px 8px;
    margin-top: 8px;
    border-top: 1px solid var(--color-border, rgba(16, 42, 67, 0.08));
    gap: 12px;
  }
}

@media (max-width: 520px) {
  .brand strong {
    font-size: 1.45rem;
  }

  .brand small {
    font-size: 0.66rem;
  }

  :deep(.logo-mark) {
    width: 48px;
    height: 48px;
  }
}
</style>
