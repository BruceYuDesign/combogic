<template>
  <!-- hero content -->
  <Hero/>

  <!-- product concept -->
  <div id="product"
    class="com-wrapper
    bg-secondary-200"
    >
    <h2 class="com-container com-title
      mx-auto
      !text-center"
      >
      {{ $t( 'product.title' ) }}
    </h2>
    <Concept/>
  </div>

  <!-- why chap -->
  <div id="whychap"
    class="com-wrapper
    bg-secondary-100"
    >
    <h2 class="com-container com-title">
      {{ $t( 'whychap.title' ) }}
    </h2>
    <Carousel
      :carousel-list=" whychapList "
      :duration=" 7000 "
      />
  </div>

  <!-- flow -->
  <div id="flow"
    class="com-wrapper
    bg-secondary-200"
    >
    <h2 class="com-container com-title">
      {{ $t( 'flow.title' ) }}
    </h2>
    <Flow
      :before-label=" $t( 'flow.labels.before' ) "
      :after-label=" $t( 'flow.labels.after' ) "
      :flow-list=" flowList "
      />
  </div>

  <!-- team member -->
  <div id="team"
    class="com-wrapper
    bg-secondary-100"
    >
    <h2 class="com-container com-title">
      {{ $t( 'member.title' ) }}
    </h2>
    <Slider
      :slider-list=" memberList "
      :component=" MemberCard "
      :breakpoints="{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 5,
        },
      }"
      />
  </div>

  <!-- popular blog -->
  <div v-if=" popularBlogList.length > 0 "
    id="popularBlog"
    class="com-wrapper
    bg-secondary-200"
    >
    <h2 class="com-container com-title">
      {{ $t( 'blog.title.popular' ) }}
    </h2>
    <Slider
      :slider-list=" popularBlogList "
      :component=" BlogCard "
      :breakpoints="{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }"
      />
  </div>

  <!-- cta -->
  <div id="cta"
    class="com-wrapper"
    :style="`
      background-image: url(${ imgCta });
    `"
    >
    <div class="flex flex-col justify-center items-center">
      <h2 class="com-title
        !text-white pb-5"
        >
        {{ $t( 'others.cta' ) }}
      </h2>
      <a class="com-btn-square
        mx-auto"
        href="#contact"
        >
        {{ $t( 'others.getDemo' ) }}
      </a>
    </div>
  </div>

  <!-- newest blog -->
  <div v-if=" newestBlogList.length > 0 "
    id="newestBlog"
    class="com-wrapper
    bg-secondary-100"
    >
    <h2 class="com-container com-title">
      {{ $t( 'blog.title.newest' ) }}
    </h2>
    <Slider
      :slider-list=" newestBlogList "
      :component=" BlogCard "
      :breakpoints="{
        640: {
          slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }"
      />
    <a class="com-btn-square
      mx-auto mt-4"
      :href=" localePath( '/blog' )"
      >
      {{ t( 'blog.readMore' ) }}
    </a>
  </div>

  <!-- contact us -->
  <Contact/>
</template>

<script setup lang="ts">
import { CarouselType } from '~/components/Carousel.vue'
import { FlowType } from '../components/Flow.vue'
import MemberCard , { MemberCardType } from '~/components/MemberCard.vue'
import BlogCard , { BlogCardType } from '~/components/BlogCard.vue'

import iconMapMarker from '~/assets/icon/map-marker.svg'
import iconDatabase from '~/assets/icon/database.svg'
import iconCalculator from '~/assets/icon/calculator.svg'
import iconChartHistogram from '~/assets/icon/chart-histogram.svg'

import imgAiVehicleAnalysis from '~/assets/whychap/ai-vehicle-analysis.webp'
import imgAiCarbonStrategy from '~/assets/whychap/ai-carbon-strategy.webp'
import imgSaasCloudPlatform from '~/assets/whychap/saas-cloud-platform.webp'
import imgCarbonManagementEsg from '~/assets/whychap/carbon-management-esg.webp'

import avatarWeiMingLi from '~/assets/member/wei-ming-li.png'
import avatarKaysonCho from '~/assets/member/kayson-cho.png'
import avatarTcHung from '~/assets/member/tc-hung.png'
import avatarJimChen from '~/assets/member/jim-chen.png'
import avatarKaUnChiu from '~/assets/member/ka-un-chiu.png'

import imgCta from '~/assets/cta.webp'


const localePath = useLocalePath()
const { locale , t } = useI18n()

// head meta
useHeadConfig({
  title: t( 'pageHead.home.title' ),
  description: t( 'pageHead.home.desc' ),
})

// whychap list
const whychapList: Array<CarouselType> = [
  {
    image: imgAiVehicleAnalysis,
    title: t( 'whychap.list[0].title' ),
    description: t( 'whychap.list[0].desc' ),
  },
  {
    image: imgAiCarbonStrategy,
    title: t( 'whychap.list[1].title' ),
    description: t( 'whychap.list[1].desc' ),
  },
  {
    image: imgSaasCloudPlatform,
    title: t( 'whychap.list[2].title' ),
    description: t( 'whychap.list[2].desc' ),
  },
  {
    image: imgCarbonManagementEsg,
    title: t( 'whychap.list[3].title' ),
    description: t( 'whychap.list[3].desc' ),
  },
]

// flow list
const flowList: Array<FlowType> = [
  {
    icon: iconMapMarker,
    title: t( 'flow.list[0].title' ),
    beforeList: [
      t( 'flow.list[0].beforeList[0]' ),
      t( 'flow.list[0].beforeList[1]' ),
    ],
    afterList: [
      t( 'flow.list[0].afterList[0]' ),
      t( 'flow.list[0].afterList[1]' ),
    ],
  },
  {
    icon: iconDatabase,
    title: t( 'flow.list[1].title' ),
    beforeList: [
      t( 'flow.list[1].beforeList[0]' ),
    ],
    afterList: [
      t( 'flow.list[1].afterList[0]' ),
      t( 'flow.list[1].afterList[1]' ),
    ],
  },
  {
    icon: iconCalculator,
    title: t( 'flow.list[2].title' ),
    beforeList: [
      t( 'flow.list[2].beforeList[0]' ),
      t( 'flow.list[2].beforeList[1]' ),
    ],
    afterList: [
      t( 'flow.list[2].afterList[0]' ),
      t( 'flow.list[2].afterList[1]' ),
    ],
  },
  {
    icon: iconChartHistogram,
    title: t( 'flow.list[3].title' ),
    beforeList: [
      t( 'flow.list[3].beforeList[0]' ),
    ],
    afterList: [
      t( 'flow.list[3].afterList[0]' ),
      t( 'flow.list[3].afterList[1]' ),
    ],
    afterSlot: `
      <h4 class="bg-primary-400 text-white text-center text-lg font-bold px-4 py-4 rounded-lg">
        ${ t( 'flow.list[3].afterSlot[0]' ) }
        </br>
        ${ t( 'flow.list[3].afterSlot[1]' ) }
      </h4>
    `,
  },
]

// member list
const memberList: Array<MemberCardType> = [
  {
    avatar: avatarWeiMingLi,
    name: t( 'member.list[0].name' ),
    jobTitle: t( 'member.list[0].jobTitle' ),
    profession: t( 'member.list[0].profession' ),
    experienceList: [
      t( 'member.list[0].experienceList[0]' ),
    ],
  },
  {
    avatar: avatarKaysonCho,
    name: t( 'member.list[1].name' ),
    jobTitle: t( 'member.list[1].jobTitle' ),
    profession: t( 'member.list[1].profession' ),
    experienceList: [
      t( 'member.list[1].experienceList[0]' ),
    ],
  },
  {
    avatar: avatarTcHung,
    name: t( 'member.list[2].name' ),
    jobTitle: t( 'member.list[2].jobTitle' ),
    profession: t( 'member.list[2].profession' ),
    experienceList: [
      t( 'member.list[2].experienceList[0]' ),
    ],
  },
  {
    avatar: avatarJimChen,
    name: t( 'member.list[3].name' ),
    jobTitle: t( 'member.list[3].jobTitle' ),
    profession: t( 'member.list[3].profession' ),
    experienceList: [
      t( 'member.list[3].experienceList[0]' ),
    ],
  },
  {
    avatar: avatarKaUnChiu,
    name: t( 'member.list[4].name' ),
    jobTitle: t( 'member.list[4].jobTitle' ),
    profession: t( 'member.list[4].profession' ),
    experienceList: [
      t( 'member.list[4].experienceList[0]' ),
    ],
  },
]

// popular blog list
const pathsToMatch = [
  '/tw/smart-city-news',
  '/tw/green-commerce-report',
  '/tw/combogic-news-0818',
  '/tw/green-washing',
  '/tw/green-investment-risk',
  '/tw/green-investment',
]

const popularBlogListResult = await queryContent( locale.value )
  .where({ _path: { $in: pathsToMatch } })
  .find()

popularBlogListResult.sort( ( a: any , b: any ) =>
  pathsToMatch.indexOf( a._path ) - pathsToMatch.indexOf( b._path )
)

const popularBlogList: BlogCardType[] = useBlogInfo( popularBlogListResult )

// newest blog list
const newestBlogListResult = await queryContent( locale.value )
  .sort({ date: -1 })
  .limit( 5 )
  .find()

const newestBlogList: BlogCardType[] = useBlogInfo( newestBlogListResult )
</script>