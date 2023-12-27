<template>
  <div id="contact"
    class="contact-wrapper"
    >
    <div class="com-container
      contact-container"
      >
      <!-- info -->
      <div class="contact-info">
        <img class="contact-info-logo"
          :src=" combogicLogoAll "
          alt="Combogic 櫛構科技"
          width="288"
          height="72"
          >
        <hr class="border-secondary-600">
        <p class="contact-info-desc">
          {{ $t( 'contact.desc' ) }}
        </p>
        <!-- link -->
        <ul class="contact-link-list">
          <li v-for=" ({ name , href , icon }) in linkList "
            :key=" name "
            >
            <a class="contact-link"
              :href=" href "
              target="_blank"
              >
              <ClientOnly>
                <FontAwesomeIcon
                  class="contact-link-icon"
                  :icon=" icon "
                  />
              </ClientOnly>
              {{ name }}
            </a>
          </li>
        </ul>
      </div>
      <!-- form -->
      <form class="contact-form">
        <Field
          v-model=" contactData.name "
          html-tag="input"
          :required=" true "
          :warning=" contactWarn.name "
          :label=" $t( 'contact.form.name.label' ) "
          name="name"
          type="text"
          :placeholder=" $t( 'contact.form.name.placeholder' ) "
          />
        <Field
          v-model=" contactData.com "
          html-tag="input"
          :required=" true "
          :warning=" contactWarn.com "
          :label=" $t( 'contact.form.com.label' ) "
          name="com"
          type="text"
          :placeholder=" $t( 'contact.form.com.placeholder' ) "
          />
        <Field
          v-model=" contactData.tel "
          html-tag="input"
          :required=" false "
          :warning=" contactWarn.tel "
          :label=" $t( 'contact.form.tel.label' ) "
          name="tel"
          type="tel"
          :placeholder=" $t( 'contact.form.tel.placeholder' ) "
          />
        <Field
          v-model=" contactData.email "
          html-tag="input"
          :required=" true "
          :warning=" contactWarn.email "
          :label=" $t( 'contact.form.email.label' ) "
          name="email"
          type="email"
          :placeholder=" $t( 'contact.form.email.placeholder' ) "
          />
        <Field
          class-name="sm:col-span-2"
          v-model=" contactData.detail "
          html-tag="textarea"
          :required=" true "
          :warning=" contactWarn.detail "
          :label=" $t( 'contact.form.detail.label' ) "
          name="detail"
          type="text"
          rows="6"
          maxlength="1000"
          :placeholder=" $t( 'contact.form.detail.placeholder' ) "
          />
        <button class="com-btn-square
          contact-submit"
          @click=" !isLoading && submitEmail() "
          type="button"
          >
          <svg v-if=" isLoading "
            class="contact-submit-spinner"
            viewBox="0 0 50 50"
            >
            <path d="M25,49a24.03363,24.03363,0,0,1-10.68759-2.51129,1.39137,1.39137,0,0,1-.59923-1.94015l1.12269-1.94376a1.365,1.365,0,0,1,1.77606-.557,18.99975,18.99975,0,0,0,27.3467-15.7869A1.36568,1.36568,0,0,1,45.32955,25h2.24422a1.39136,1.39136,0,0,1,1.38075,1.48606A24.03139,24.03139,0,0,1,25,49Z" />
          </svg>
          <span v-else>
            {{ submitText }}
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import combogicLogoAll from '~/assets/logo/combogic-logo-all.svg'


defineOptions({
  name: 'Contact',
  inheritAttrs: false,
})

const { t } = useI18n()

interface LinkItemType {
  name: string
  href: string
  icon: string
}
const linkList: LinkItemType[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/combogic/',
    icon: 'fa-brands fa-linkedin',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/combogic',
    icon: 'fa-brands fa-facebook',
  },
  {
    name: 'service@combogic.com',
    href: 'mailto:service@combogic.com',
    icon: 'fa-solid fa-envelope',
  },
  {
    name: t( 'contact.info.location' ),
    href: 'https://goo.gl/maps/H2uqWRHoJWi8J97R8',
    icon: 'fa-solid fa-location-dot',
  },
]

const isLoading = ref( false )
const submitText = ref( t( 'contact.submit.normal' ) )
const contactData = ref({
  name:   '',
  com:    '',
  tel:    '',
  email:  '',
  detail: '',
})
const contactWarn = ref({
  name:   '',
  com:    '',
  tel:    '',
  email:  '',
  detail: '',
})

const contactVerify: RuleFormType = {
  name: [
    {
      rule: ( value: any ) => value !== '',
      warn: t( 'contact.warn.isRequired' ),
    },
  ],
  com: [
    {
      rule: ( value: any ) => value !== '',
      warn: t( 'contact.warn.isRequired' ),
    },
  ],
  tel: [
    {
      rule: ( value: any ) => value.search( /[0-9]/ ) !== -1 || value === '',
      warn: t( 'contact.warn.telInvalid' ),
    },
  ],
  email: [
    {
      rule: ( value: any ) => value !== '',
      warn: t( 'contact.warn.isRequired' ),
    },
    {
      rule: ( value: any ) => value.search( /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ) !== -1,
      warn: t( 'contact.warn.emailInvalid' ),
    },
  ],
  detail: [
    {
      rule: ( value: any ) => value !== '',
      warn: t( 'contact.warn.isRequired' ),
    },
    {
      rule: ( value: any ) => value.length <= 1000,
      warn: t( 'contact.warn.detailExceedsLimit' ),
    },
  ]
}

const { $emailjs } = useNuxtApp()
const { SERVICE_ID , TEMPLATE_ID , PUBLIC_KEY } = useRuntimeConfig().public.EMAILJS

const submitEmail = () => {
  const { data , warn } = useVerify( contactData.value , contactVerify )
  if( warn ) {
    contactWarn.value = warn
    return
  }
  contactWarn.value = {
    name:   '',
    com:    '',
    tel:    '',
    email:  '',
    detail: '',
  }

  isLoading.value = true

  $emailjs.send( SERVICE_ID , TEMPLATE_ID , data , PUBLIC_KEY )
  .then( () => {
    contactData.value = {
      name:   '',
      com:    '',
      tel:    '',
      email:  '',
      detail: '',
    }
    submitText.value = t( 'contact.submit.success' )
  })
  .catch( ( error: any ) => {
    console.error( error )
    submitText.value = t( 'contact.submit.fail' )
  })
  .finally( () => {
    isLoading.value = false
    setTimeout( () => submitText.value = t( 'contact.submit.normal' ) , 2000 )
  })
}
</script>

<style scoped>
.contact-wrapper {
  @apply bg-secondary-800;
}
.contact-container {
  @apply mx-auto pt-14 pb-10 flex flex-col gap-10 
  md:pt-28 md:flex-row
  lg:gap-20;
}

/* info */
.contact-info {
  @apply w-full flex flex-col gap-6 text-base
  md:w-1/2;
}
.contact-info-logo {
  @apply w-4/5 max-w-[18rem];
}
.contact-info-desc {
  @apply text-secondary-100 leading-loose;
}

/* link */
.contact-link-list {
  @apply flex flex-col gap-4;
}
.contact-link {
  @apply flex gap-2 items-center w-fit text-gray-400 fill-gray-400 transition
  hover:text-primary-400 hover:fill-primary-400;
}
.contact-link-icon {
  @apply w-5 h-5;
}

/* form */
.contact-form {
  @apply w-full grid grid-cols-1 gap-4 auto-rows-max items-end
  sm:grid-cols-2
  md:w-1/2;
}
.contact-submit {
  @apply mt-4 h-10 flex items-center justify-center
  !w-full
  sm:col-span-2;
}
.contact-submit-spinner {
  @apply fill-white w-7 h-7 animate-spin;
}
</style>