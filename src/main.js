import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

import axios from "axios";
import VueAxios from "vue-axios";

import store from "./store";
require("@/assets/main.scss");

const app = createApp(App);
app.config.devtools = true;
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
