import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/HomePage"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/LoginPage"),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/RegisterPage"),
  },
  {
    name: "profile",
    path: "/@:username",
    component: () => import("@/views/ProfilePage"),
  },
  {
    name: "settings",
    path: "/settings",
    component: () => import("@/views/SettingsPage"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
