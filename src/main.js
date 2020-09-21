import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import BootstrapVue from "bootstrap-vue";
import "./assets/styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faPhone,
  faEnvelope,
  faCar,
  faMapMarkerAlt,
  faBirthdayCake,
  faFilePdf,
  faTerminal,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGit,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faReact,
  faNodeJs,
  faSass,
  faWordpress,
  faNpm,
  faVuejs,
  faBootstrap,
  faPhp,
  faMicrosoft,
  faFigma,
  faAngular,
  faUbuntu,
  faJira, faBitbucket, faConfluence
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faGit,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faSass,
  faWordpress,
  faNpm,
  faCheck,
  faVuejs,
  faPhone,
  faEnvelope,
  faCar,
  faMapMarkerAlt,
  faBirthdayCake,
  faBootstrap,
  faPhp,
  faMicrosoft,
  faFigma,
  faFilePdf,
  faTerminal,
  faExclamationTriangle,
  faAngular,
  faUbuntu,
  faJira,
  faBitbucket,
  faConfluence
);

// Here is some examples but you can add any other icon by typing in the library.add(ADD_HERE_ANY_NAME_OF_ICON);
export default function(Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo);
  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);
}