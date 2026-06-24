# UBİTESK 2026 Kongre Web Sitesi

Referans görseldeki premium akademik tasarım diline göre hazırlanmış, Vue 3 + Vite tabanlı çok sayfalı kongre web sitesi.

## Kurulum

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Route Yapısı

Türkçe:
- `/tr`
- `/tr/kongre`
- `/tr/sergi`
- `/tr/bildiri-gonderimi`
- `/tr/kayit`
- `/tr/iletisim`

İngilizce:
- `/en`
- `/en/congress`
- `/en/exhibition`
- `/en/submission`
- `/en/registration`
- `/en/contact`

## İçerik Güncelleme

Tüm metinler `src/data/siteContent.js` dosyasında tutulur. Rota karşılıkları `routeMap` içinde tanımlıdır.

## Stil

Ana tema değişkenleri `src/assets/styles/main.css` içinde tanımlıdır:

```css
--color-bg: #F8F7F3;
--color-navy: #102A43;
--color-teal: #1B998B;
--color-coral: #E76F51;
```

## Deployment Notu

Vue Router `createWebHistory()` kullandığı için sunucuda fallback ayarı gerekir. Netlify için `public/_redirects`, Apache için `public/.htaccess` eklendi. Nginx tarafında `try_files $uri $uri/ /index.html;` kullanılmalıdır.
