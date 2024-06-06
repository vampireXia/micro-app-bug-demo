import { createApp } from "vue";
import "virtual:uno.css";
import "./style.css";
import microApp from "@micro-zoe/micro-app";
import App from "./App.vue";
import router from "./router";

microApp.start();
const app = createApp(App);
app.use(router);
app.mount("#app");
