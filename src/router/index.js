import { createRouter, createWebHashHistory } from "vue-router";
import Demo from "../Demo.vue";
import Demo2 from "../Demo2.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/demo",
      component: () => Demo,
    },
    {
      path: "/demo2",
      component: () => Demo2,
    },
  ],
});

export default router;
