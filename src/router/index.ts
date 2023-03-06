import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store/index";
import AboutViewVue from "@/views/AboutView.vue";
import Profile from "../views/Profile.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/about",
      name: "about",
      component: AboutViewVue,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
