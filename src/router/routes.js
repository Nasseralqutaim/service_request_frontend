import SignupView from "@/views/SignupView.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView, // This should be the component for home view, not App.vue
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
];

export default routes;