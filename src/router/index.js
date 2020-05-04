import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Category from "@/views/Category";

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
      component: () => import("@/views/Login")
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/Register")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About")
    },
    {
      path: "/help",
      name: "Help",
      component: () => import("@/views/Help")
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("@/views/NotFound")
    }
  ]
});
