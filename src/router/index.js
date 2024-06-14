import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TI from "../views/TI.vue";
import SI from "../views/SI.vue";
import KFTM from "../views/KFTM.vue";

// bagian router untuk berpindah halaman
const routes = [
  { path: "/", component: HomePage },
  { path: "/informatika", component: TI },
  { path: "/sistem_informasi", component: SI },
  { path: "/kftm", component: KFTM },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
