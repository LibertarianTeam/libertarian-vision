import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Help from "@/views/Help";
import About from "@/views/About";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Category from "@/views/Category";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/category/:category/:filter",
      name: "Category",
      component: Category
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/help",
      name: "Help",
      component: Help
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
