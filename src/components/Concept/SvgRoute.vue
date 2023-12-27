<template>
  <svg viewBox="0 0 1400 823">
    <g class="stroke-primary-300"
      style="
        stroke-linecap: round;
        stroke-linejoin: round;
      ">
      <g class="stroke-[5px]">
        <line id="conceptPass"
          style=" fill: none; "
          x1="1235.14719"
          y1="481.5793"
          x2="856.66195"
          y2="705.14057"
          />
        <path id="conceptRoute"
          class="opacity-50"
          style=" fill: none; "
          d="M856.66195,705.14057l-119.00557,70.29345c-6.26586,3.70108-14.05249,3.68582-20.30379-.0398L271.01223,509.3869l57.69038-35.27829"
          />
      </g>
      <g id="conceptMark"
        class="stroke-[3px]"
        >
        <g>
          <path class="fill-primary-300/75"
            d="M335.27964,411.07783c-11.1965,0-20.27306,9.07656-20.27306,20.27306s20.27306,31.76113,20.27306,31.76113c0,0,20.27306-20.56463,20.27306-31.76113s-9.07656-20.27306-20.27306-20.27306Zm0,28.41945c-4.49913,0-8.14638-3.64726-8.14638-8.14638s3.64726-8.14638,8.14638-8.14638,8.14638,3.64726,8.14638,8.14638-3.64726,8.14638-8.14638,8.14638Z"
            />
        </g>
        <path style=" fill: none; "
          d="M335.27964,411.07783c-11.1965,0-20.27306,9.07656-20.27306,20.27306s20.27306,31.76113,20.27306,31.76113c0,0,20.27306-20.56463,20.27306-31.76113s-9.07656-20.27306-20.27306-20.27306Zm0,28.41945c-4.49913,0-8.14638-3.64726-8.14638-8.14638s3.64726-8.14638,8.14638-8.14638,8.14638,3.64726,8.14638,8.14638-3.64726,8.14638-8.14638,8.14638Z"
          />
      </g>
    </g>
    <g id="conceptCo2e">
      <g class="stroke stroke-primary-300 fill-primary-300/20">
        <rect class="g"
          x="680.05263"
          y="628.67392"
          width="118"
          height="46"
          rx="7"
          ry="7"
          />
        <path class="d"
          d="M791.05263,629.67392c3.30859,0,6,2.69165,6,6v32c0,3.30835-2.69141,6-6,6h-104c-3.30859,0-6-2.69165-6-6v-32c0-3.30835,2.69141-6,6-6h104m0-2h-104c-4.41846,0-8,3.58179-8,8v32c0,4.41821,3.58154,8,8,8h104c4.41846,0,8-3.58179,8-8v-32c0-4.41821-3.58154-8-8-8h0Z"
          />
      </g>
      <g class="text-[24px] fill-primary-300 font-semibold tracking-wider">
        <text class="h"
          transform="translate(693.16005 660.59286)"
          >
          <tspan class="c"
            x="0"
            y="0"
            >
            C
          </tspan>
          <tspan class="b"
            x="16.17578"
            y="0"
            >
            O
          </tspan>
        </text>
        <text class="e"
          transform="translate(729.39931 668.58505) scale(.583)"
          >
          <tspan
            x="0"
            y="0"
            >
            2
          </tspan>
        </text>
        <text class="f"
          transform="translate(738.62001 660.59286)"
          >
          <tspan
            x="0"
            y="0"
            >
            e ▼
          </tspan>
        </text>
      </g>
    </g>
  </svg>
</template>

<style>
#conceptCo2e {
  @apply opacity-0;
  transition-duration: 200ms;
}

#conceptPass,
#conceptRoute,
#conceptMark {
  transition-duration: 750ms;
}

#conceptPass,
#conceptRoute {
  stroke-dasharray: 750;
  stroke-dashoffset: 750;
}

#conceptMark {
  @apply -translate-y-6 opacity-0;
}

/* active */
.concept-animate-active #conceptCo2e {
  @apply opacity-100;
  transition-delay: 500ms;
}

.concept-animate-active #conceptPass,
.concept-animate-active #conceptRoute {
  stroke-dashoffset: 0;
}

.concept-animate-active #conceptPass {
  transition-delay: 0ms;
}

.concept-animate-active #conceptRoute {
  transition-delay: 750ms;
}

.concept-animate-active #conceptMark {
  @apply translate-y-0 opacity-100;
  transition-delay: 1750ms;
}
</style>