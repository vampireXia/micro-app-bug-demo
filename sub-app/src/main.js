import { createApp } from "vue";
import "virtual:uno.css";
import "./style.css";
import microApp from "@micro-zoe/micro-app";
import App from "./App.vue";

microApp.start();
createApp(App).mount("#app");
