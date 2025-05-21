import RootLayout from "@/layouts/RootLayout.vue";
import HomeView from "@/views/home/HomeView.vue";
import NotFound from "@/views/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: RootLayout,
    children: [
      {
        path: "/", // This means "/"
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
