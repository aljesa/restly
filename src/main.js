import { createApp } from 'vue'
import { createPinia } from 'pinia';
import VueLazyload from 'vue-lazyload'
import App from './App.vue';
import router from './router/router';
import './assets/main.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserTie, faCalendar, faLinkedinIn, faWhatsapp,faFacebookF)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(createPinia()).use(router).use(VueLazyload).mount('#app')
