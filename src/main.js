import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/styles.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShareSquare,
  faCertificate,
  faTasks,
  faBook,
  faInfoCircle,
  faBoxOpen,
  faComments,
  faTheaterMasks,
  faHandshake,
  faFileAlt,
  faShoePrints,
  faTachometerAlt,
  faUsers,
  faHiking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faShareSquare,
  faCertificate,
  faTasks,
  faBook,
  faInfoCircle,
  faBoxOpen,
  faComments,
  faTheaterMasks,
  faHandshake,
  faFileAlt,
  faShoePrints,
  faTachometerAlt,
  faUsers,
  faHiking
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
