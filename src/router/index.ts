import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import AboutViewVue from "@/views/AboutView.vue";
import Profile from "../views/Profile.vue";
import Contact from "../views/Contact.vue";
import { authGuard } from "@auth0/auth0-vue";

const router: any = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: authGuard
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
      beforeEnter: authGuard
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      beforeEnter: authGuard
    },
  ],
});


export default router;
