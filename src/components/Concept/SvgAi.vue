<template>
  <svg viewBox="0 0 1400 823">
    <g class="stroke-primary-300 stroke-[3px]"
      style=" stroke-linecap: round; "
      >
      <path id="conceptLink1"
        style=" fill: none; "
        d="M1103.55672,203.17392c-23.73179-14.69751-82.5294-46.48267-160.97676-42-125.14926,7.15112-198.53231,100.79004-210.05505,116"
        />
      <path id="conceptLink2"
        style=" fill: none; "
        d="M731.92299,277.6683c12.13464-36.22388,23.93188-54.229,35.39197-54.01245,32.60144,.61646,62.47119,148.69995,89.60925,444.27148"
        />
    </g>
  </svg>
</template>

<style>
#conceptLink1,
#conceptLink2 {
  transition-duration: 1000ms;
  stroke-dasharray: 750;
  stroke-dashoffset: 750;
}

/* active */
.concept-animate-active #conceptLink1,
.concept-animate-active #conceptLink2 {
  stroke-dashoffset: 0;
}

.concept-animate-active #conceptLink1 {
  transition-delay: 500ms;
}

.concept-animate-active #conceptLink2 {
  transition-delay: 1500ms;
}
</style>