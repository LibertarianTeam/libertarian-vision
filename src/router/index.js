import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home";
import Category from "@/pages/Category";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      alias: ["/home"]
    },
    {
      path: "/category/:category/:filter",
      name: "Category",
      component: Category
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/Login")
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/pages/Register")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/pages/About")
    },
    {
      path: "/help",
      name: "Help",
      component: () => import("@/pages/Help")
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("@/pages/NotFound")
    }
  ]
});
