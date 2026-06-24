<template>
  <svg class="feature-art" viewBox="0 0 380 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="artTeal" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#0D5E66" />
        <stop offset="1" stop-color="#1B998B" />
      </linearGradient>
      <pattern id="artDots" width="13" height="13" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#102A43" opacity=".25" />
      </pattern>
    </defs>
    <circle cx="75" cy="165" r="76" fill="#EDE4D9" />
    <circle cx="318" cy="182" r="36" fill="#1B998B" opacity=".25" />
    <rect x="0" y="154" width="138" height="58" fill="url(#artDots)" opacity=".48" />

    <g filter="url(#shadow)">
      <rect x="31" y="28" width="88" height="126" fill="#F8F7F3" stroke="#C7B6A1" stroke-width="4" />
      <rect x="143" y="52" width="70" height="102" fill="#F8F7F3" stroke="#C7B6A1" stroke-width="4" />
      <rect x="236" y="42" width="72" height="112" fill="#F8F7F3" stroke="#C7B6A1" stroke-width="4" />
    </g>
    <path d="M42 111c18-35 37-37 56-6 13 21 19 26 31 7" stroke="url(#artTeal)" stroke-width="10" stroke-linecap="round" opacity=".85" />
    <path d="M42 130c23-19 43-19 62 0 15 16 29 16 43-1" stroke="#102A43" stroke-opacity=".42" stroke-width="4" />
    <path d="M153 136l29-49 25 49h-54Z" fill="url(#artTeal)" opacity=".8" />
    <path d="M175 96l15-28 25 68h-30l-10-40Z" fill="#EDE4D9" />
    <path d="M246 132c18-18 38-53 53-66" stroke="#B7A996" stroke-width="3" />
    <path d="M252 66c33 25 24 54 2 77" stroke="#102A43" stroke-opacity=".24" stroke-width="3" />
    <path d="M270 55c-17 31-3 56 31 72" stroke="#E76F51" stroke-opacity=".48" stroke-width="3" />
  </svg>
</template>

<style scoped>
.feature-art {
  width: 100%;
  min-width: 250px;
}
</style>
