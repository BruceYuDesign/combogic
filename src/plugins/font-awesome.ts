import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library , config } from '@fortawesome/fontawesome-svg-core'
import {
  faGlobe,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleExclamation,
  faEnvelope,
  faLocationDot,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'


export default defineNuxtPlugin( ( nuxtApp ) => {
  library.add(
    faGlobe,
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleExclamation,
    faLinkedin,
    faFacebook,
    faEnvelope,
    faLocationDot,
    faHome,
  )
  config.autoAddCss = false
  nuxtApp.vueApp.component( 'FontAwesomeIcon' , FontAwesomeIcon )
})