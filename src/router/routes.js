import SignupView from "@/views/SignupView.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";
import RequestDetailView from "@/views/RequestDetailView.vue";
import UserRequestsView from "@/views/UserRequestsView.vue";

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
    path: "/requests/:id",
    name: "request-detail",
    component: RequestDetailView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/users/:user_id/requests",
    name: "user-requests",
    component: UserRequestsView,
  },
];

export default routes;
