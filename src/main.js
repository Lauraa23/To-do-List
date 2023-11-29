import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrashCan, faCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashCan, faPlus, faCircle, faCircleCheck);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");

app.use(createPinia());
