<template>
  <svg class="feature-art" viewBox="0 0 380 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="bookCover" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#102A43" />
        <stop offset="1" stop-color="#0D5E66" />
      </linearGradient>
      <linearGradient id="paper" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#FFFDF9" />
        <stop offset="1" stop-color="#E9DECF" />
      </linearGradient>
    </defs>
    <circle cx="275" cy="72" r="60" fill="#EFE5D8" opacity=".8" />
    <path d="M256 25l47 27 1 54-47 27-47-27V52l46-27Z" stroke="#BBAE9C" stroke-width="1.2" />
    <path d="M257 25v108M210 52l94 54M304 52l-94 54" stroke="#BBAE9C" stroke-width="1" opacity=".75" />

    <g transform="translate(50 35)">
      <path d="M21 84L159 46l72 33-143 44L21 84Z" fill="#D9CCBA" />
      <path d="M28 62L166 24l72 33-143 44L28 62Z" fill="url(#bookCover)" />
      <path d="M95 101l143-44v18L95 119V101Z" fill="#E3D7C9" />
      <path d="M28 62l67 39v18L28 80V62Z" fill="#0F5D66" />
      <path d="M43 69L178 32" stroke="#EBCB8B" stroke-width="2" opacity=".7" />
      <path d="M58 76L192 39" stroke="#EBCB8B" stroke-width="1" opacity=".48" />

      <path d="M9 105l140-38 72 33-143 44L9 105Z" fill="#B29E7E" />
      <path d="M17 86l140-38 72 33-143 44L17 86Z" fill="#365F5D" />
      <path d="M86 125l143-44v17L86 143v-18Z" fill="#EFE4D6" />
      <path d="M17 86l69 39v18L17 104V86Z" fill="#234947" />

      <path d="M0 128l140-38 72 33-143 44L0 128Z" fill="#E6D7C5" />
      <path d="M8 108l140-38 72 33-143 44L8 108Z" fill="url(#paper)" />
      <path d="M77 147l143-44v19L77 166v-19Z" fill="#E4D6C4" />
      <path d="M8 108l69 39v19L8 127v-19Z" fill="#F0E6D8" />
      <path d="M29 115l70-19M43 124l70-19M57 133l70-19" stroke="#B9AA98" stroke-width="1.3" opacity=".76" />
    </g>
    <path d="M250 175l50-21 6 12-51 21-5-12Z" fill="#C98E43" />
    <path d="M299 154l17-8 6 12-16 8-7-12Z" fill="#102A43" />
  </svg>
</template>

<style scoped>
.feature-art {
  width: 100%;
  min-width: 250px;
}
</style>
